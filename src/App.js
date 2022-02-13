import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Admin from './components/layout/Admin';
import Referrals from './components/layout/Referrals';
import Home from './components/Home';
import { Box } from "@mui/material"
import { makeStyles } from "@material-ui/core";
import Sidebar from './components/SideBar';

const useStyles = makeStyles(theme=>({
  container:{
     display:"flex",
     flexDirection:"row",
     [theme.breakpoints.down('md')]: {
      flexDirection:"column",
    },
  }
}))

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Box className={classes.container}>
      <Sidebar />
        <Box>
        <Route exact path="/" component={Home}/>
        <Route exact path="/Admin" component={Admin}/>
        <Route exact path="/Refferals" component={Referrals}/>
        </Box>
        </Box>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
