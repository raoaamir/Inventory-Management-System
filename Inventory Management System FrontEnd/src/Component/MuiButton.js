import {Button ,ButtonGroup,IconButton,Stack}from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const MuiButton = () => {
    return ( 
        <Stack spacing={4}>
        <Stack spacing={2} direction='row'>
            <Button variant = 'text' href='https://www.google.com'>Text</Button>
            <Button variant = 'contained'href='www.facebook.com'>Contained</Button>
            <Button variant = 'outlined'>outlined</Button>
        </Stack>
        
        <Stack spacing={2} direction ='row'>
        <Button variant= 'contained' color='primary'>Primary</Button>
        <Button variant= 'contained' color='secondary'>Secondery</Button>
        <Button variant= 'contained' color='error'>error</Button>
        <Button variant= 'contained' color='warning'>warning</Button>
        <Button variant= 'contained' color='success'>success</Button>
        <Button variant= 'contained' color='info'>info</Button>

        </Stack>

        <Stack display='block' spacing={2} direction ='row'>
        <Button variant= 'contained' size='small'>Small</Button>
        <Button variant= 'contained' size='medium'>medium</Button>
        <Button variant= 'contained' size='large'>large</Button>
        </Stack>
        <Stack spacing={2} direction ='row'>
        <Button variant= 'contained'startIcon={<AccountCircleIcon/>} disableElevation>Small</Button>
        <Button variant= 'contained'endIcon={<AccountCircleIcon/>} disableRipple onClick={()=>{
            alert("Clicked")
        }}>Medium</Button>
         
         <IconButton aria-label='AccountCircleIcon' color='primary' size='large'>
            <AccountCircleIcon/>
         </IconButton>

         <ButtonGroup aria-label='Alignment Button Group' variant='contained' direction='row' color='success' orientation='vertical' >
            <Button >Left</Button>
            <Button>Center</Button>
            <Button>Right</Button>
         </ButtonGroup>
        </Stack>
        </Stack>
     );
}
 
export default MuiButton;