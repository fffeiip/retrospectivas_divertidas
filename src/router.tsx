import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Dinamicas from './pages/Dinamicas';

function Router() {
  return (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/dinamicas' component={Dinamicas} />
    </Switch>
    
  );
}

export default Router;
