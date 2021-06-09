import { useContext } from 'react'
import Main from './main'
import AuthContext from '../contexts/auth'
import Login from '../pages/Login'

function Router() {
    const { signed } = useContext(AuthContext)
    
    return signed ? <Main /> : <Login />
}

export default Router;
