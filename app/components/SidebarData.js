import React from 'react'
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    }, 
    {
        title: 'Chat',
        path: '/chat',
        icon: <IoIcons.IoIosBookmark />,
        cName: 'nav-text'
    }, 
    {
        title: 'Help',
        path: '/help',
        icon: <IoIcons.IoIosHelpCircle />,
        cName: 'nav-text'
    }, 
    // {
    //     title: 'Settings',
    //     path: '/settings',
    //     icon: <IoIcons.IoIosSettings />,
    //     cName: 'nav-text'
    // }
]