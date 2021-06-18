import ProjectLogo from './Logo'
import DropdownMenu from './DropdownMenu'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../contexts/auth';

function Header() {

    const { signed } = useContext(AuthContext);
    // @Todo
    let middleware = signed ? "/dashboard" : "/login";
    return (
        <div className="bg-green-400 flex-row h-1/6 p-4">
            <div className=" flex items-end justify-start h-full">
                <div className="w-1/5 flex flex-grow-0">
                    <ProjectLogo />
                </div>
                <div className="w-3/5 flex h-full items-end min-w-min">
                    <ul className="flex-row flex min-w-full font-menu">
                        <li className="hover:text-yellow-400 px-6">
                            <Link to="/">
                                Home
                            </Link>
                        </li>
                        {signed && <li className="hover:text-yellow-400 px-6">
                            <Link to={middleware}>
                                Dashboard
                            </Link>
                        </li>}
                        <li className="hover:text-yellow-400 px-6">
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
