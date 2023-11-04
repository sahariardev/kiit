'use client'

import {useScrollTop} from "@/hook/use-scroll-top";
import {cn} from '@/lib/utils';

export const AdminNavbar = () => {
    const renderNavBarItems = () => {
        return (<>
            <ul className="menu menu-horizontal px-1">
                <li><a>Dashboard</a></li>
                <li><a>Post List</a></li>
                <li><a>PlayList</a></li>
                <li><a>Categories</a></li>
            </ul>
        </>);
    }

    const isScrolled = useScrollTop();
    return (
        <div className={cn("navbar bg-base-100 fixed", isScrolled && "border-b shadow-md")}>
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M4 6h16M4 12h8m-8 6h16"/>
                        </svg>
                    </label>
                    <ul tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {renderNavBarItems()}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Learn Data Science</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                {renderNavBarItems()}
            </div>
            <div className="navbar-end">

            </div>
        </div>
    );
}