// import * as React from 'react';
// import Paper from '@mui/material/Paper';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableRow from '@mui/material/TableRow';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
// import IconButton from '@mui/material/IconButton';
import { Button} from '@mui/material';
// import AddIcon from '@mui/icons-material/Add'
import '../../createOrganization.css'
import { buttonStyle, cell, container, formStyle, heading, iconStyle, paperStyle, tableColumn } from './categoriesStyle';
import CustomTable from '../SharedComponent/reuseableTable';
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';
import KeyboardArrowDownSharpIcon from '@mui/icons-material/KeyboardArrowDownSharp';
// import { Link } from 'react-router-dom';

// function renderActionLink(id) {
//     return (
//       <div>
//         <Link to="/add">
//           <IconButton aria-label="add">
//             <AddIcon color='success' sx={{ width:'15px'}}/>
//             <Link href="">Add</Link>
//           </IconButton>
//         </Link>
//         <IconButton aria-label="edit">
//           <EditIcon sx={{ width:'15px'}} />
//         </IconButton>
//         <IconButton aria-label="delete">
//           <DeleteIcon sx={{color :'red' , width:'15px'}}/>
//         </IconButton>
//       </div>
//     );
// }

// function renderDetail(){
// return(
//   <Link to="/detail">
//   <IconButton aria-label="detail">
//     <KeyboardArrowDownSharpIcon sx={{ width:'15px'}}/>
//   </IconButton>
// </Link>
// );
// }

// const columns = tableColumn

// function createData(id ,categoryName,no_of_subcategory,no_of_vendor, ) {
//   return { id ,categoryName, no_of_subcategory, no_of_vendor ,Action:renderActionLink(id) , detail : renderDetail() };
// }

// const rows = [
//   createData('1','Elctronics' , '12' , '7' , 'View'),
//   createData('2','Stationery' , '8' , '3' , 'View'),
//   createData('3','Furniture' , '2' , '6' , 'View'),
//   createData('4','Stationery' , '10' , '3' , 'View'),
// ];

// export default function Inventory() {
//   const [page, setPage] = React.useState(0);
//   const [rowsPerPage, setRowsPerPage] = React.useState(5);
//   return (
    
//     <Paper sx={paperStyle}>
       
//       <TableContainer sx={container}>
//       <TableRow>
//               <TableCell style={cell}>
//                 <Typography variant='h5' sx={heading}>Categories</Typography>
//                 <Paper
//                     component="form"
//                     sx={formStyle}
//                  >
     
//                 <InputBase
//                     sx={{ ml: 1, flex: 1 }}
//                     placeholder="Search"
//                     inputProps={{ 'aria-label': 'search' }}
//                 />
//                 <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
//                     <SearchIcon />
//                 </IconButton>
//                 </Paper>

//                 <Button variant="contained" color="success" size='medium' sx={buttonStyle} startIcon={<AddIcon sx={iconStyle}/>}>
             
//              <a className='add' href="/addCategory">Add Category</a>
//                 </Button>
             
//               </TableCell>
//             </TableRow>
            
//             <CustomTable
//             columns={columns}
//             rows={rows}
//             page={page}
//             rowsPerPage={rowsPerPage}
//             setPage={setPage}
//             setRowsPerPage={setRowsPerPage}
//           />
      
//       </TableContainer>
//     </Paper>
//   );
// }

import React from "react"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add'
import { Box, Collapse, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, makeStyles, styled, tableCellClasses } from "@mui/material";
import { Link } from "react-router-dom";
;
const StyledTableCell = styled(TableCell)(({ theme }) => ({
   [`&.${tableCellClasses.head}`]: {
     backgroundColor: '#1976d2',
     color: 'white',
     
   },
   [`&.${tableCellClasses.body}`]: {
     fontSize: '40px',
   },
 }));

 function renderActionLink(id) {
   return (
     <div>
       <Link to="/add">
         <IconButton aria-label="add">
           <AddIcon color='success' sx={{ width:'15px'}}/>
           <Link href="">Add</Link>
         </IconButton>
       </Link>
       <IconButton aria-label="edit">
         <EditIcon sx={{ width:'15px'}} />
       </IconButton>
       <IconButton aria-label="delete">
         <DeleteIcon sx={{color :'red' , width:'15px'}}/>
       </IconButton>
     </div>
   );
}

const columns =[
   { id: 'id', label: 'Id', minWidth: 100 },
   { id: 'categoryName', label: 'Category Name', minWidth: 100 },
   {id: 'no_of_subcategory',label: 'No Of Sub-Categories',minWidth: 100,align: 'center',},
   {id: 'no_of_vendor',label: 'No Of Vendors', minWidth: 100,align: 'center',},
   {id: 'Action',label: 'Action',minWidth: 100,align: 'center',},
   {id: 'detail',minWidth: 40,align: 'center',},
 ];

function createData(id, categoryName, no_of_subcategory, no_of_vendor, Action) {
  return {
    id,
    categoryName,
    no_of_subcategory,
    no_of_vendor,
    Action :renderActionLink(),
    history: [
      { SubCategoryName: "Mouse", VendorName: "Taj Group", Quantity: 56 , QuantityAssigned : 14 , QuantityUnassigned :40 , QuantityFaulty : 2 ,Action :"View"},
      { SubCategoryName: "Mouse", VendorName: "Taj Group", Quantity: 56 , QuantityAssigned : 14 , QuantityUnassigned :40 , QuantityFaulty : 2 ,Action :"View"},
      { SubCategoryName: "Mouse", VendorName: "Taj Group", Quantity: 56 , QuantityAssigned : 14 , QuantityUnassigned :40 , QuantityFaulty : 2 ,Action :"View"},
      { SubCategoryName: "Mouse", VendorName: "Taj Group", Quantity: 56 , QuantityAssigned : 14 , QuantityUnassigned :40 , QuantityFaulty : 2 ,Action :"View"},
      { SubCategoryName: "Mouse", VendorName: "Taj Group", Quantity: 56 , QuantityAssigned : 14 , QuantityUnassigned :40 , QuantityFaulty : 2 ,Action :"View"},
      { SubCategoryName: "Mouse", VendorName: "Taj Group", Quantity: 56 , QuantityAssigned : 14 , QuantityUnassigned :40 , QuantityFaulty : 2 ,Action :"View"},
      { SubCategoryName: "Mouse", VendorName: "Taj Group", Quantity: 56 , QuantityAssigned : 14 , QuantityUnassigned :40 , QuantityFaulty : 2 ,Action :"View"},
    ]
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = StyledTableCell

  return (
    <React.Fragment>
      <TableRow className={classes.root} >
        <TableCell component="th" scope="row">
          {row.id}
        </TableCell>
        <TableCell sx={{width :'2%'}} align="center">{row.categoryName}</TableCell>
        <TableCell align="center">{row.no_of_subcategory}</TableCell>
        <TableCell align="center">{row.no_of_vendor}</TableCell>
        <TableCell align="center">{row.Action}</TableCell>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Table size="small" aria-label="purchases">
                <TableHead sx={{backgroundColor :'#1976d2'}}>
                  <TableRow>
                    <TableCell>SubCategoryName</TableCell>
                    <TableCell>VendorName</TableCell>
                    <TableCell align="right">Quantity</TableCell>
                    <TableCell align="right">QuantityAssigned</TableCell>
                    <TableCell align="right">QuantityUnassigned</TableCell>
                    <TableCell align="right">QuantityFaulty</TableCell>
                    <TableCell align="right">Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.SubCategoryName}>
                      <TableCell component="th" scope="row">
                        {historyRow.SubCategoryName}
                      </TableCell>
                      <TableCell>{historyRow.VendorName}</TableCell>
                      <TableCell align="right">{historyRow.Quantity}</TableCell>
                      <TableCell align="right">{historyRow.QuantityAssigned}</TableCell>
                      <TableCell align="right">{historyRow.QuantityUnassigned}</TableCell>
                      <TableCell align="right">{historyRow.QuantityFaulty}</TableCell>
                      <TableCell align="right">{historyRow.Action}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}



const rows = [
  createData(1, "Frozen", 159, 6.0 , 'view'),
  createData(2, "sandwich", 237, 9.0),
  createData(3 , "Eclair", 262, 16.0),
  createData(4 ,"Cupcake", 305, 3.7),
  createData(5 , "Gingerbread", 356, 16.0)
];

export default function AddCategory() {
  return (
    <TableContainer component={Paper} sx={{margin :'auto', width : '95%'}}>
<TableRow>
              <TableCell style={cell}>
                <Typography variant='h5' sx={heading}>Categories</Typography>
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

                <Button variant="contained" color="success" size='medium' sx={buttonStyle} startIcon={<AddIcon sx={iconStyle}/>}>
             
             <a className='add' href="/addCategory">Add Category</a>
                </Button>
             
              </TableCell>
            </TableRow>
      <Table aria-label="collapsible table">
         <TableHead sx={{backgroundColor :'#1976d2'}}>
           <TableRow >

           {columns.map((column) => (
                  <StyledTableCell
                  key={column.id}
                  align={column.align}
                  style={{minWidth: column.minWidth }}
                >
                  {column.label}
                  </StyledTableCell>
            

              ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.id} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}