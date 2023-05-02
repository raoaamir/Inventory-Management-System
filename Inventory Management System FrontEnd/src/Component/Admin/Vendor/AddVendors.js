import { Box, Button, Divider, FormControl, Paper, TextField } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import "../../createOrganization.css";
import { backIconStyle, boxStyle, cancelButton, mainBox, paperStyle, saveButton , innerBox, dividerStyle } from "./vendorStyle";

const AddVendors = () => {
return (
    <Paper sx={paperStyle}>
     <Box sx={boxStyle}>
     <ArrowBackIcon fontSize="large" sx={backIconStyle}/>
     <h2><span>Back</span>Add Vendor</h2>
     <Button variant="contained" color="success" size='small' sx={cancelButton}>
        Cancel
    </Button>
    <Button variant="contained" color="success" size='small' sx={saveButton}>
    <a className='add' href="/vendors">Save</a>
    </Button>
     </Box>
     
    
     <Box  sx={mainBox}>
     <FormControl className="form">
        <Box sx={innerBox}>
        <label htmlFor=''>Name</label>
        <TextField className="abc" type="text"  variant='outlined'size="small" placeholder="Name" />
        </Box>
        <Divider sx={dividerStyle}/>
        <Box sx={innerBox}>
        <label htmlFor='Name Of Organization>'>Contact Number </label>
        <TextField  className="abc"  type="email"  variant='outlined'size="small" placeholder="Contact Number" />
        </Box>
        <Divider sx={dividerStyle}/>
        <Box sx={innerBox}>
        <label htmlFor='Name Of Organization>'>Category</label>
        <TextField className="abc"  type="text"  variant='outlined'size="small" placeholder="Select Category" />
        </Box>
        <Divider sx={dividerStyle}/>
        <Box sx={innerBox}>
        <label htmlFor='Name Of Organization>'>SubCategory</label>
        <TextField  className="abc"  type="text"  variant='outlined'size="small" placeholder="Select SubCategory" />
        </Box>
     </FormControl>
     </Box>
     </Paper>
    
     );
}
 
export default AddVendors;