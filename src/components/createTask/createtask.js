import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AssignmentTurnedInOutlinedIcon from '@material-ui/icons/AssignmentTurnedInOutlined';
import { Edit } from '@mui/icons-material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import PersonIcon from '@material-ui/icons/Person';
import { Paper } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import CreateNewFolderIcon from '@material-ui/icons/CreateNewFolder';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';

export default function CreateTask(props) {
    
const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));
    const handleChange = (event) => {
        setStafftype(event.target.value);
    };
    const handlePriority = (event) => {
        setPriority(event.target.value);
    };
    const handleAssign = (event) => {
        setAssign(event.target.value);
    };
const[taskDesc,setTaskDesc]=useState('')
    const [stafftype, setStafftype] =useState('');
    const [priority, setPriority] = useState('');
    const[assign,setAssign] =useState('')

    return (
        <Item style={{ minHeight: "125%", marginTop: "1%", borderRadius: "45px" }}>
            <Stack direction="row" sx={{ margin: '2%' }}>
                <CreateNewFolderIcon color="primary" fontSize="medium" />
                <Typography sx={{ marginLeft: '8px', color: '#1976D2', fontSize: '18px' }}>Create Task</Typography>
            </Stack>
            <Stack direction="row" sx={{ margin: '3%' }}>
                <DescriptionOutlinedIcon />
                <Typography sx={{ marginLeft: '8px' }}>Task Description</Typography>
            </Stack>
            <TextareaAutosize
                aria-label="minimum height"
                minRows={4}
value={taskDesc}
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
                        value={priority}
                        label="Priority"
                        onChange={handlePriority}
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
                    value={stafftype}
                    label="Age"
                    onChange={handleChange}
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
                        value={assign}
                        label="Age"
                        onChange={handleAssign}
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
        </Item>
    )











}

