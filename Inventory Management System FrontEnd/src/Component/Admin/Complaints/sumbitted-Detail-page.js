import {Box, Button, Divider, FormControl, InputLabel, MenuItem, Paper, Select, Typography } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import "../../createOrganization.css";
import PhotoIcon from '@mui/icons-material/Photo';
import React from "react";
import { attchmentPhoto, photoIcon } from "../Employee/emplyeeStyle";
import { addButton,backIconStyle, boxStyle, descBox, dividerStyle, innerBox, mainBox, statusButton } from "../Inventory/inventoryStyle";
import { Link } from "react-router-dom";
import { paperStyle } from "./complaintStyle";
// import { Link } from "react-router-dom";



const SubmittedDetailPage = () => {
    return (
        <Paper sx={paperStyle}>
            <Box sx={boxStyle}>
                <ArrowBackIcon fontSize="large" sx={backIconStyle} />
                <h2><span>Back</span>Complaint-ID : 14532</h2>
                <Button variant="contained" color="primary" size='small' sx={addButton}>
                <a href="add" className='add' >Pendings</a>
                </Button>
                <Typography sx={{marginLeft : '1rem' , marginRight :'21rem'}} >Submission Date : 19/04/2023</Typography>
            </Box>


            <Box sx={mainBox}>
                <FormControl className="form">

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
                               You can get by without it if you don’t want to

                         <Divider sx={dividerStyle} />       
                        <Box>
                            <div>Attachment</div>
                            <PhotoIcon fontSize="small" sx={attchmentPhoto}/>
                            <PhotoIcon fontSize="small" sx={attchmentPhoto}/>
                            <PhotoIcon fontSize="small" sx={attchmentPhoto}/>
                            <PhotoIcon fontSize="small" sx={attchmentPhoto}/>
                            <PhotoIcon fontSize="small" sx={attchmentPhoto}/>

                        </Box>     
                    </Box>   
                    </Box>
             
                </FormControl>
            </Box>
        </Paper>

    );
}

export default SubmittedDetailPage;