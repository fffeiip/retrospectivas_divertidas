import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import CandyLove from '../pages/CandyLove';
import Dinamicas from '../pages/Dinamicas';

function AuthRoutes() {
  return (
    <Switch>
        <Route path='/candyLove' component={CandyLove} />
        <Route path='/dinamicas' component={Dinamicas} />
        <Route exact path='/' component={Home} />       
    </Switch>
    
  );
}

export default AuthRoutes;
