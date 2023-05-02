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
import {Typography } from '@mui/material';
import { cellStyle, containerStyle, formStyle, headingStyle, paperStyle,statusStyle } from './requestStyle';
import CustomTable from '../SharedComponent/reuseableTable';
import { Link } from 'react-router-dom';

function renderActionLink(id) {
  return (
    <Link to={`/requestsDetail/${id}`}>
      <div className='details'>
        View
      </div>
    </Link>
  );
}

const columns = [
  { id: 'id', label: 'Id', minWidth: 100 },
  { id: 'employeeName', label: 'Employee Name', minWidth: 100 },
  {id: 'itemName', label: 'Item Name',minWidth: 100,align: 'center',color: 'brown'},
  {id: 'category',label: 'Category',minWidth: 100,align: 'center',},
  {id: 'subCategory',label: 'SubCategory',minWidth: 100,align: 'center',},
  {id: 'date',label: 'Date', minWidth: 100,align: 'center',},
  {id: 'status',label: 'Status',minWidth: 170,align: 'center',},
  {id: 'Action',label: 'Action',minWidth: 100,align: 'center',},
];

function createData(id ,employeeName, itemName,category,subCategory,date,status) {
  return { id , employeeName, itemName, category,subCategory,date , status, Action : renderActionLink(id) };
}

const rows = [
  createData('1', 'Muaz Azhar', 'Mouse','Electronics','Mouse', '23/03/2022' ,'Pending' ,'View'),
  createData('2', 'Ibtisam', 'Keyboard','Electronics' ,'Keyboard'  ,'24/03/2022' , 'Resolved' ,'View'),
  createData('3', 'Talha Zafeer', 'Book Pad', 'Stationery','Book Pad', '25/03/2022' , 'Pending' ,'View'),
  createData('4', 'Muhammad Aamir', 'Ear birds','Electronics','Ear Birds', '26/03/2022' , 'Resolved' ,'View'),
  createData('5', 'Abdullah', 'Chair','Furniture' , 'Chair',  '27/03/2022' , 'Pending' ,'View'),
  createData('6', 'Adil Bhatti', 'Table', 'Furniture' , 'Table' ,'28/03/2022' , 'Resolved' ,'View'),
];
export default function Requests() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

const [status, setStatus] = React.useState('');

  const handleChange = (event) => {
    setStatus(event.target.value);
  };
  return (
    
    <Paper sx={paperStyle}>
       
      <TableContainer sx={containerStyle}>
      <TableRow>
              <TableCell style={cellStyle}>
                <Typography variant='h5' sx={headingStyle}>Requests</Typography>
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


                <Paper sx={statusStyle}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Select Status</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={status}
                    label="Age"
                    onChange={handleChange}
                    sx={{height : '49px'}}
                    >
                    <MenuItem value={10}>Pending</MenuItem>
                    <MenuItem value={20}>Resolved</MenuItem>
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