import { Avatar, Box, Button, Divider, FormControl, IconButton, Menu, MenuItem, Paper,Tooltip, Typography } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import "../../createOrganization.css";
import { backIconStyle, boxStyle, descBox, detailIcon, dividerStyle, innerBox, mainBox, paperStyle,} from "./inventoryStyle";
import Employee from '../../../assets/Employee.jpg'
import PhotoIcon from '@mui/icons-material/Photo';
import React from "react";
import { photoIcon } from "../Employee/emplyeeStyle";



const DetailInventory = () => {
    const settings = ['Edit', 'Delete'];


    const [anchorElUser, setAnchorElUser] = React.useState(null);


    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };


    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    return (
        <Paper sx={paperStyle}>
            <Box sx={boxStyle}>
                <ArrowBackIcon fontSize="large" sx={backIconStyle} />
                <h2><span>Back</span></h2>


                <Tooltip title="Open settings">
                    <Button variant="contained" size="small"  color="primary" onClick={handleOpenUserMenu} sx={detailIcon}>
                        <MoreVertIcon />
                    </Button>
                </Tooltip>
                <Menu
                    sx={{ mt: '45px' }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                >
                    {settings.map((setting) => (
                        <MenuItem key={setting} onClick={handleCloseUserMenu}>
                            <Typography textAlign="center">{setting}</Typography>
                        </MenuItem>
                    ))}
                </Menu>

            </Box>


            <Box sx={mainBox}>
                <FormControl className="form">
                    <Box sx={innerBox}>
                        <label htmlFor=''>Item Name</label>
                       
                            <div>MackBook Pro 13 15</div>
                            <div>serial number</div>
                            <div>#67659898</div>
                      
                    </Box>
                    <Divider sx={dividerStyle} />

                    <Box sx={innerBox}>
                        <label htmlFor='Name Of Organization>'>Description</label>
                      
                        <Box sx={descBox}> Great app. Business and academic apps like this are sometimes
                             harder to navigate on iPads or smart devices because you can’t see all 
                             the icons like you would on a laptop screen, and the layout is a little 
                             different, but it still does mostly everything you’d need for work or school.
                              There are certain things that you can’t do unless you pay and upgrade to premium, 
                              like getting unlimited text colors, but that’s pretty much what you get with every 
                              app these days. The app still lets you be cheap and get away with making word documents
                               without premium if you don’t want all the bells and whistles included, 
                               and it’s still functional, so I don’t personally mind not having premium. 
                               You can get by without it if you don’t want to</Box>
                             
                    </Box>
                    <Divider sx={dividerStyle} />
                    <Box sx={innerBox}>
                        <Box sx={{width:'26%'}}>
                        <label htmlFor='Name Of Organization>'>Category</label>
                        </Box>
                       <Box sx={{width:'74%'}}>Electroncs</Box>
                    </Box>
                    <Divider sx={dividerStyle} />
                    <Box sx={innerBox}>
                        <Box sx={{width:'26%'}}>
                        <label htmlFor='Name Of Organization>'>SubCategory</label>
                        </Box>
                       <Box sx={{width:'74%'}}>Mouse</Box>
                    </Box>
                    <Divider sx={dividerStyle} />
                    <Box sx={innerBox}>
                        <Box sx={{width:'26%'}}>
                        <label htmlFor='Name Of Organization>'>Date Of Purchase</label>
                        </Box>
                       <Box sx={{width:'74%'}}>12/03/2023</Box>
                    </Box>
                    <Divider sx={dividerStyle} />
                    <Box sx={innerBox}>
                        <Box sx={{width:'26%'}}>
                        <label htmlFor='Name Of Organization>'>Unit Price</label>
                        </Box>
                       <Box sx={{width:'74%'}}>3,000</Box>
                    </Box>

                    <Divider sx={dividerStyle} />
                    <Box sx={innerBox}>
                        <Box sx={{width:'26%'}}>
                        <label htmlFor='Name Of Organization>'>Current Price</label>
                        </Box>
                       <Box sx={{width:'74%'}}>5,000</Box>
                    </Box>
                    <Divider sx={dividerStyle} />
                    <Box sx={innerBox}>
                        <label htmlFor=''>Depreciated Price</label>
                       
                            <div>5000</div>
                            <label htmlFor=''>Percentage Depreciation</label>
                            <div>#30%</div>
                      
                    </Box>
                    <Divider sx={dividerStyle} />
                    <h3>Vendor</h3>
                    <Divider sx={dividerStyle} />
                    <Box sx={innerBox}>
                        <Box sx={{width:'26%'}}>
                        <label htmlFor='Name Of Organization>'>Name</label>
                        </Box>
                       <Box sx={{width:'74%'}}>Muaz Azhar</Box>
                    </Box>
                    <Divider sx={dividerStyle} />
                    <Box sx={innerBox}>
                        <Box sx={{width:'26%'}}>
                        <label htmlFor='Name Of Organization>'>Contact Number</label>
                        </Box>
                       <Box sx={{width:'74%'}}>+92 306 7359032</Box>
                    </Box>
                  
                    <Divider sx={dividerStyle} />
                    <h4>Assigned To</h4>
                    <Divider sx={dividerStyle} />
                    
                    <Box sx={{display :'flex' , alignItems:'center'}}>
                    <PhotoIcon fontSize="small" sx={photoIcon}/>
                    <Box sx={{display :'flex' , flexDirection : "column" , width : '74%'}}>
                    <h2 >Muaz</h2>
                    <span>Department Development</span>
                    <span>raoaamir9032@gmail.com</span>
                    <span>+923067359032</span>
                    </Box>
                    </Box>
            
                    <Divider sx={dividerStyle} />
                </FormControl>
            </Box>
        </Paper>

    );
}

export default DetailInventory;