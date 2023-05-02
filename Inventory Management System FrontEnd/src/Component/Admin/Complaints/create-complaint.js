import {Box, Button, Divider, FormControl, InputLabel, MenuItem, Paper, Select, TextField, Typography } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import "../../createOrganization.css";
import PhotoIcon from '@mui/icons-material/Photo';
import React from "react";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import {uploadIcon } from "../Employee/emplyeeStyle";
import { backIconStyle, boxStyle,  dividerStyle, innerBox, mainBox } from "../Inventory/inventoryStyle";
import { Link } from "react-router-dom";
import { inner, paperStyle, photoIcon, statusButton, uploadButton } from "./complaintStyle";
// import { Link } from "react-router-dom";



const CreateComplaint = () => {
    return (
        <Paper sx={paperStyle}>
            <Box sx={boxStyle}>
                <ArrowBackIcon fontSize="large" sx={backIconStyle} />
                <h2><span>Back</span></h2>
                <Button variant="contained" color="success" size='small' sx={statusButton}>
                <Link to="/complaints" className='add' >Submit Complaint</Link>
                </Button>
            </Box>


            <Box sx={mainBox}>
                <FormControl className="form">
                    {/* <Divider sx={dividerStyle} /> */}

                    <Box sx={innerBox}>
                        <label htmlFor='Name Of Organization>'>Description</label>
                        <Box sx={innerBox}>
                        <TextField minRows={5} multiline className="abc" type="text"  variant='outlined'size="small" placeholder="Description" />
                        </Box>
                    </Box>
                    <Divider sx={dividerStyle} />
                    
                    <Box sx={innerBox}>
                    <label htmlFor='Name Of Organization>'>Image</label>
                    <Box sx={inner}>
                    <PhotoIcon fontSize="large" sx={{display:'flex',marginTop:'-2.5rem', height:'9rem' , width:'6rem'}}/>
                    <Button variant="contained" color="primary" size='small' sx={uploadButton}
                    startIcon={<AddPhotoAlternateIcon sx={uploadIcon}/>}>
                        upload
                    </Button>
                    </Box>
                    </Box>

            
                    
                </FormControl>
            </Box>
        </Paper>

    );
}

export default CreateComplaint;