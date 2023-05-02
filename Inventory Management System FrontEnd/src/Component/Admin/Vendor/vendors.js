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
import { addButton, addIcon, categoryStyle, cellStyle, containerStyle, formStyle, headingStyle, subCategoryStyle , min ,max, paperStyle } from './vendorStyle';
import { Link } from 'react-router-dom';
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
  { id: 'vendorName', label: 'Vendor Name', minWidth: 100 },
  {id: 'contactNumber', label: 'Contact Number',minWidth: 100,align: 'center',color: 'brown'},
  {id: 'category',label: 'Category',minWidth: 100,align: 'center',},
  {id: 'subCategory',label: 'SubCategory',minWidth: 100,align: 'center',},
  {id: 'spending',label: 'Total Spendings', minWidth: 100,align: 'center',},
  {id: 'Action',label: 'Action',minWidth: 100,align: 'center',},
];

function createData(id ,vendorName, contactNumber,category,subCategory,spending, Action) {
  return { id , vendorName, contactNumber, category,subCategory ,spending ,Action :renderActionLink(id) };
}

const rows = [
  createData('1', 'Muaz Azhar', 'Mouse','Electronics','Mouse', '23,0000' ,'View'),
  createData('2', 'Ibtisam', 'Keyboard','Electronics' ,'Keyboard'  ,'2,6000' ,'View'),
  createData('3', 'Talha Zafeer', 'Book Pad', 'Stationery','Book Pad', '210,000','View'),
  createData('4', 'Muhammad Aamir', 'Ear birds','Electronics','Ear Birds', '50,000' ,'View'),
  createData('5', 'Abdullah', 'Chair','Furniture' , 'Chair',  '2300' ,'View'),
  createData('6', 'Adil Bhatti', 'Table', 'Furniture' , 'Table' ,'7500','View'),
];
export default function Vendors() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const [category, setCategory] = React.useState('');
  const [Subcategory, setSubCategory] = React.useState('');
  const [minPrice, setMinPrice] = React.useState('');
  const [maxPrice, setMaxPrice] = React.useState('');
  
    const handleChange = (event) => {
      setCategory(event.target.value);
    };
    const handleSubCategory = (event) => {
      setSubCategory(event.target.value);
    };
    const handleMin = (event) => {
        setMinPrice(event.target.value);
      };
      const handleMax = (event) => {
        setMaxPrice(event.target.value);
      };

  return (
    
    <Paper sx={paperStyle}>
       
      <TableContainer sx={containerStyle}>
      <TableRow sx={{display:'flex' , flexWrap:'nowrap'}}>
              <TableCell style={cellStyle}>
                <Typography variant='h5' sx={headingStyle}>Vendors</Typography>
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


                <Paper sx={categoryStyle}>
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

                <Paper sx={subCategoryStyle}>
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

                <Button variant="contained" color="success" size='medium' sx={addButton} startIcon={<AddIcon sx={addIcon}/>}>
             
             <a className='add' href="/addVendors">Add Vendor</a>
                </Button>

                <Paper sx={min}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Min Price</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={minPrice}
                    label="Age"
                    onChange={handleMin}
                    sx={{height : '49px'}}
                    >
                    <MenuItem value={10}>1000</MenuItem>
                    <MenuItem value={20}>2000</MenuItem>
                    <MenuItem value={20}>3000</MenuItem>
                    <MenuItem value={20}>4000</MenuItem>
                    <MenuItem value={20}>5000</MenuItem>
                    </Select>
                </FormControl>
                </Paper>
                <Paper sx={max}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Max Price</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={maxPrice}
                    label="Age"
                    onChange={handleMax}
                    sx={{height : '49px'}}
                    >
                    <MenuItem value={10}>10,000</MenuItem>
                    <MenuItem value={20}>20,000</MenuItem>
                    <MenuItem value={20}>30.000</MenuItem>
                    <MenuItem value={20}>40,000</MenuItem>
                    <MenuItem value={20}>50,000</MenuItem>
                    </Select>
                </FormControl>
                </Paper>
             
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