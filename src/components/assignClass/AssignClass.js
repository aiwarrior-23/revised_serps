import { styled } from '@mui/material/styles';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import PersonIcon from '@material-ui/icons/Person';
import Box from '@mui/material/Box';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import { Paper } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useState } from 'react';

export default function AssignClass(props) {

    const [teacher, setTeacher] = useState('');
    const [subject, setSubject] = useState('');
    const handleTeacher = (event) => {
        setTeacher(event.target.value);
    };

    const handleSubject = (event) => {
        setSubject(event.target.value);
    }
    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    return (
        <Item style={{ minHeight: "125%", marginTop: "1%", borderRadius: "45px" }}>

            <Stack direction="row" sx={{ margin: '2%' }}>
                <PersonAddIcon color="primary" fontSize="medium" />
                <Typography sx={{ marginLeft: '8px', color: '#1976D2', fontSize: '18px' }}>Assign Class</Typography>
            </Stack>

            <Stack direction="row" sx={{ margin: '3%' }}>
                <CheckCircleOutlineIcon />
                <Typography sx={{ marginLeft: '8px' }}>Select Teacher</Typography>
            </Stack>
            <Box sx={{
                width: 800,
                maxWidth: '100%',
                marginLeft: 5
            }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Select Teacher</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={teacher}

                        onChange={handleTeacher}
                    >
                        <MenuItem value={'Swathi'}>Swathi</MenuItem>
                        <MenuItem value={'Sandeep'}>Sandeep</MenuItem>
                        <MenuItem value={'Himanshu'}>Himanshu</MenuItem>
                    </Select>
                </FormControl>
            </Box>

            <Stack direction="row" sx={{ margin: '3%' }}>
                <CheckCircleOutlineIcon />
                <Typography sx={{ marginLeft: '8px' }}>Assign Class</Typography>
            </Stack>
            <Box sx={{
                width: 800,
                maxWidth: '100%',
                marginLeft: 5
            }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">AssignClass</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={teacher}

                        onChange={handleTeacher}
                    >
                        <MenuItem value={'Swathi'}>Swathi</MenuItem>
                        <MenuItem value={'Sandeep'}>Sandeep</MenuItem>
                        <MenuItem value={'Himanshu'}>Himanshu</MenuItem>
                    </Select>
                </FormControl>
            </Box>

            <Stack direction="row" sx={{ margin: '3%' }}>
                <CheckCircleOutlineIcon />
                <Typography sx={{ marginLeft: '8px' }}>Assign Section</Typography>
            </Stack>

            <Box sx={{
                width: 800,
                maxWidth: '100%',
                marginLeft: 5
            }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Assign Section</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={teacher}

                        onChange={handleTeacher}
                    >
                        <MenuItem value={'Swathi'}>Swathi</MenuItem>
                        <MenuItem value={'Sandeep'}>Sandeep</MenuItem>
                        <MenuItem value={'Himanshu'}>Himanshu</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <Stack direction="row" sx={{ margin: '3%' }}>
                <PersonIcon />
                <Typography sx={{ marginLeft: '8px' }}>Select One (or) more Subjects</Typography>
            </Stack>

            <Box sx={{
                width: 800,
                maxWidth: '100%',
                marginLeft: 5
            }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Select subjects</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={subject}

                        onChange={handleSubject}
                    >
                        <MenuItem value={'Maths'}>Maths</MenuItem>
                        <MenuItem value={'Science'}>Science</MenuItem>
                        <MenuItem value={'Social'}>Social</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <Box sx={{ marginTop: '2%' }}>
                <Button variant="contained" color="primary">
                    SUBMIT
                </Button>
            </Box>

        </Item>
    );









}