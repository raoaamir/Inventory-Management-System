import { Box, Button, Divider, FormControl, Paper, TextField } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PhotoIcon from '@mui/icons-material/Photo';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import "../../createOrganization.css";


const CreateAdmin = () => {
    return ( 
    <Paper sx={{margin : 'auto' , width : '95%' }}>
     <Box sx={{ display : 'flex' , margin : 'auto' , width : '97%' }}>
     <ArrowBackIcon fontSize="large" sx={{width :'20px', height:'15px',marginTop:'28px'}}/>
     <h2><span>Back</span> Add New Admin</h2>
     <Button variant="outlined" size='small' sx={{height :'37px' ,marginLeft:'10px' , fontSize :'12px', marginLeft:'47rem', marginTop:'10px' , color:'#6a6a6a'}}>
        Cancel
    </Button>
    <Button variant="contained" color="success" size='small' sx={{height :'37px' ,marginLeft:'10px' , fontSize :'12px',marginTop:'10px'}}>
        save
    </Button>
     </Box>
     <Box sx={{display :'flex'}}>
     <PhotoIcon fontSize="large" sx={{width : '200px', height :'95px' ,color :"#D3D3D3"}}/>
     <Box sx={{marginLeft:'-3rem'}}>
     <h4>Admin's Picture *</h4>
     <span>Upload a high resolution picture in which face are clear</span>
     <Button variant="contained" color="primary" size='small' sx={{width :'75px' , height :'35px',marginLeft:'1rem' ,marginTop :'-20px',fontSize:'10px'}} startIcon={<AddPhotoAlternateIcon sx={{color: '#fff' ,marginLeft :'2px', marginBottom : '-18px' ,marginRight:'-5px'}}/>}>
         upload
    </Button>
     </Box>
     </Box>
     <Divider sx={{marginTop: '10px' , marginBottom :'20px'}}/>
    
     <Box  sx={{margin : 'auto' , width : '90%' }}>
     <FormControl className="form">
        <Box sx={{display : "flex" , flexDirection : "row" }}>
        <label htmlFor=''>Name</label>
        <TextField sx={{marginLeft :'11rem'}} className="abc" type="text"  variant='outlined'size="small" placeholder="FullName" />
        </Box>
        <Divider sx={{marginTop: '10px' , marginBottom :'10px'}}/>
        <Box sx={{display : "flex" , flexDirection : "row"}}>
        <label htmlFor='email>'>Email Address </label>
        <TextField sx={{marginLeft :'7.5rem'}} className="abc"  type="email"  variant='outlined'size="small" placeholder="Email Address" />
        </Box>
        <Divider sx={{marginTop: '10px' , marginBottom :'10px'}}/>
        <Box sx={{display : "flex" , flexDirection : "row"}}>
        <label htmlFor='organization'>Organization</label>
        <TextField sx={{marginLeft :'8.2rem'}} className="abc"  type="text"  variant='outlined'size="small" placeholder="Select Organization" />
        </Box>
        <Divider sx={{marginTop: '10px' , marginBottom :'10px'}}/>
        <Box sx={{display : "flex" , flexDirection : "row"}}>
        <label htmlFor='contact Number>'>Contact No</label>
        <TextField sx={{marginLeft :'8.8rem'}} className="abc"  type="text"  variant='outlined'size="small" placeholder="Contact No" />
        </Box>
        <Divider sx={{marginTop: '10px' , marginBottom :'10px'}}/>
        <h3>Credentials</h3>
        <span>Below are the one-time created credentials. These will be sent to the mentioned email.</span>
        <Box sx={{display : "flex" , flexDirection : "row"}}>
        <label htmlFor='userName>'>Email </label>
        <TextField sx={{marginLeft :'11rem'}} className="abc"  type="email"  variant='outlined'size="small" placeholder="Email Address" />
        </Box>
        <Divider sx={{marginTop: '10px' , marginBottom :'10px'}}/>
        <Box sx={{display : "flex" , flexDirection : "row"}}>
        <label htmlFor='Password>'>Password </label>
        <TextField sx={{marginLeft :'9.5rem'}} className="abc"  type="password"  variant='outlined'size="small" placeholder="Password" />
        </Box>
        <Divider sx={{marginTop: '10px' , marginBottom :'10px'}}/>
     </FormControl>
     </Box>
     </Paper>
    
     );
}
 
export default CreateAdmin;