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
  { id: 'image', label: 'Image', minWidth: 100 },
  {id: 'name', label: 'Name',minWidth: 100,align: 'center',color: 'brown'},
  {id: 'organization',label: 'Organization',minWidth: 100,align: 'center',},
  {id: 'Email',label: 'Email', minWidth: 100,align: 'center',},
  {id: 'ContactNumber',label: 'Contact Number',minWidth: 170,align: 'center',},
  {id: 'Action',label: 'Action',minWidth: 100,align: 'center',},
];

function createData(id , image , name, organization, Email, ContactNumber ,Action) {
  return { id , image, name, organization, Email , ContactNumber, Action : renderActionLink(id)};
}

const rows = [
  createData('1', 'Null', 'Gigalabs', 'Timmys' , 'gigalabs1@gmail.com' , '03067359032' ,'View'),
  createData('2', 'Null', 'Gigalabs', 'KFC' , 'gigalabs2@gmail.com' , '03062349032' ,'View'),
  createData('3', 'Null', 'Gigalabs', 'FRI Chicks' , 'gigalabs3@gmail.com' , '03032349032' ,'View'),
  createData('4', 'Null', 'Gigalabs', 'Gigalabs' , 'gigalabs4@gmail.com' , '03018979032' ,'View'),
  createData('5', 'Null', 'Gigalabs', 'Codetech' , 'gigalabs5@gmail.com' , '03037869032' ,'View'),
  createData('6', 'Null', 'Gigalabs', 'Prismatic' , 'gigalabs6@gmail.com' , '0306739032' ,'View'),
  createData('7', 'Null', 'Gigalabs', 'Nisum' , 'gigalabs7@gmail.com' , '03089359232' ,'View'),
  createData('8', 'Null', 'Gigalabs', 'i2c' , 'gigalabs8@gmail.com' , '03327139132' ,'View'),
  createData('9', 'Null', 'Gigalabs', 'Next Bridge' , 'gigalabs9@gmail.com' , '03371259892' ,'View'),
  createData('10', 'Null', 'Gigalabs', 'System Limited' , 'gigalab10s@gmail.com' , '03067212032' ,'View'),
  createData('11', 'Null', 'Gigalabs', 'Netsol' , 'gigalabs11@gmail.com' , '03067317632' ,'View'),

];

export default function Admins() {
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
                <Typography variant='h5' sx={{marginRight : '10px' ,fontWeight : 'bold'}}>Admins</Typography>
                <Paper
                    component="form"
                    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 270  , marginRight : '10px'}}
                 >
     
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search Admin"
                    inputProps={{ 'aria-label': 'search' }}
                />
                <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                    <SearchIcon />
                </IconButton>
                </Paper>

                <Paper sx={{ width: 280 }}>
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
             
              <Button variant="contained" color="success" size='medium' sx={{marginLeft : '29.5rem', width :'50px' , height:'37px'}} startIcon={<AddIcon sx={{color:'#fff' , marginTop:'18px',marginLeft:'5px' , marginRight:'-5px'}}/>}>
             
                 <a className='add' href="/createAdmin">Add</a>
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