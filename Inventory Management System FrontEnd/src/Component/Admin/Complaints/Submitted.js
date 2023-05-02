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
import AddIcon from '@mui/icons-material/Add';
import {Box, Button, Typography } from '@mui/material';
import { addIcon, boxStyle, cellStyle, formStyle, headingStyle, paperStyle , add} from './complaintStyle';
import CustomTable from '../SharedComponent/reuseableTable';
import { Link } from 'react-router-dom';


function renderActionLink(id) {
  return (
    <Link to={`/submittedDetail/${id}`}>
      <div className='details'>
        View
      </div>
    </Link>
  );
}
const columns = [
  { id: 'id', label: 'Id', minWidth: 100 },
  {id: 'description',label: 'Description',minWidth: 100,align: 'center',},
  {id: 'submissionDate',label: 'Submission Date', minWidth: 100,align: 'center',},
  {id: 'status',label: 'Status',minWidth: 170,align: 'center',},
  {id: 'Action',label: 'Action',minWidth: 100,align: 'center',},
];

function createData(id ,description,submissionDate,status) {
  return { id , description, submissionDate , status, Action : renderActionLink(id) };
}

const rows = [
  createData('1',  'Timmys is a fast food resturent. ' , '23/03/2022' ,'Pending' ,'View'),
  createData('2', 'Kfc is a fast food resturent.' , '24/03/2022' , 'Resolved' ,'View'),
  createData('3', 'FRI Chicks is a fast food resturent.' , '25/03/2022' , 'Pending' ,'View'),
  createData('4', 'A web/mobile development.' , '26/03/2022' , 'Resolved' ,'View'),
  createData('5', 'A web/mobile development firms' , '27/03/2022' , 'Pending' ,'View'),
  createData('6',  'A web/mobile development firm' , '28/03/2022' , 'Resolved' ,'View'),
];



export default function Submitted() {

const [status, setStatus] = React.useState('');
const [page, setPage] = React.useState(0);
const [rowsPerPage, setRowsPerPage] = React.useState(5)

  const handleChange = (event) => {
    setStatus(event.target.value);
  };
  return (
    
    <Box sx={paperStyle}>

    <Box sx={boxStyle}>
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
                <Button variant="contained" color="success" size='medium' sx={add} startIcon={<AddIcon sx={addIcon}/>}>
             
             <a className='add' href="/createComplaints">create complaint</a>
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
        </Box>
    </Box>
    
  );
}