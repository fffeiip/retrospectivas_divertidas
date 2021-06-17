import { useContext } from 'react'
import AuthContext from '../contexts/auth'
import { Link } from 'react-router-dom'


function Login() {
    const { handleLogin } = useContext(AuthContext)

    return (
        <div>
            <Link to="/dashboard" onClick={() => handleLogin()} className="text-red-700 hover:bg-black hover:text-green-400"> clique aqui para login </Link>
        </div>
    );
}

export default Login