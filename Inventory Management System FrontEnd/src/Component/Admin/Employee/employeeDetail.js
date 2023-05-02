import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import PhotoIcon from '@mui/icons-material/Photo';
import {Box, Divider, Typography } from '@mui/material';
import { boxStyle, cellStyle, formStyle, headingStyle, paperStyle, tableHeaderStyle } from '../Complaints/complaintStyle';
import TabComponent from '../Complaints/sideTab';
import Submitted from '../Complaints/Submitted';
import { divider, dividerStyle, innerBox, photoIcon } from './emplyeeStyle';
import Inventory from '../Inventory/Inventory';
// import { paperStyle } from '../Complaints/complaintStyle';



const StyledTableCell = tableHeaderStyle

const columns = [
  { id: 'id', label: 'Id', minWidth: 100 },
  { id: 'employeeName', label: 'Employee Name', minWidth: 100 },
  {id: 'description',label: 'Description',minWidth: 100,align: 'center',},
  {id: 'submissionDate',label: 'Submission Date', minWidth: 100,align: 'center',},
  {id: 'status',label: 'Status',minWidth: 170,align: 'center',},
  {id: 'Action',label: 'Action',minWidth: 100,align: 'center',},
];

function createData(id ,employeeName,description,submissionDate,status, Action) {
  return { id , employeeName, description, submissionDate , status, Action };
}

const rows = [
  createData('1', 'Muaz Azhar', 'Timmys is a fast food resturent. ' , '23/03/2022' ,'Pending' ,'View'),
  createData('2', 'Ibtisam','Kfc is a fast food resturent.' , '24/03/2022' , 'Resolved' ,'View'),
  createData('3', 'Talha Zafeer','FRI Chicks is a fast food resturent.' , '25/03/2022' , 'Pending' ,'View'),
  createData('4', 'Muhammad Aamir','A web/mobile development.' , '26/03/2022' , 'Resolved' ,'View'),
  createData('5', 'Abdullah', 'A web/mobile development firms' , '27/03/2022' , 'Pending' ,'View'),
  createData('6', 'Adil Bhatti', 'A web/mobile development firm' , '28/03/2022' , 'Resolved' ,'View'),
];



export default function EmployeeDetail() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10)
  const [tab, setTab] = React.useState(null)

const [status, setStatus] = React.useState('');

  const handleChange = (event) => {
    setStatus(event.target.value);
  };



  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    
    <Paper sx={paperStyle}>

    <Box sx={boxStyle}>
        <Box sx={{marginRight:'60px'}}>
            <TabComponent labels={['General Information', 'Inventory' , 'Request']} setTab={setTab} orientation={"vertical"}/>
        </Box>
      {tab === 0 ?

      <Box sx={{width:'100%'}}>
        <Box sx={{display :'flex' , alignItems :'center'}}>
                    <PhotoIcon fontSize="large" sx={photoIcon}/>
                    <Box sx={{display :'flex' , flexDirection : "row" }}>
                    <div>
                        <h3>Muaz Azhar</h3>
                    </div>
                    </Box>
                    </Box>
        <Divider sx={divider}/>

        <Box sx={innerBox}>
                        <Box sx={{width:'26%'}}>
                        <label htmlFor='Name Of Organization>'>Email Address</label>
                        </Box>
                       <Box sx={{width:'74%'}}>raoaamir9032@gmail.com</Box>
                    </Box>
                    <Divider sx={divider} />
                    <Box sx={innerBox}>
                        <Box sx={{width:'26%'}}>
                        <label htmlFor='Name Of Organization>'>Name</label>
                        </Box>
                       <Box sx={{width:'74%'}}>Muhammad Aamir</Box>
                    </Box>
                    <Divider sx={divider} />
                    <Box sx={innerBox}>
                        <Box sx={{width:'26%'}}>
                        <label htmlFor='Name Of Organization>'>Contact Number</label>
                        </Box>
                       <Box sx={{width:'74%'}}>+92 306 7359032</Box>
                    </Box>
                    <Divider sx={divider} />
                    <Box sx={innerBox}>
                        <Box sx={{width:'26%'}}>
                        <label htmlFor='Name Of Organization>'>Department</label>
                        </Box>
                       <Box sx={{width:'74%'}}>HR Department </Box>
                    </Box>
                    <Divider sx={divider} />
      </Box>
      
    // <TableContainer>
    //   <TableRow>
    //           <TableCell style={cellStyle}>
    //             <Typography variant='h5' sx={headingStyle}>Complaints</Typography>
    //             <Paper
    //                 component="form"
    //                 sx={formStyle}
    //              >
     
    //             <InputBase
    //                 sx={{ ml: 1, flex: 1 }}
    //                 placeholder="Search"
    //                 inputProps={{ 'aria-label': 'search' }}
    //             />
    //             <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
    //                 <SearchIcon />
    //             </IconButton>
    //             </Paper>

    //             <Paper sx={{ width: 280 }}>
    //             <FormControl fullWidth>
    //                 <InputLabel id="demo-simple-select-label">Select Status</InputLabel>
    //                 <Select
    //                 labelId="demo-simple-select-label"
    //                 id="demo-simple-select"
    //                 value={status}
    //                 label="status"
    //                 onChange={handleChange}
    //                 sx={{height : '49px'}}
    //                 >
    //                 <MenuItem value={10}>Pending</MenuItem>
    //                 <MenuItem value={20}>Resolved</MenuItem>
    //                 </Select>
    //             </FormControl>
    //             </Paper>
             
    //           </TableCell>
    //         </TableRow>
    //     <Table>
    //       <TableHead >
    //         <TableRow>
    //           {columns.map((column) => (
    //             <StyledTableCell
    //               key={column.id}
    //               align={column.align}
                  
    //               style={{ top: 57, minWidth: column.minWidth }}
    //             >
    //               {column.label}
                  
    //             </StyledTableCell>
    //           ))}
    //         </TableRow>
    //       </TableHead>
    //       <TableBody>
    //         {rows
    //           .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    //           .map((row) => {
    //             return (
    //               <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
    //                 {columns.map((column) => {
    //                   const value = row[column.id];
    //                   return (
    //                     <TableCell key={column.id} align={column.align}>
    //                       {column.format && typeof value === 'number'
    //                         ? column.format(value)
    //                         : value}
    //                     </TableCell>
    //                   );
    //                 })}
    //               </TableRow>
    //             );
    //         })}
    //       </TableBody>
    //     </Table>
    //     </TableContainer>
    
      :
      <Inventory/>  
      
      }
  
 
        </Box>
        {/* <TablePagination
        rowsPerPageOptions={[5, 10, 15]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      /> */}
    </Paper>
    
  );
}