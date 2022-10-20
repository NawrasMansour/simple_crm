import React from 'react'

import {  FaTimes, FaUserLock } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useUsersContext } from '../contexts/users_context'


import {
    HomeIcon,
    ArticlesIcon,
    CollectionsIcon,
    SettingsIcon
} from '../components/svg'
import { classNames } from '../utils/helpers'

function Sidebar() {
    const{isSidebarOpen , closeSidebar} = useUsersContext();

    return (
        <>
            <div className="md:block hidden fixed top-0 left-0 z-20 h-full pb-10 overflow-x-hidden overflow-y-auto transition origin-left transform bg-white border-r w-60 md:translate-x-0">
                <Link to="/" className="flex items-center px-4 py-5">
                    <FaUserLock className='w-8 h-8 mr-2 text-amber-600'/>
                    <span className="text-3xl font-bold uppercase">CRM</span>
                </Link>
                <nav className="text-sm font-medium text-gray-600" aria-label="Main Navigation">
                    <Link to="/dashboard" className="flex items-center px-4 py-3 transition cursor-pointer bg-gray-100 group hover:bg-gray-100 hover:text-gray-900" >
                        <HomeIcon/>
                        <span>Dashboard</span>
                    </Link>
                    <Link to="/dashboard" className="flex items-center px-4 py-3 transition cursor-pointer group hover:bg-gray-100 hover:text-gray-900" >
                        <ArticlesIcon />
                        <span>Articles</span>
                    </Link>
                    <Link to="/dashboard" className="flex items-center px-4 py-3 text-gray-900 transition cursor-pointer group hover:bg-gray-100 hover:text-gray-900" >
                        <CollectionsIcon />
                        <span>Collections</span>
                    </Link>
                    <Link to="/init" className="flex items-center px-4 py-3 transition cursor-pointer group hover:bg-gray-100 hover:text-gray-900" >
                            <SettingsIcon />
                        <span>Settings</span>
                    </Link>
                </nav>
            </div>
            {/* mobile */}
            <div className={classNames(
                isSidebarOpen ? "block sm:hidden" : "hidden",
                "absolute top-0 left-0 bg-black opacity-90 w-full h-screen z-30 "
            )}>
                <div className='flex px-5 justify-between'>
                    <Link onClick={closeSidebar} to="/" className="flex items-center px-4 py-5">
                        <FaUserLock className='w-8 h-8 mr-2 text-amber-600'/>
                        <span className="text-3xl font-bold uppercase text-white">CRM</span>
                    </Link>
                    <button onClick={closeSidebar}>
                        <FaTimes className='w-5 h-5 text-white font-bold hover:text-amber-600' />
                    </button>
                </div>

                <nav className="text-lg font-medium text-center text-gray-300" aria-label="Main Navigation">
                    <Link to="/dashboard"
                          onClick={closeSidebar}
                          className="flex items-center px-4 py-3 transition cursor-pointer text-gray-600 bg-gray-100 group hover:bg-gray-100 hover:text-gray-900" >
                        <HomeIcon/>
                        <span>Dashboard</span>
                    </Link>
                    <Link to="/dashboard"
                          onClick={closeSidebar}
                          className="flex items-center px-4 py-3 transition cursor-pointer group hover:bg-gray-100 hover:text-gray-900" >
                        <ArticlesIcon />
                        <span>Articles</span>
                    </Link>
                    <Link to="/dashboard"
                          onClick={closeSidebar}
                          className="flex items-center px-4 py-3 transition cursor-pointer group hover:bg-gray-100 hover:text-gray-900" >
                        <CollectionsIcon />
                        <span>Collections</span>
                    </Link>
                    <Link to="/init"
                          onClick={closeSidebar}
                          className="flex items-center px-4 py-3 transition cursor-pointer group hover:bg-gray-100 hover:text-gray-900" >
                            <SettingsIcon />
                        <span>Settings</span>
                    </Link>
                </nav>
            </div>
        </>

    )
}

export default Sidebar