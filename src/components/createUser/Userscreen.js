import { styled } from '@mui/material/styles';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import PhoneEnabledIcon from '@material-ui/icons/PhoneEnabled';
import PersonPinCircleIcon from '@material-ui/icons/PersonPinCircle';
import SchoolIcon from '@material-ui/icons/School';
import {  EmailOutlined } from '@mui/icons-material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import PersonIcon from '@material-ui/icons/Person';
import { Paper } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useState } from 'react';

export default function CreateUser(props) {

    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));
    const handleUser = (event) => {
    setUsertype(event.target.value);
    };
    
    const handleSchool = (event) => {
        setSchool(event.target.value);
    };

    const [Usertype, setUsertype] = useState('');
    const[school,setSchool] =useState('')
    return (
        <Item style={{ minHeight: "125%", marginTop: "1%", borderRadius: "45px" }}>
            <Stack direction="row" sx={{ margin: '2%' }}>
                <PersonAddIcon color="primary" fontSize="medium" />
                <Typography sx={{ marginLeft: '8px', color: '#1976D2', fontSize: '18px' }}>Create User</Typography>
            </Stack>
            <Stack direction="row" sx={{ margin: '2%' }}>
                <EmailOutlined />
                <Typography sx={{ marginLeft: '8px' }}>Email ID</Typography>
            </Stack>
            <Box
                sx={{
                    width: 800,
                    maxWidth: '100%',
                    marginLeft: 5
                }}
            >
                <TextField fullWidth  />
            </Box>
            <Stack direction="row" sx={{ marginLeft: '3%', marginTop: '2%' }}>
                <Typography >First Name</Typography>
                <Typography sx={{ marginLeft: '370px' }}>Last Name</Typography>
            </Stack>

            <Stack direction="row" sx={{ marginTop: '2%' }}>

                <Box
                    sx={{
                        width: 400,
                        maxWidth: '100%',
                        marginLeft: 5
                    }}
                >
                    <TextField fullWidth  />
                </Box>

                <Box
                    sx={{
                        width: 400,
                        maxWidth: '100%',
                        marginLeft: 5
                    }}
                >
                    <TextField fullWidth  />
                </Box>

            </Stack>
            <Stack direction="row" sx={{ margin: '2%' }}>
                <VpnKeyIcon />
                <Typography sx={{ marginLeft: '8px' }}>Password</Typography>
            </Stack>
            <Box
                sx={{
                    width: 800,
                    maxWidth: '100%',
                    marginLeft: 5
                }}
            >
                <TextField fullWidth label="Password" />
            </Box>
            <Stack direction="row" sx={{ margin: '2%' }}>
                <PersonPinCircleIcon />
                <Typography sx={{ marginLeft: '8px' }}>Address</Typography>
            </Stack>
            <Box
                sx={{
                    width: 800,
                    maxWidth: '100%',
                    marginLeft: 5
                }}
            >
                <TextField fullWidth label="Address" />
            </Box>
            <Stack direction="row" sx={{ margin: '2%' }}>
                <PhoneEnabledIcon />
                <Typography sx={{ marginLeft: '8px' }}>Phone Number</Typography>
            </Stack>
            <Box
                sx={{
                    width: 800,
                    maxWidth: '100%',
                    marginLeft: 5
                }}
            >
                <TextField fullWidth label="Phone Number" />
            </Box>
            <Stack direction="row" sx={{ margin: '2%' }}>
                <PersonIcon />
                <Typography sx={{ marginLeft: '8px' }}>User Type</Typography>
            </Stack>
            <Box sx={{
                width: 800,
                maxWidth: '100%',
                marginLeft: 5
            }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">User Type</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={Usertype}
                        label="UserType"
                        onChange={handleUser}
                    >
                        <MenuItem value={"Teacher"}>Teacher</MenuItem>
                        <MenuItem value={"Parent"}>Parent</MenuItem>
                        <MenuItem value={"Management"}>Management</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <Stack direction="row" sx={{ margin: '2%' }}>
                <SchoolIcon />
                <Typography sx={{ marginLeft: '8px' }}>School</Typography>
            </Stack>
            <Box sx={{
                width: 800,
                maxWidth: '100%',
                marginLeft: 5
            }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">School</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={school}
                        label="School"
                        onChange={handleSchool}
                    >
                        <MenuItem value={"Srishti World School"}>Srishti World School</MenuItem>
                        <MenuItem value={"Chaitanya Public School"}>Chaitanya Public School</MenuItem>
                       
                    </Select>
                </FormControl>
            </Box>
            

            <Box sx={{ marginTop: '2%' }}>
                <Button variant="contained" color="primary">
                    SUBMIT
                </Button>
            </Box>



        </Item>
    )



}