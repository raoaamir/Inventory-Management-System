import * as React from 'react';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Divider } from '@mui/material';
import ArrowDropUpRoundedIcon from '@mui/icons-material/ArrowDropUpRounded';
import { Box } from '@mui/material';
export default function BasicCard() {
   
  return (
    
    
    <Box sx={{display : 'flex' , flexDirection : 'row',width: '95%' , margin:'auto'  }}>
      {/* <h2>Dashoboard</h2> */}
      
      <CardContent sx={{padding :'30px', width :'25%'}}>
        <Typography sx={{ fontSize: 20 , color:'black'}} color="text.secondary" >Organization</Typography>
        <Typography variant="h4" sx={{fontWeight : 'bold'}}>1,500<ArrowDropUpRoundedIcon color="success"fontSize='large'  sx={{height : '60px' , width:'70px' ,marginLeft:'-10px', marginBottom : '-20px'}}/></Typography>
        <Typography sx={{ mb:2 , fontSize:14 }} color="text.secondary">
          200 New Organization this month
        </Typography>
      </CardContent>
      <Divider orientation="vertical" flexItem/>

      <CardContent sx={{padding :'30px' , width :'25%'}}>
        <Typography sx={{ fontSize: 20 , color:'black' }} color="text.secondary" >Admins</Typography>
        <Typography variant="h4" sx={{fontWeight : 'bold'}}>3,200 <ArrowDropUpRoundedIcon color="success" fontSize='large'  sx={{height : '60px' , width:'70px' ,marginLeft:'-10px', marginBottom : '-20px'}}/></Typography>
        <Typography sx={{ mb:2 , fontSize:14 }} color="text.secondary">
          2400 Active admin this month
        </Typography>
      </CardContent>
      <Divider orientation="vertical" flexItem/>

      <CardContent sx={{padding :'30px' , width :'25%'}}>
        <Typography sx={{ fontSize: 20 , color:'black' }} color="text.secondary" >Pending Complaints</Typography>
        <Typography variant="h4" sx={{fontWeight : 'bold'}}>200<ArrowDropUpRoundedIcon color="success"fontSize='large'  sx={{height : '60px' , width:'70px' ,marginLeft:'-10px', marginBottom : '-20px'}}/></Typography>
        <Typography sx={{ mb:2 , fontSize:14 }} color="text.secondary">
          200 New Organization this month
        </Typography>
      </CardContent>
      <Divider orientation="vertical" flexItem/>

      <CardContent sx={{padding :'30px' , display : 'flex' , flexDirection : 'column', width :'25%'}}>
        <Typography sx={{ fontSize: 20 , color:'black' }} color="text.secondary">Resolved Complaints</Typography>
        <Typography variant="h4" sx={{fontWeight : 'bold'}}>15,000<ArrowDropUpRoundedIcon color="success" fontSize='large' sx={{height : '60px' , width:'70px' ,marginLeft:'-10px', marginBottom : '-20px'}} /></Typography>
        <Typography sx={{ mb:2 , fontSize:14 }} color="text.secondary">
          175 complaint pending this month
        </Typography>
      </CardContent>
   
    </Box>
   
  );
}