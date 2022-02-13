import { Box, Typography } from "@mui/material"
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme=>({
    container:{
       display:"flex",
       flexDirection:"row",
    
    }
}))


const Home =()=>{
    const classes = useStyles();
    return(
        <Box className={classes.container}>
            <Typography>Please Go to admin Section</Typography>
        </Box>
    )
}

export  default Home;