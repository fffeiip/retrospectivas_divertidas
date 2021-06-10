import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Dinamicas from '../pages/Dinamicas';

function UsualRoutes() {
  return (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/dinamicas' component={Dinamicas} />
        {/* @TODO */}
        <Route path='/dinamicas/:name' component={Dinamicas} />
    </Switch>
    
  );
}

export default UsualRoutes;
