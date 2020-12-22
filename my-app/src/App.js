import Principal from './components/Principal'
import{
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom"

import Home from './components/Principal'

import Interna from './components/Interna'

const App = () => {
  let getLogin= localStorage.getItem('loginData');

  return (
     <BrowserRouter>
     <Switch>
      <Route exact path="/">
         <Home/>
      </Route>
      <Route exact path="/interna">
        {getLogin?<Interna/>:<Home/>}
      </Route>
     </Switch>

     </BrowserRouter>
    );
}

export default App;
