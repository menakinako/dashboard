import { Box } from "@mui/material"
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme=>({
    container:{
        width:"75%",
        float:"right"
    }
}))


const Referrals =()=>{
    const classes = useStyles();
    return(
        <Box className={classes.container}>
       Refferals
        </Box>
    )
}

export default Referrals;