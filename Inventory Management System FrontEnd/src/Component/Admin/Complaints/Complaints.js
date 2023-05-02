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
import {Box, Typography } from '@mui/material';
import { boxStyle, cellStyle, formStyle, headingStyle, paperStyle } from './complaintStyle';
import TabComponent from './sideTab';
import Submitted from './Submitted';
import CustomTable from '../SharedComponent/reuseableTable';
import { Link } from 'react-router-dom';

function renderActionLink(id) {
  return (
    <Link to={`/complaintsDetail/${id}`}>
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

function createData(id ,employeeName,description,submissionDate,status,) {
  return { id , employeeName, description, submissionDate , status, Action :renderActionLink(id) };
}
const rows = [
  createData('1', 'Muaz Azhar', 'Timmys is a fast food resturent. ' , '23/03/2022' ,'Pending' ,'View'),
  createData('2', 'Ibtisam','Kfc is a fast food resturent.' , '24/03/2022' , 'Resolved' ,'View'),
  createData('3', 'Talha Zafeer','FRI Chicks is a fast food resturent.' , '25/03/2022' , 'Pending' ,'View'),
  createData('4', 'Muhammad Aamir','A web/mobile development.' , '26/03/2022' , 'Resolved' ,'View'),
  createData('5', 'Abdullah', 'A web/mobile development firms' , '27/03/2022' , 'Pending' ,'View'),
  createData('6', 'Adil Bhatti', 'A web/mobile development firm' , '28/03/2022' , 'Resolved' ,'View'),
];
export default function AdminComplaints() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5)
  const [tab, setTab] = React.useState(0)

const [status, setStatus] = React.useState('');

  const handleChange = (event) => {
    setStatus(event.target.value);
  };
  return (
    
    <Paper sx={paperStyle}>

    <Box sx={boxStyle}>
        <Box sx={{marginRight:'60px'}}>
            <TabComponent labels={['Employees', 'Submitted']} setTab={setTab} orientation={"vertical"}/>
        </Box>
      {tab === 0 ?
    <TableContainer>
      <TableRow>
              <TableCell style={cellStyle}>
                <Typography variant='h5' sx={headingStyle}>Complaints</Typography>
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
                    <InputLabel id="demo-simple-select-label">Select Status</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={status}
                    label="status"
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
      :
      <Submitted/>  
      }
      </Box>

    </Paper>
    
  );
}