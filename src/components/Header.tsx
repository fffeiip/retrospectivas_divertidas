import ProjectLogo from './Logo'
import DropdownMenu from './DropdownMenu'
import { Link } from 'react-router-dom';

function Header() {

    return (
        <div className="bg-green-400 flex-row h-1/6 p-4">
            <div className=" flex items-end justify-center h-full">
                <div className="w-1/5 flex">
                    <ProjectLogo />
                </div>
                <div className="w-3/5 flex h-full flex-shrink-0 items-end min-w-min">
                    <ul className="flex-row flex justify-around min-w-full font-menu">
                        <li className="hover:text-yellow-400">
                            <Link to="/">
                            Home
                            </Link> 
                            </li>
                        <li className="hover:text-yellow-400">
                            <Link to="/dashboard">
                            Dashboard
                            </Link> 
                            </li>
                        <li className="hover:text-yellow-400">
                            <Link to="/dinamicas">
                            Dinâmicas
                            </Link> 
                            </li>
                    </ul>
                </div>
                <div className="w-1/5 justify-center h-full items-end flex">
                    <DropdownMenu />
                </div>
            </div>
        </div>
    );
}



export default Header;
