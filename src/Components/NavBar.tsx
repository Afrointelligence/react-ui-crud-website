import React from 'react';
import LinksMobile from "./NavBar/LinksMobile";
import LinksDesktop from "./NavBar/LinksDesktop";
import LogoMobile from "./NavBar/LogoMobile";
import LogoDesktop from "./NavBar/LogoDesktop";
import LogoGithub from "../resources/githubLogo.png";
import links from "./NavBar/links";

function NavBar() {
    const currentLink = links[0];
    return (
        <nav className="bg-gray-800">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button type="button"
                                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                aria-controls="mobile-menu" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                        </button>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex flex-shrink-0 items-center">
                            <LogoMobile />
                            <LogoDesktop />
                        </div>
                        <LinksDesktop currentLink={currentLink} />
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <button type="button"
                                className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span className="sr-only">Github Repository</span>
                            <img className="h-6 w-6" src={LogoGithub} />
                        </button>
                    </div>
                </div>
            </div>

            <LinksMobile currentLink={currentLink} />
        </nav>
);
}

export default NavBar;