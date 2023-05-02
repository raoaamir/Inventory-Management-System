import { styled, TableCell, tableCellClasses } from "@mui/material";

export const tableHeaderStyle = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: '#1976d2',
      color: 'white',
      fontSize :'12px'
      
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: '40px'
    },
  }));

  export const paperStyle = { margin :'auto',display:'flex', flexDirection:'column',justifyContent:'center', width : '95%'}
  export const boxStyle = {margin :'auto' , display :'flex', flexDirection:'row' , justifyContent:'space-between' ,width:'90%'}
  export const cellStyle = { display : 'flex' , alignItems : 'center' , justifyContent : 'center',  color: 'fff',fontSize:'16px'}
  export const headingStyle ={marginRight : '10px' ,fontWeight : 'bold'}
  export const formStyle ={ p: '2px 4px', display: 'flex', alignItems: 'center', width: 270  , marginRight : '10px'}
  export const addButton = {marginLeft : '6.5rem', width :'125px' , height:'39px'}
  export const add = {marginLeft : '10rem', width :'10rem' , height:'2.5rem'}
  export const addIcon = {color:'#fff' , marginTop:'18px'}
  export const inner = {display : "flex" ,  width:'62%'}
  export const photoIcon ={display : 'flex' , width : '20%', height :'9rem' ,color :"#D3D3D"}
  export const statusButton = {marginLeft : '65rem', width :'8rem' , height:'2rem'}
  export const uploadButton = {display:'flex',marginTop:'1rem',  width :'70px' , height :'30px',marginLeft:'1rem',fontSize:'10px'}


