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
import { buttonStyle, cellStyle, containerStyle, formStyle, headingStyle, iconStyle, paperStyle } from './emplyeeStyle';
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
  {id: 'id', label: 'Id', minWidth: 100 },
  {id: 'fullName', label: 'FullName', minWidth: 100 },
  {id: 'email', label: 'Email Address',minWidth: 100,align: 'center',color: 'brown'},
  {id: 'contactNumber',label: 'Contact Number',minWidth: 170,align: 'center',},
  {id: 'department',label: 'Department', minWidth: 100,align: 'center',},
  {id: 'Action',label: 'Action',minWidth: 100,align: 'center',},
];

function createData(id , fullName ,email, contactNumber, department ) {
  return { id , fullName,email ,contactNumber ,department, Action :renderActionLink(id)};
}

const rows = [
  createData('1', 'Muhammad Aamir', 'raoaamir9032', '03067359032' , 'IT'  ,'View'),
  createData('2', 'Muhammad Ebad', 'ebad@gmail.com', '03067359032' , 'Finance'  ,'View'),
  createData('3', 'Muhammad Hassan', 'hassan9032@gmail.com', '03067359032' , 'Production'  ,'View'),
  createData('4', 'Muhammad Sami', 'sami9032@gmail.com', '03067359032' , 'IT'  ,'View'),
  createData('5', 'Muhammad Sohail', 'sohail9032@gmail.com', '03067359032' , 'Finance'  ,'View'),
  createData('6', 'Muhammad Jawad', 'jawad9032@gmail.com', '03067359032' , 'IT'  ,'View'),
  createData('7', 'Muhammad Sameer', 'sameer9032@gmail.com', '03067359032' , 'Production'  ,'View'),
  createData('8', 'Muhammad Faisal', 'faisal9032@gmail.com', '03067359032' , 'IT'  ,'View'),
  createData('9', 'Muhammad Akram', 'akram9032@gmail.com', '03067359032' , 'HR'  ,'View'),


];
export default function Employees() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    
    <Paper sx={paperStyle}>
       
      <TableContainer sx={containerStyle}>
      <TableRow>
              <TableCell style={cellStyle}>
                <Typography variant='h5' sx={headingStyle}>Employees</Typography>
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

                <Paper sx={{ width: 280 }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Select Department</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                    sx={{height : '49px'}}

                    >
                    <MenuItem value={10}>IT</MenuItem>
                    <MenuItem value={20}>HR</MenuItem>
                    <MenuItem value={30}>Finance</MenuItem>
                    <MenuItem value={30}>Production</MenuItem>
                    </Select>
                </FormControl>
                </Paper>
             
              <Button variant="contained" color="success" size='medium' sx={buttonStyle} startIcon={<AddIcon sx={iconStyle}/>}>
             
                 <a className='add' href="/addEmployee">Add Employee</a>
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