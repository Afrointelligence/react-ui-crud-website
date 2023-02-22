import React from 'react';
import links from "./links";
import {getKey} from "../../utilities";

interface Props {
    currentLink: {
        title: string;
        href: string;
    };
}
function LinksDesktop({currentLink}: Props) {
    return (
        <div className="hidden sm:ml-6 sm:block">
            <div className="flex space-x-4">
                { links.map((link) => (
                    <a href="#"
                       key={getKey()}
                       className={`px-3 py-2 rounded-md text-sm font-medium ${currentLink.title === link.title ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}>{link.title}</a>
                ))}
            </div>
        </div>
    );
}

export default LinksDesktop;