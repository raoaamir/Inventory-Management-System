import * as React from 'react';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Divider } from '@mui/material';
import ArrowDropUpRoundedIcon from '@mui/icons-material/ArrowDropUpRounded';
import { Box } from '@mui/material';
import { arrowIcon, card, cardContent, typography1,typography2, } from '../style';
export default function AdminCard() {
   
  return (
    
    
    <Box sx={card}>
      <CardContent sx={cardContent}>
        <Typography sx={typography1} color="text.secondary" >Employees</Typography>
        <Typography variant="h4" sx={{fontWeight : 'bold'}}>500
        <ArrowDropUpRoundedIcon color="success"fontSize='large'  sx={arrowIcon}/></Typography>
        <Typography sx={typography2} color="text.secondary">
          25 New Employees Added this month
        </Typography>
      </CardContent>
      <Divider orientation="vertical" flexItem/>

      <CardContent sx={cardContent}>
        <Typography sx={typography1} color="text.secondary" >Inventory Items</Typography>
        <Typography variant="h4" sx={{fontWeight : 'bold'}}>500 
        <ArrowDropUpRoundedIcon color="success" fontSize='large'  sx={arrowIcon}/></Typography>
        <Typography sx={typography2} color="text.secondary">
          50 New Items Added this month
        </Typography>
      </CardContent>
      <Divider orientation="vertical" flexItem/>

      <CardContent sx={cardContent}>
        <Typography sx={typography1} color="text.secondary" >Vendors</Typography>
        <Typography variant="h4" sx={{fontWeight : 'bold'}}>25
        <ArrowDropUpRoundedIcon color="success"fontSize='large'  sx={arrowIcon}/></Typography>
        <Typography sx={typography2} color="text.secondary">
          2 New Vendors Added this month
        </Typography>
      </CardContent>
      <Divider orientation="vertical" flexItem/>

      <CardContent sx={cardContent}>
        <Typography sx={typography1} color="text.secondary">Categories</Typography>
        <Typography variant="h4" sx={{fontWeight : 'bold'}}>5
        <ArrowDropUpRoundedIcon color="success" fontSize='large' sx={arrowIcon} /></Typography>
        <Typography sx={typography2} color="text.secondary">
          1 New category Added this month
        </Typography>
      </CardContent>
   
    </Box>
   
  );
}