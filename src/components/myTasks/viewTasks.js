import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import Indicator from "../component/indicator/indicator";
import CreateNewFolderIcon from '@material-ui/icons/CreateNewFolder';
import Stack from '@mui/material/Stack';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { Edit } from '@mui/icons-material';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import PersonIcon from '@material-ui/icons/Person';
import Button from '@mui/material/Button';
import AssignmentTurnedInOutlinedIcon from '@material-ui/icons/AssignmentTurnedInOutlined';
export default function ViewTasksComponent(props) {
    const data = props.Contentdata;
    console.log("WE got data:" + data["task status"]);
    
    
   
    return (
        
        <div>
            <Box>
            <CreateNewFolderIcon color="primary" fontSize="medium" style={{float:"left",fontWeight:"600"}}/>
                <Typography style={{float:"left",fontWeight:"600"}}>Update Task</Typography><br></br>
            </Box>
            <Indicator state={data["task status"]}></Indicator>
            <Box>
            <Stack direction="row" sx={{ margin: '3%' }}>
                <DescriptionOutlinedIcon />
                <Typography sx={{ marginLeft: '8px' }}>Task Description</Typography>
            </Stack>
            <TextareaAutosize
                aria-label="minimum height"
                minRows={4}
                
                style={{ width: 800, maxWidth: '100%', marginLeft:-300,marginTop:-20}}
            />
            <Stack direction="row" sx={{ margin: '2%' }}>
                <Edit />
                <Typography sx={{ marginLeft: '8px' }}>Task Priority</Typography>
            </Stack>
            <Box sx={{
                width: 800,
                maxWidth: '100%',
                marginLeft: 5
            }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Priority</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        
                        label="Priority"
                        
                    >
                        <MenuItem value={'High'}>High</MenuItem>
                        <MenuItem value={'Medium'}>Medium</MenuItem>
                        <MenuItem value={'Low'}>Low</MenuItem>
                    </Select>
                    </FormControl>
                    </Box>
            <Stack direction="row" sx={{ margin: '2%' }}>
                <CalendarTodayIcon/>
                <Typography sx={{ marginLeft: '8px' }}>Deadline</Typography>
            </Stack>
            <Box
                sx={{
                    width: 800,
                    maxWidth: '100%',
                    marginLeft: 5
                }}
            >
                <TextField fullWidth label="dd/mm/yyyy" />
            </Box>

            <Stack direction="row" sx={{ margin: '2%' }}>
                <PersonIcon/>
                <Typography sx={{ marginLeft: '8px' }}>Staff Type</Typography>
            </Stack>
            <Box sx={{
                width: 800,
                maxWidth: '100%',
                marginLeft: 5 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Staff Type</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    
                    label="Age"
                    
                >
                    <MenuItem value={"Teaching"}>Teaching</MenuItem>
                    <MenuItem value={"Non-Teaching"}>Non-teaching</MenuItem>
                    <MenuItem value={"Management"}>Management</MenuItem>
                </Select>
            </FormControl>
            </Box>
            <Stack direction="row" sx={{ margin: '2%' }}>
                <AssignmentTurnedInOutlinedIcon />
                <Typography sx={{ marginLeft: '8px' }}>Assigned to</Typography>
            </Stack>

            <Box sx={{
                width: 800,
                maxWidth: '100%',
                marginLeft: 5
            }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Assigned to</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                       
                        label="Age"
                        
                    >
                        <MenuItem value={"Swathi"}>Swathi</MenuItem>
                        <MenuItem value={"Sandeep"}>Sandeep</MenuItem>
                        <MenuItem value={"Himanshu"}>Himanshu</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <Box sx={{marginTop:'2%'}}>
            <Button variant="contained" color="primary">
                SUBMIT
            </Button>
            </Box>
            </Box>
        </div>
    )
}
