import React from 'react';
import Image from 'next/image'

import {
    BeakerIcon,
    BellIcon,
    ChatIcon,
    ChevronDownIcon,
    HomeIcon,
    UserGroupIcon,
    ViewGridIcon,
} from '@heroicons/react/solid'
import {
    FlagIcon,
    PlayIcon,
    SearchIcon,
    ShoppingCartIcon
} from '@heroicons/react/outline'

import HeaderIcon from './HeaderIcon';

const Header = () => {
    return (
        <div className="sticky top-0 bg-white flex items-center p2 lg:px-5 shadow-md">
            {/* Left */}
            <div className="flex items-center">
                <Image
                    src="https://links.papareact.com/5me"
                    width={40}
                    height={40}
                    layout="fixed"
                    alt="Facebook Logo"
                />
                <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
                    <SearchIcon className="h-6 text-gray-600" />
                    <input
                        type="text"
                        placeholder="Search Facebook"
                        className="flex ml-2 items-center bg-transparent 
                        outline-none placeholder-gray-500 flex-shrink"
                    />
                </div>
            </div>
            {/* Middle */}
            <div className="flex justify-center flex-grow">
                <div className="flex space-x-6 md:space-x-2">
                    <HeaderIcon Icon={HomeIcon} />
                    <HeaderIcon Icon={FlagIcon} />
                    <HeaderIcon Icon={PlayIcon} />
                    <HeaderIcon Icon={ShoppingCartIcon} />
                    <HeaderIcon Icon={UserGroupIcon} />
                </div>
            </div>
            {/* Right */}
        </div>
    );
}

export default Header;
