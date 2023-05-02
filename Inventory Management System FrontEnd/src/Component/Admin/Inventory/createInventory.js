import { Box, Button, Divider, FormControl, Paper, TextField } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import "../../createOrganization.css";
import { backIconStyle, boxStyle, cancelButton, dividerStyle, innerBox, mainBox, paperStyle, saveButton } from "./inventoryStyle";


const CreateInventory = () => {
    return ( 
    <Paper sx={paperStyle}>
     <Box sx={boxStyle}>
     <ArrowBackIcon fontSize="large" sx={backIconStyle}/>
     <h2><span>Back</span></h2>
     <Button variant="contained" color="success" size='small' sx={cancelButton}>
        Cancel
    </Button>
    <Button variant="contained" color="success" size='small' sx={saveButton}>
    <a className='add' href="/inventory">Save</a>
    </Button>
     </Box>
     
    
     <Box  sx={mainBox}>
     <FormControl className="form">
        <Box sx={innerBox}>
        <label htmlFor=''>Item Name</label>
        <TextField className="abc" type="text"  variant='outlined'size="small" placeholder="Item Name" />
        </Box>
        <Divider sx={dividerStyle}/>
        <Box sx={innerBox}>
        <label htmlFor='Name Of Organization>'>Serail Number </label>
        <TextField className="abc"  type="email"  variant='outlined'size="small" placeholder="Email Address" />
        </Box>
        <Divider sx={dividerStyle}/>
        <Box sx={innerBox}>
        <label htmlFor='Name Of Organization>'>Description</label>
        <TextField minRows={5} multiline className="abc" type="text"  variant='outlined'size="small" placeholder="Description" />
        </Box>
        <Divider sx={dividerStyle}/>
        <Box sx={innerBox}>
        <label htmlFor='Name Of Organization>'>Category</label>
        <TextField className="abc"  type="text"  variant='outlined'size="small" placeholder="Select Category" />
        </Box>
        <Divider sx={dividerStyle}/>
        <Box sx={innerBox}>
        <label htmlFor='Name Of Organization>'>SubCategory</label>
        <TextField className="abc"  type="text"  variant='outlined'size="small" placeholder="Select SubCategory" />
        </Box>
        <Divider sx={dividerStyle}/>
        <Box sx={innerBox}>
        <label htmlFor='Name Of Organization>'>Price</label>
        <TextField className="abc"  type="text"  variant='outlined'size="small" placeholder="Price" />
        </Box>
        <Divider sx={dividerStyle}/>
        <Box sx={innerBox}>
        <label htmlFor='Name Of Organization>'>Select Vendor</label>
        <TextField className="abc"  type="text"  variant='outlined'size="small" placeholder="Select vendor" />
        </Box>
        <Divider sx={dividerStyle}/>
        <h3>Credentials</h3>
        <span>Below are the one-time created credentials. These will be sent to the mentioned email.</span>
        <Box sx={innerBox}>
        <label htmlFor='Name Of Organization>'>Email </label>
        <TextField className="abc"  type="email"  variant='outlined'size="small" placeholder="Email Address" />
        </Box>
        <Divider sx={dividerStyle}/>
        <Box sx={innerBox}>
        <label htmlFor='Name Of Organization>'>Password </label>
        <TextField className="abc"  type="password"  variant='outlined'size="small" placeholder="Password" />
        </Box>
        <Divider sx={dividerStyle}/>
     </FormControl>
     </Box>
     </Paper>
    
     );
}
 
export default CreateInventory;