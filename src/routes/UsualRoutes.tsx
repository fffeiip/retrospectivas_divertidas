import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Cadastro from '../pages/Cadastro';
import Dinamicas from '../pages/Dinamicas';

function UsualRoutes() {
  return (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/cadastro' component={Cadastro} />
        <Route path='/dinamicas' component={Dinamicas} />        
    </Switch>
    
  );
}

export default UsualRoutes;