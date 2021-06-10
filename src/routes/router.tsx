import { useContext } from 'react'
import AuthRoutes from './AuthRoutes'
import UsualRoutes from './UsualRoutes'
import AuthContext from '../contexts/auth'

function Router() {
    const { signed } = useContext(AuthContext)
    
    return signed ? <AuthRoutes /> : <UsualRoutes />
}

export default Router;
