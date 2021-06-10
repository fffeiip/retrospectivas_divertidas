import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

function DropdownMenu() {

    const [dropdownOpen, setDropdownOpen] = useState(false)

    return (
        <div className="flex justify-end">
            <div onClick={() => setDropdownOpen(false)} className="fixed w-full h-full inset-x-0 inset-y-40"></div>
            <div className="relative" onClick={() => setDropdownOpen(!dropdownOpen)} >
                <button className="relative flex flex-row items-end justify-around z-10 rounded-md  p-2 focus:outline-none">
                    <FontAwesomeIcon className="fa-2x" icon={faUser} />
                    <svg className="h-3 w-3 text-white-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                </button>

                {dropdownOpen && <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
                    <a href="#" className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white">
                        your profile</a>
                    <a href="#" className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white">
                        Your projects</a>
                    <a href="#" className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white">
                        Help</a>
                    <a href="#" className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white">
                        Settings</a>
                    <a href="#" className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white">
                        Sign Out</a>
                </div>}
            </div>
        </div>
    );
}

export default DropdownMenu;