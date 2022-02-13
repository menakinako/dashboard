import { Box, Typography, TextField, Table, TableBody, TableCell, TableHead, TableRow, Button, Dialog, DialogContent, } from "@mui/material"
import { makeStyles } from "@material-ui/core";
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import GetAppOutlinedIcon from '@mui/icons-material/GetAppOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import { useState } from "react";

const useStyles = makeStyles(theme=>({
    container:{
        width:"80%",
        float:"right"
    },
    dialogBox:{
      width:" 100vh",
      height:"70vh"
    }
}))
function createData(date, name, email, role) {
    return { date, name, email, role };
  }

const rows = [
    createData('20-09-21', "Rakesh", "rakesh@gamilcom", "super admin"),
    createData('18-11-21', "Priya", "priya@gamilcom", "admin"),
    createData('29-01-22', "Seetal", "seetal@gamilcom", "admin")
  ];

const Admin =()=>{
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const openDialog=()=>{
      setOpen(true)
    }
    const handleClose=()=>{
      setOpen(false)
    }

    return(
        <Box>
        <Box className={classes.container}>
          <Typography variant="h4" style={{textAlign:"left", marginLeft:-200, display:"flex"}}>Admin&nbsp;<span style={{marginTop:10}}><Typography>Learn more about setting admin account</Typography></span></Typography>
           <Box style={{display:"flex", marginTop:20}}>
               <TextField id="outlined-basic" label="Search" variant="outlined" size="small" style={{marginLeft:-200, width:"900px"}}/>
               <Button variant="outlined" size="small" style={{marginLeft:40}}><span><GetAppOutlinedIcon/></span>Export</Button>
               <Button variant="contained" size="small" style={{marginLeft:10}} onClick={openDialog}><span><PersonAddAltOutlinedIcon /></span>New User</Button>
           </Box> 
           <Typography style={{textAlign:"left", marginLeft:-200}}>show 10 entries</Typography>
          <Box style={{marginLeft:-200, marginTop: 50}}>
      <Table sx={{ minWidth: 600 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Created Date</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Role</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right"><FileUploadOutlinedIcon/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
        </Box>
        <Typography style={{textAlign:"left", marginLeft:-200}}>Showing 1 to 1 of 1 entries</Typography>
        <Dialog open={open} >
        <DialogContent >
          <Box className={classes.dialogBox}>
           
             <Typography style={{marginTop:40}}><span style={{marginTop:-20}}>Name</span>:<span><TextField name="fullname" label="Enter your Name" size="small"
              InputLabelProps={{
                style: {
                  color: '#0F79AF'
                } }}
                InputProps={{
                    inputMode: "numeric"
                  }}
                  style={{marginLeft:100, borderColor:"#0F79AF", width:400}}
                />
                </span></Typography>
             
                <Typography style={{ marginTop:20}}><span >Email</span>:<span><TextField name="email"   label="Enter your Email" size="small"
          InputLabelProps={{
            style: {
              color: '#0F79AF'
            } }}
            InputProps={{
                
                inputMode: "numeric"
              }}
              style={{marginLeft:100, borderColor:"#0F79AF", width:400}}
            />
            </span></Typography>
            <Typography>Mobile:<span><TextField name="email"   label="Enter your Mobile Number" size="small"
          InputLabelProps={{
            style: {
              color: '#0F79AF'
            } }}
            InputProps={{
                
                inputMode: "numeric"
              }}
              style={{marginLeft:145, borderColor:"#0F79AF", width:400}}
            />
            </span></Typography>
            <Typography>Password:<span><TextField name="email"   label="Enter your Password" size="small"
          InputLabelProps={{
            style: {
              color: '#0F79AF'
            } }}
            InputProps={{
                
                inputMode: "numeric"
              }}
              style={{marginLeft:145, borderColor:"#0F79AF", width:400}}
            />
            </span></Typography>
            <Typography style={{ marginTop:20}}>Role:<span> <TextField name="password" label="Role" size="small"
          InputLabelProps={{
            style: {
              color: '#0F79AF',
            } }}
            InputProps={{
                
                inputMode: "numeric"
              }}
        
              style={{marginLeft:100, borderColor:"#0F79AF", width:400}}/>
            </span></Typography>
         
          <Button variant="contained" onClick={handleClose} color="info" style={{marginLeft:455, marginTop:20}}>Submit</Button>
      </Box>
        </DialogContent>
      </Dialog>
        </Box>
        </Box>
    )
}

export default Admin;