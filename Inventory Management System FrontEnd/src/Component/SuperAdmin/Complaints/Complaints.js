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
import { Link } from 'react-router-dom';
import CustomTable from '../../Admin/SharedComponent/reuseableTable';

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
  { id: 'employeeName', label: 'Employee Name', minWidth: 100 },
  {id: 'description',label: 'Description',minWidth: 100,align: 'center',},
  {id: 'submissionDate',label: 'Submission Date', minWidth: 100,align: 'center',},
  {id: 'status',label: 'Status',minWidth: 170,align: 'center',},
  {id: 'Action',label: 'Action',minWidth: 100,align: 'center',},
];

function createData(id ,employeeName,description,submissionDate,status, Action) {
  return { id , employeeName, description, submissionDate , status, Action : renderActionLink(id) };
}

const rows = [
  createData('1', 'Muaz Azhar','Timmys is a fast food resturent. it is situated in lahore and other cities of pakistan ' , '23/03/2022' ,'Pending' ,'View'),
  createData('2', 'Ibtisam', 'Kfc is a fast food resturent. it is situated in lahore and other cities of pakistan' , '24/03/2022' , 'Resolved' ,'View'),
  createData('3', 'Talha Zafeer', 'FRI Chicks is a fast food resturent. it is situated in lahore and other cities of pakistan' , '25/03/2022' , 'Pending' ,'View'),
  createData('4', 'Muhammad Aamir',  'A web/mobile development firm that has expertise in over 12 technology stacks including various frameworks' , '26/03/2022' , 'Resolved' ,'View'),
  createData('5', 'Abdullah',  'A web/mobile development firm that has expertise in over 12 technology stacks including various frameworks' , '27/03/2022' , 'Pending' ,'View'),
  createData('6', 'Adil Bhatti', 'A web/mobile development firm that has expertise in over 12 technology stacks including various frameworks' , '28/03/2022' , 'Resolved' ,'View'),
  createData('7', 'Rafay Khan', 'Employ the top talent of experienced developers, designers, project managers and QA specialists at highly competitive rates.' , '29/03/2022' , 'Pending' ,'View'),
  createData('8', 'Danish Ali', 'Employ the top talent of experienced developers, designers, project managers and QA specialists at highly competitive rates.' , '30/03/2022' , 'Resolved' ,'View'),
  createData('9', 'Rao Arslan', 'Employ the top talent of experienced developers, designers, project managers and QA specialists at highly competitive rates.' , '31/03/2022' , 'Pending' ,'View'),
  createData('10', 'Akram Ali', 'Employ the top talent of experienced developers, designers, project managers and QA specialists at highly competitive rates.' , '01/04/2022' , 'Resolved' ,'View'),
  createData('11', 'Safdar Ali', 'Employ the top talent of experienced developers, designers, project managers and QA specialists at highly competitive rates.' , '02/04/2022' , 'Pending' ,'View'),

];
export default function Complaints() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    
    <Paper sx={{margin : 'auto' , width : '95%' }}>
       
      <TableContainer sx={{margin : 'auto' , width : '97%' }}>
      <TableRow>
              <TableCell style={{ display : 'flex' , alignItems : 'center' , justifyContent : 'center',  color: 'fff',fontSize:'16px'}}>
                <Typography variant='h5' sx={{marginRight : '10px' ,fontWeight : 'bold'}}>Complaints</Typography>
                <Paper
                    component="form"
                    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 270  , marginRight : '10px'}}
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

                <Paper sx={{ width: 280 , marginRight : '10px' }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Select Organization</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                    sx={{height : '49px'}}

                    >
                    <MenuItem value={10}>Lahore</MenuItem>
                    <MenuItem value={20}>Multan</MenuItem>
                    <MenuItem value={30}>karachi</MenuItem>
                    <MenuItem value={30}>Dg Khan</MenuItem>
                    <MenuItem value={30}>Lodrah</MenuItem>
                    </Select>
                </FormControl>
                </Paper>

                <Paper sx={{ width: 280 }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Select Status</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
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