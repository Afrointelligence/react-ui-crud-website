import React from 'react';
import links from "./links";
import {getKey} from "../../utilities";

interface Props {
    currentLink: {
        title: string;
        href: string;
    };
}

function LinksMobile({currentLink}: Props) {
    return (
        <div className="sm:hidden" id="mobile-menu">
            <div className="space-y-1 px-2 pt-2 pb-3">
                { links.map((link) => (
                    <a href="#"
                       key={getKey()}
                       className={`px-3 py-2 rounded-md text-sm font-medium ${currentLink.title === link.title ? 'bg-gray-900 text-white block' : 'text-gray-300 hover:bg-gray-700 hover:text-white block'}`}>{link.title}</a>
                ))}
            </div>
        </div>
    );
}

export default LinksMobile;