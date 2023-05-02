import { Box, Button, Divider, FormControl, Paper, TextField } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PhotoIcon from '@mui/icons-material/Photo';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import "../../createOrganization.css";
import { backIconStyle, boxStyle, cancelButton, dividerStyle, innerBox, mainBox, paperStyle, photoIcon, saveButton, uploadButton, uploadIcon } from "./emplyeeStyle";


const AddEmployee = () => {
    return ( 
    <Paper  sx={paperStyle}>
     <Box sx={boxStyle}>
     <ArrowBackIcon fontSize="large" sx={backIconStyle}/>
     <h2><span>Back</span> Add New Employee</h2>
     <Button variant="outlined" size='small' sx={cancelButton}>
        Cancel
    </Button>
    <Button variant="contained" color="success" size='small' sx={saveButton}>
        <a className="add" href="/employees">Save</a>
    </Button>
     </Box>
     <Box sx={{display :'flex'}}>
     <PhotoIcon fontSize="large" sx={photoIcon}/>
     <Box sx={{marginLeft:'-3rem'}}>
     <h4>Employee's Picture *</h4>
     <span>Upload a high resolution picture in which face are clear</span>
     <Button variant="contained" color="primary" size='small' sx={uploadButton}
      startIcon={<AddPhotoAlternateIcon sx={uploadIcon}/>}>
         upload
    </Button>
     </Box>
     </Box>
     <Divider sx={dividerStyle}/>
    
     <Box  sx={mainBox}>
     <FormControl className="form">
        <Box sx={innerBox}>
        <label htmlFor=''>Name</label>
        <TextField className="abc" type="text"  variant='outlined'size="small" placeholder="FullName" />
        </Box>
        <Divider sx={dividerStyle}/>

        <Box sx={innerBox}>
        <label htmlFor='email>'>Email Address </label>
        <TextField className="abc"  type="email"  variant='outlined'size="small" placeholder="Email Address" />
        </Box>
        <Divider sx={dividerStyle}/>

        <Box sx={innerBox}>
        <label htmlFor='contact Number>'>Contact No</label>
        <TextField className="abc"  type="text"  variant='outlined'size="small" placeholder="Contact No" />
        </Box>
        <Divider sx={dividerStyle}/>

        <Box sx={innerBox}>
        <label htmlFor='organization'>Department</label>
        <TextField className="abc"  type="text"  variant='outlined'size="small" placeholder="Select Department" />
        </Box>
        <Divider sx={dividerStyle}/>

        <h3>Credentials</h3>
        <span>Below are the one-time created credentials. These will be sent to the mentioned email.</span>
        <Box sx={innerBox}>
        <label htmlFor='userName>'>Email </label>
        <TextField className="abc"  type="email"  variant='outlined'size="small" placeholder="Email Address" />
        </Box>
        <Divider sx={dividerStyle}/>

        <Box sx={innerBox}>
        <label htmlFor='Password>'>Password </label>
        <TextField className="abc"  type="password"  variant='outlined'size="small" placeholder="Password" />
        </Box>
        <Divider sx={dividerStyle}/>
        
     </FormControl>
     </Box>
     </Paper>
    
     );
}
 
export default AddEmployee;