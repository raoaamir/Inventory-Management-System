import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#1976d2',
    color: 'white',
    
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: '40px',
  },
}));

const columns = [
  { id: 'id', label: 'Id', minWidth: 100 },
  { id: 'image', label: 'Image', minWidth: 100 },
  {id: 'name', label: 'Name',minWidth: 100,align: 'center',color: 'brown'},
  {id: 'Location',label: 'Location',minWidth: 100,align: 'center',},
  {id: 'Email',label: 'Email', minWidth: 100,align: 'center',},
  {id: 'ContactNumber',label: 'Contact Number',minWidth: 170,align: 'center',},
  {id: 'Action',label: 'Action',minWidth: 100,align: 'center',},
];

function createData(id , image , name, Location, Email, ContactNumber ,Action) {
  return { id , image, name, Location, Email , ContactNumber, Action };
}

const rows = [
  createData('1', 'Null', 'Gigalabs', 'Lahore' , 'gigalabs1@gmail.com' , '03067359032' ,'View'),
  createData('2', 'Null', 'Gigalabs', 'Lahore' , 'gigalabs2@gmail.com' , '03062349032' ,'View'),
  createData('3', 'Null', 'Gigalabs', 'Lahore' , 'gigalabs3@gmail.com' , '03032349032' ,'View'),
  createData('4', 'Null', 'Gigalabs', 'Lahore' , 'gigalabs4@gmail.com' , '03018979032' ,'View'),
];

export default function ColumnGroupingTable() {

  return (
    <Box sx={{ margin:'auto', width: '95%'}}>
      <TableContainer sx={{maxHeight: 350 }}>
        <Table>
          <TableHead >
            <TableRow>
              {/* <TableCell style={{ color: 'fff',fontSize:'16px'}} align="left"colSpan={7}>
                Recent Complaints
              </TableCell> */}
              <Typography sx={{ fontSize: 16 , marginTop :'10px', marginBottom:'20px' , fontWeight:'bold' }} color="text.paper">Recent Complaints</Typography>

            </TableRow>

            <TableRow>
              {columns.map((column) => (
                <StyledTableCell
                  key={column.id}
                  align={column.align}
                  
                  style={{ top: 57, minWidth: column.minWidth }}
                >
                  {column.label}
                  
                </StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .map((row) => {
                return (
                  <TableRow>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}