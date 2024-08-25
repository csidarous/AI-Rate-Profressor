import { Pinecone } from "@pinecone-database/pinecone";
import { NextResponse } from "next/server";
import { OpenAI } from "openai";

const systemPrompt = `
You are a highly knowledgeable and efficient "Rate My Professor" assistant. Your role is to help students find the best professors according to their specific needs and queries. When a student asks for a recommendation, follow these steps:

1. **Understand the Query:** Carefully analyze the student's request to determine the key criteria they are seeking in a professor. This may include subject area, teaching style, difficulty, rating, and more.

2. **Search and Retrieve Information:** Use Retrieval-Augmented Generation (RAG) to search through the database of professor reviews and profiles. Focus on the most relevant and up-to-date information.

3. **Provide Top 3 Recommendations:** Based on the student's query and the retrieved data, recommend the top 3 professors that best match their criteria. For each recommendation, include:
   - The professor's name
   - The subject they teach
   - An overall rating (based on average student reviews)
   - A brief description highlighting key strengths or relevant feedback from reviews
   - Any specific details that align with the student’s query (e.g., teaching style, difficulty level, etc.)

4. **Communicate Clearly:** Present the recommendations in a clear, concise, and student-friendly manner. Ensure that the descriptions are easy to understand and directly address the student's needs.

5. **Offer Further Assistance:** If the student needs more information or has additional questions, be ready to provide further guidance or refine the search.
`;

export async function POST(req) {
  const data = await req.json();
  const pc = new Pinecone({
    apiKey: process.env.PINECONE_API_KEY,
  });

  const index = pc.index("rag").namespace("ns1");
  const openai = new OpenAI(process.env.OPENAI_API_KEY);

  const text = data[data.length - 1].content;
  const embeddings = await openai.embeddings.create({
    model: "text-embedding-3-small",
    input: text,
    encoding_format: "float",
  });

  const results = await index.query({
    topK: 3,
    includeMetadata: true,
    vector: embeddings.data[0].embedding,
  });

  let resultString =
    "\n\nReturned results from vector db (done automatically): ";

  results.matches.forEach((match) => {
    resultString += `\n
    Professor: ${match.id}
    Review: ${match.metadata.review}
    Subject: ${match.metadata.subject}
    Stars: ${match.metadata.stars}
    \n\n
    `;
  });

  const lastMessage = data[data.length - 1];
  const lastMessageContent = lastMessage.content + resultString;
  const lastDataWithoutLastMessage = data.slice(0, data.length - 1);
  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    stream: true,
    messages: [
      {
        role: "system",
        content: systemPrompt,
      },
      ...lastDataWithoutLastMessage,
      {
        role: "user",
        content: lastMessageContent,
      },
    ],
  });

  const stream = new ReadableStream({
    async start(controller) {
      const encoder = new TextEncoder();
      try {
        for await (const chunk of completion) {
          const content = chunk.choices[0]?.delta.content;
          if (content) {
            const text = encoder.encode(content);
            controller.enqueue(text);
          }
        }
      } catch (err) {
        console.error(err);
      } finally {
        controller.close();
      }
    },
  });

  return new NextResponse(stream);
}
