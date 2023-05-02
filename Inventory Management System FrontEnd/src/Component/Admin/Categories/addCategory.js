// import { Box, Button, Divider, FormControl, Paper, TextField } from "@mui/material";
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import "../../createOrganization.css";
// import AddIcon from '@mui/icons-material/Add';


// const AddCategory = () => {
//     return ( 
//     <Paper sx={{margin : 'auto' , width : '95%' }}>
//      <Box sx={{ display : 'flex' , margin : 'auto' , width : '97%' }}>
//      <ArrowBackIcon fontSize="large" sx={{width :'20px', height:'15px',marginTop:'28px'}}/>
//      <h2><span>Back</span> Add New Category</h2>
//      <Button variant="contained" color="success" size='small' sx={{height :'37px' ,marginLeft:'10px' , fontSize :'12px', marginLeft:'50rem', marginTop:'10px'}}>
//         Cancel
//     </Button>
//     <Button variant="contained" color="success" size='small' sx={{height :'37px' ,marginLeft:'10px' , fontSize :'14px',marginTop:'10px'}}>
//     <a className='add' href="/categories">Save</a>
//     </Button>
//      </Box>
     
    
//      <Box  sx={{margin : 'auto' , width : '90%' }}>
//      <FormControl className="form">
//         <Box sx={{display : "flex" , flexDirection : "row"}}>
//         <label htmlFor='category>'>Category Name</label>
//         <TextField sx={{marginLeft :'11.8rem'}} className="abc"  type="text"  variant='outlined'size="small" placeholder="Category Name" />
//         </Box>
//         <h3>Sub-Categories</h3>
//         <Box sx={{display : "flex" , flexDirection : "row"}}>
//         <label htmlFor='category>'>Sub-Category# 1 Name</label>
//         <TextField sx={{marginLeft :'8.7rem'}} className="abc"  type="text"  variant='outlined'size="small" placeholder="Sub-Category# 1 Name" />
//         </Box>
//         <Button variant="contained" color="success" size='medium' sx={{width :'145px' , height:'39px', marginBottom :'20px'}} startIcon={<AddIcon sx={{color:'#fff' , marginTop:'18px'}}/>}>
//          <a className='add' href="/n">Add Category</a>
//         </Button>
      
//      </FormControl>
//      </Box>
//      </Paper>
    
//      );
// }
 
// export default AddCategory;

import { useState } from 'react';
import { Box, Button, Divider, FormControl, Paper, TextField } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import "../../createOrganization.css";
import AddIcon from '@mui/icons-material/Add';
import TreeDataSimple from './detailCategories';

const AddCategory = () => {
  const [subCategories, setSubCategories] = useState(['Sub-Category# 1 Name']);

  const handleAddSubCategory = () => {
    const newSubCategories = [...subCategories];
    const nextSubCategoryNum = subCategories.length + 1;
    newSubCategories.push(`Sub-Category# ${nextSubCategoryNum} Name`);
    setSubCategories(newSubCategories);
  };

  return (
    <Paper sx={{ margin: 'auto', width: '95%' }}>
      <Box sx={{ display: 'flex', margin: 'auto', width: '97%' }}>
        <ArrowBackIcon fontSize="large" sx={{ width: '20px', height: '15px', marginTop: '28px' }} />
        <h2><span>Back</span> Add New Category</h2>
        <Button variant="contained" color="success" size='small' sx={{ height: '37px', marginLeft: '10px', fontSize: '12px', marginLeft: '50rem', marginTop: '10px' }}>
          Cancel
        </Button>
        <Button variant="contained" color="success" size='small' sx={{ height: '37px', marginLeft: '10px', fontSize: '14px', marginTop: '10px' }}>
          <a className='add' href="/categories">Save</a>
        </Button>
      </Box>

      <Box sx={{ margin: 'auto', width: '90%' }}>
        <FormControl className="form">
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <label htmlFor='category'>Category Name</label>
            <TextField sx={{ marginLeft: '11.8rem' }} className="abc" type="text" variant='outlined' size="small" placeholder="Category Name" />
          </Box>

          <h3>Sub-Categories</h3>

          {subCategories.map((subCategory, index) => (
            <Box key={index} sx={{ display: "flex", flexDirection: "row" }}>
              <label htmlFor={`subCategory${index + 1}`}>{subCategory}</label>
              <TextField sx={{ marginLeft: '8.7rem' }} className="abc" id={`subCategory${index + 1}`} type="text" variant='outlined' size="small" placeholder={subCategory} />
            </Box>
          ))}

          <Button variant="contained" color="success" size='medium' sx={{ width: '175px', height: '39px', marginBottom: '20px' }} startIcon={<AddIcon sx={{ color: '#fff', marginTop: '18px' }} />} onClick={handleAddSubCategory}>
            Add Category
          </Button>

        </FormControl>
      </Box>
    </Paper>

  );
};

export default AddCategory;


