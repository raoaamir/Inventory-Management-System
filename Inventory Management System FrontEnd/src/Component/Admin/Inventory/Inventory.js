import * as React from 'react';
import Paper from '@mui/material/Paper';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { add, addButton, addIcon, categoryBox, cellStyle, containerStyle, formStyle, headingStyle, paperStyle, subCategoryBox } from './inventoryStyle';
import { Link } from 'react-router-dom';
import '../../createOrganization.css'
import CustomTable from '../SharedComponent/reuseableTable';

function renderActionLink(id) {
  return (
    <Link to={`/detailInventory/${id}`}>
      <div className='details'>
        View
      </div>
    </Link>
  );
}

const columns = [
  { id: 'id', label: 'Id', minWidth: 100 },
  { id: 'itemName', label: 'Item Name', minWidth: 100 },
  {id: 'description',label: 'Description',minWidth: 100,align: 'center',},
  {id: 'category',label: 'Category', minWidth: 100,align: 'center',},
  {id: 'subCategory',label: 'Sub Category',minWidth: 170,align: 'center',},
  {id: 'price',label: 'Price (Rs)',minWidth: 170,align: 'center',},
  {id: 'action',label: 'Action',minWidth: 100,align: 'center',},
];

function createData(id ,itemName,description,category,subCategory,price) {
  return { id ,itemName, description, category , subCategory,price, action:renderActionLink(id)};
}

const rows = [
  createData('1', 'Muaz Azhar','Timmys is a fast food resturent.','Elctronics' , 'Keyboard' , '3000' , 'View'),
  createData('2', 'Ibtisam','Kfc is a fast food resturent.','Electronics', 'Mouse', '1200' ,'View'),
  createData('3', 'Talha Zafeer', 'FRI Chicks','Stationery', 'Book Paid', '1200' ,'View'),
  createData('4', 'Muhammad Aamir', 'Gigalabs','Stationery', 'Book Paid', '1200' ,'View'),
  createData('5', 'Abdullah', 'Codetech','Stationery', 'Book Paid', '1200' ,'View'),
  createData('6', 'Adil Bhatti', 'Prismatic','Stationery', 'Book Paid', '1200' ,'View'),
  createData('7', 'Rafay Khan', 'Nisum','Stationery', 'Book Paid', '1200' ,'View'),
  createData('8', 'Danish Ali', 'i2c','Stationery', 'Book Paid', '1200' ,'View'),
  createData('9', 'Rao Arslan', 'Next Bridge' ,'Stationery', 'Book Paid', '1200'  ,'View'),
  createData('10', 'Akram Ali', 'System Limited','Stationery', 'Book Paid', '1200'  ,'View'),
  createData('11', 'Safdar Ali', 'Netsol','Stationery', 'Book Paid', '1200' ,'View'),

];

export default function Inventory() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

const [category, setCategory] = React.useState('');
const [Subcategory, setSubCategory] = React.useState('');

  const handleChange = (event) => {
    setCategory(event.target.value);
  };
  const handleSubCategory = (event) => {
    setSubCategory(event.target.value);
  };


  return (
    
    <Paper sx={paperStyle}>
       
      <TableContainer sx={containerStyle}>
      <TableRow>
              <TableCell style={cellStyle}>
                <Typography variant='h5' sx={headingStyle}>Inventory</Typography>
                <Paper
                    component="form"
                    sx={formStyle}
                 >
     
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search"
                    inputProps={{ 'aria-label': 'search' }}
                />
                <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                    <SearchIcon />
                </IconButton>
                </Paper>

                <Paper sx={categoryBox}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Select Category</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={category}
                    label="Age"
                    onChange={handleChange}
                    sx={{height : '49px'}}

                    >
                    <MenuItem value={10}>Stationery</MenuItem>
                    <MenuItem value={20}>Electronics</MenuItem>
                    <MenuItem value={30}>Furniture</MenuItem>
                    </Select>
                </FormControl>
                </Paper>

                <Paper sx={subCategoryBox}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Select subCategory</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={Subcategory}
                    label="Age"
                    onChange={handleSubCategory}
                    sx={{height : '49px'}}
                    >
                    <MenuItem value={10}>Book Paid</MenuItem>
                    <MenuItem value={20}>Mouse</MenuItem>
                    <MenuItem value={20}>KeyBoard</MenuItem>
                    <MenuItem value={20}>Chair</MenuItem>
                    <MenuItem value={20}>Table</MenuItem>
                    </Select>
                </FormControl>
                </Paper>

                <Button variant="contained" color="success" size='medium' sx={add} startIcon={<AddIcon sx={addIcon}/>}>
             
             <a className='add' href="/createInventory">Add Item</a>
                </Button>
             
              </TableCell>
            </TableRow>
            <CustomTable
            columns={columns}
            rows={rows}
            page={page}
            rowsPerPage={rowsPerPage}
            setPage={setPage}
            setRowsPerPage={setRowsPerPage}
          />
      </TableContainer>
    </Paper>
  );
}