import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import Dinamicas from '../pages/Dinamicas';

function AuthRoutes() {
  return (
    <Switch>
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/dinamicas' component={Dinamicas} />
        <Route exact path='/' component={Home} />
        {/* @TODO */}
        <Route path='/dinamicas/:name' component={Dinamicas} />
        <Route path='/dinamicas/:name/:guid' component={Dinamicas} />
    </Switch>
    
  );
}

export default AuthRoutes;
