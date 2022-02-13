import { Box } from "@mui/material"
import { makeStyles } from "@material-ui/core";
import Sidebar from './SideBar';
import Admin from "./layout/Admin";
import Referrals from "./layout/Referrals";
import { Route, Switch } from "react-router-dom";
import { useLocation } from "react-router-dom";

const useStyles = makeStyles(theme=>({
    container:{
       display:"flex",
       flexDirection:"row"
    }
}))


const Home =()=>{
    const classes = useStyles();
    const location = useLocation();
    return(
        <Box className={classes.container}>
        <Sidebar />
          <Box>
           <Admin />
          </Box>
        </Box>
    )
}

export  default Home;