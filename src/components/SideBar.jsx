import { makeStyles } from "@material-ui/core";
import { Box, Typography, Drawer, List, ListItem, IconButton } from "@mui/material";
import { useHistory, useLocation } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import NavbarData from "./NavbarData";

const useStyles = makeStyles(theme=>({
    container:{
        width:"20%",
        
    },
    menuButton:{
      display:"none",
      [theme.breakpoints.down('md')]: {
        display:"flex",
      },
    }, 
    wrapper:{
      display:"block",
      [theme.breakpoints.down('md')]: {
        display:"none",
      },
    },
    logo:{
      [theme.breakpoints.down('md')]: {
        display:"none"
      },
    },
    list:{
      display:"flex",
      flesDirection:"column"
    }
}))


const Sidebar =()=>{
    const classes = useStyles();
    const history = useHistory();
    const [open, setOpen] = useState(false);

    const handleOpen=()=>{
        setOpen(true);
    }

    const handleClose=()=>{
        setOpen(false);
    }

    const list=()=>{
        return(
        <Box className={classes.list} >
            <List>
                <ListItem>
                 <NavbarData/>
                </ListItem>
            </List>
        </Box>
        )
    }
    return(
   <Box className={classes.container}>
    <Box>
        <Typography className={classes.logo}>Logo</Typography>
    </Box>
    <Box className={classes.wrapper}>
       <NavbarData />
        </Box>
        <Box className={classes.menuButton}>
        <IconButton
                color="inherit"
                onClick={handleOpen}
                className={classes.menuButton}
                >
                    <MenuIcon />
        </IconButton>
                <Drawer open={open} onClose={handleClose} onClick={handleClose}>
                   {list()}
                </Drawer>

          <Typography style={{marginLeft: 20, marginTop:10}}>Logo</Typography>
        </Box>
   </Box>
    )
}

export default Sidebar;