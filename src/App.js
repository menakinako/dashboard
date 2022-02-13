import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Admin from './components/layout/Admin';
import Referrals from './components/layout/Referrals';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/Refferals" component={Referrals}/>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
