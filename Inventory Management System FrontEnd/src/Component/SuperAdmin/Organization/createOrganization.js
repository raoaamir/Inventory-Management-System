import { Box, Button, Divider, FormControl, Paper, TextField } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PhotoIcon from '@mui/icons-material/Photo';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import "../../createOrganization.css";


const CreateOrganization = () => {
    return ( 
    <Paper sx={{margin : 'auto' , width : '95%' }}>
     <Box sx={{ display : 'flex' , margin : 'auto' , width : '97%' }}>
     <ArrowBackIcon fontSize="large" sx={{width :'20px', height:'15px',marginTop:'28px'}}/>
     <h2><span>Back</span> Add New Organization</h2>
     <Button variant="contained" color="success" size='small' sx={{height :'37px' ,marginLeft:'10px' , fontSize :'12px', marginLeft:'47rem', marginTop:'10px'}}>
        Cancel
    </Button>
    <Button variant="contained" color="success" size='small' sx={{height :'37px' ,marginLeft:'10px' , fontSize :'12px',marginTop:'10px'}}>
        save
    </Button>
     </Box>
     <Box sx={{display :'flex'}}>
     <PhotoIcon fontSize="large" sx={{width : '200px', height :'95px' ,color :"#D3D3D3"}}/>
     <Box sx={{marginLeft:'-3rem'}}>
     <h4>Organization Logo *</h4>
     <span>Upload logo with minimum resolution of 800*800px</span>
     <Button variant="contained" color="primary" size='small' sx={{width :'75px' , height :'35px',marginLeft:'1rem' ,marginTop :'-20px',fontSize:'10px'}} startIcon={<AddPhotoAlternateIcon sx={{color: '#fff' ,marginLeft :'2px', marginBottom : '-18px' ,marginRight:'-5px'}}/>}>
         upload
    </Button>
     </Box>
     </Box>
     <Divider sx={{marginTop: '10px' , marginBottom :'20px'}}/>
    
     <Box  sx={{margin : 'auto' , width : '90%' }}>
     <FormControl className="form">
        <Box sx={{display : "flex" , flexDirection : "row" }}>
        <label htmlFor=''>Name Of Organization</label>
        <TextField sx={{marginLeft :'11rem'}} className="abc" type="text"  variant='outlined'size="small" placeholder="Name Of Organization" />
        </Box>
        <Divider sx={{marginTop: '10px' , marginBottom :'10px'}}/>
        <Box sx={{display : "flex" , flexDirection : "row"}}>
        <label htmlFor='Name Of Organization>'>Email </label>
        <TextField sx={{marginLeft :'17.7rem'}} className="abc"  type="email"  variant='outlined'size="small" placeholder="Email Address" />
        </Box>
        <Divider sx={{marginTop: '10px' , marginBottom :'10px'}}/>
        <Box sx={{display : "flex" , flexDirection : "row" }}>
        <label htmlFor='Name Of Organization>'>Bio</label>
        <TextField  sx={{marginLeft :'18.7rem'}} minRows={5} multiline className="abc" type="text"  variant='outlined'size="small" placeholder="Bio" />
        </Box>
        <Divider sx={{marginTop: '10px' , marginBottom :'10px'}}/>
        <Box sx={{display : "flex" , flexDirection : "row"}}>
        <label htmlFor='Name Of Organization>'>Address</label>
        <Box sx={{display :'flex' , flexDirection : 'column',width:'auto'}}>
        <TextField  sx={{marginLeft :'16.8rem'}} className="abc"  type="text"  variant='outlined'size="small" placeholder="Address" />
        <TextField sx={{marginLeft :'16.8rem'}}className="abc"  type="text"  variant='outlined'size="small" placeholder="City" />
        <TextField sx={{marginLeft :'16.8rem'}} className="abc"  type="text"  variant='outlined'size="small" placeholder="Country" />
        <TextField sx={{marginLeft :'16.8rem'}} className="abc"  type="text"  variant='outlined'size="small" placeholder="Zip code" />
        </Box>
        </Box>
        <Divider sx={{marginTop: '10px' , marginBottom :'10px'}}/>
        <Box sx={{display : "flex" , flexDirection : "row"}}>
        <label htmlFor='Name Of Organization>'>Representative Name</label>
        <TextField sx={{marginLeft :'11.5rem'}} className="abc"  type="text"  variant='outlined'size="small" placeholder="Representative Name" />
        </Box>
        <Divider sx={{marginTop: '10px' , marginBottom :'10px'}}/>
        <Box sx={{display : "flex" , flexDirection : "row"}}>
        <label htmlFor='Name Of Organization>'>Representative Name Contact No</label>
        <TextField sx={{marginLeft :'6.6rem'}} className="abc"  type="text"  variant='outlined'size="small" placeholder="Representative Name Contact No" />
        </Box>
        <Divider sx={{marginTop: '10px' , marginBottom :'10px'}}/>
        <h3>Credentials</h3>
        <span>Below are the one-time created credentials. These will be sent to the mentioned email.</span>
        <Box sx={{display : "flex" , flexDirection : "row"}}>
        <label htmlFor='Name Of Organization>'>Email </label>
        <TextField sx={{marginLeft :'17.7rem'}} className="abc"  type="email"  variant='outlined'size="small" placeholder="Email Address" />
        </Box>
        <Divider sx={{marginTop: '10px' , marginBottom :'10px'}}/>
        <Box sx={{display : "flex" , flexDirection : "row"}}>
        <label htmlFor='Name Of Organization>'>Password </label>
        <TextField sx={{marginLeft :'16.2rem'}} className="abc"  type="password"  variant='outlined'size="small" placeholder="Password" />
        </Box>
        <Divider sx={{marginTop: '10px' , marginBottom :'10px'}}/>
     </FormControl>
     </Box>
     </Paper>
    
     );
}
 
export default CreateOrganization;