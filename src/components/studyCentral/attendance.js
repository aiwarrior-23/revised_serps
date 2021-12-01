import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import AddchartIcon from '@mui/icons-material/Addchart';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { useState } from 'react';


export default function Attendance() {
    const [section, setSection] = React.useState('');
    const [class2, setClass] = React.useState('');
    const [date, setDate] = React.useState('');
    const [value, setValue] = React.useState(new Date('2021-08-18T21:11:54'));
    const [students, setStudents] = useState([])


    const handleSection = (event) => {
        setSection(event.target.value);
    };

    const handleClass = (event) => {
        setClass(event.target.value);
    };

    const handleChangeDate = (newValue) => {
        setValue(newValue);
    };

    const presentButtonTextStyle = {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: "18px",
        lineHeight: "27px",
        color: "#1C6A00",
        textTransform: "capitalize"
    }

    const presentButtonTextStyleDisabled = {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: "18px",
        lineHeight: "27px",
        color: "#A1A1A1",
        textTransform: "capitalize"
    }


    const absentButtonTextStyle = {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: "18px",
        lineHeight: "27px",
        color: "#B60011",
        textTransform: "capitalize"
    }

    const absentButtonTextStyleDisabled = {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: "18px",
        lineHeight: "27px",
        color: "#A1A1A1",
        textTransform: "capitalize"
    }


    function createData(name, status, statistics) {
        return { name, status, statistics };
    }

    function createButtons(status) {
        if (status === "present") {
            return <Box style={{ display: 'flex', flexWrap: 'wrap', marginLeft: "25%" }}>
                <Button style={{ marginRight: "2%", background: "rgba(163, 234, 138, 0.4)", width: "175px" }}><CheckIcon style={{ color: "#1C6A00" }} /><Typography style={presentButtonTextStyle}>Present</Typography></Button>
                <Button style={{ background: "#E0E0E0", width: "175px" }}><CloseIcon style={{ color: "#A1A1A1" }} /><Typography style={absentButtonTextStyleDisabled}>Absent</Typography></Button>
            </Box>
        }
        else {
                return <Box style={{ display: 'flex', flexWrap: 'wrap', marginLeft: "25%" }}>
                    <Button style={{ marginRight: "2%", background: "#E0E0E0", width: "175px" }}><CheckIcon style={{ color: "#A1A1A1" }} /><Typography style={presentButtonTextStyleDisabled}>Present</Typography></Button>
                    <Button style={{ background: "rgba(255, 109, 122, 0.2)", width: "175px" }}><CloseIcon style={{ color: "#B60011" }} /><Typography style={absentButtonTextStyle}>Absent</Typography></Button>
                </Box>
            }
        }

    const buttonGroup = <Box style={{ display: 'flex', flexWrap: 'wrap', marginLeft: "25%" }}>
        <Button style={{ marginRight: "2%", background: "rgba(163, 234, 138, 0.4)", width: "175px" }}><CheckIcon style={{ color: "#1C6A00" }} /><Typography style={presentButtonTextStyle}>Present</Typography></Button>
        <Button style={{ background: "rgba(255, 109, 122, 0.2)", width: "175px" }}><CloseIcon style={{ color: "#B60011" }} /><Typography style={absentButtonTextStyle}>Absent</Typography></Button>
    </Box>

    const previousDays = <Box><Box style={{ display: 'flex', flexWrap: 'wrap' }}>
        <Typography style={{ marginRight: "4%" }}>05</Typography>
        <Typography style={{ marginRight: "4%" }}>06</Typography>
        <Typography style={{ marginRight: "4%" }}>07</Typography>
        <Typography style={{ marginRight: "4%" }}>08</Typography>
        <Typography style={{ marginRight: "4%" }}>09</Typography>
        <Typography>10</Typography>
    </Box>
        <Box style={{ display: 'flex', flexWrap: 'wrap' }}>
            <CheckIcon style={{ color: "#1C6A00", marginRight: "4%", fontSize: "18px" }} />
            <CheckIcon style={{ color: "#1C6A00", marginRight: "4%", fontSize: "18px" }} />
            <CheckIcon style={{ color: "#1C6A00", marginRight: "4%", fontSize: "18px" }} />
            <CheckIcon style={{ color: "#1C6A00", marginRight: "4%", fontSize: "18px" }} />
            <CloseIcon style={{ color: "#B60011", marginRight: "4%", fontSize: "18px" }} />
            <CheckIcon style={{ color: "#1C6A00", marginRight: "4%", fontSize: "18px" }} />
        </Box>
    </Box>


    const statsIcon = <AddchartIcon style={{ color: "#626262" }} />


    const getAttendance = (e) => {
        const class1 = class2+section
        const date=value.getDate()
        const month=value.getMonth()+1
        const year=value.getFullYear()
        const completeDate = date+"-"+month+"-"+year
        const data = JSON.stringify({
            "data": {
                "cc": class1,
                "date": completeDate,
                "sub": "maths"
            }
        });

        var config = {
            method: 'POST',
            url: 'http://127.0.0.1:5000/filter2',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios(config)
            .then(response => {
                const rows = [];
                var rs = response.data["data"]
                console.log(response.data)
                Object.keys(rs).map((key, index) => (
                    rows.push(createData(key, createButtons(rs[key]), previousDays))
                ))
                setStudents(rows)
                console.log(rows)
            })
    }



    return (
        <Box style={{ display: 'flex', flexWrap: 'wrap', marginLeft: "3.5%" }}>
            <FormControl style={{ width: "50%", marginRight: "10%", marginBottom: "3%" }}>
                <InputLabel id="demo-simple-select-label">Select Class</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={class2}
                    label="Select Category"
                    onChange={handleClass}
                >
                    <MenuItem value={"lkg"}>L.K.G</MenuItem>
                    <MenuItem value={"ukg"}>U.K.G</MenuItem>
                    <MenuItem value={"1"}>Class 1</MenuItem>
                    <MenuItem value={"2"}>Class 2</MenuItem>
                    <MenuItem value={"3"}>Class 3</MenuItem>
                    <MenuItem value={"4"}>Class 4</MenuItem>
                    <MenuItem value={"5"}>Class 5</MenuItem>
                    <MenuItem value={"6"}>Class 6</MenuItem>
                    <MenuItem value={"7"}>Class 7</MenuItem>
                    <MenuItem value={"8"}>Class 8</MenuItem>
                    <MenuItem value={"9"}>Class 9</MenuItem>
                    <MenuItem value={"10"}>Class 10</MenuItem>
                </Select>
            </FormControl>
            <FormControl style={{ width: "30%" }}>
                <InputLabel id="demo-simple-select-label">Select Section</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={section}
                    label="Select Frequency"
                    onChange={handleSection}
                >
                    <MenuItem value={"a"}>A</MenuItem>
                    <MenuItem value={"b"}>B</MenuItem>
                    <MenuItem value={"c"}>C</MenuItem>
                </Select>
            </FormControl>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Stack spacing={3}>
                    <DesktopDatePicker
                        label="Select Date"
                        inputFormat="dd-MM-yyyy"
                        value={value}
                        onChange={handleChangeDate}
                        renderInput={(params) => <TextField style={{ marginBottom: "12%", width: "199%" }} {...params} />}
                    />
                </Stack>
            </LocalizationProvider>

            <Button variant="outlined" style={{marginLeft:"35%", height:"55px", width: "30%"}} onClick={getAttendance}>Submit</Button>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Name</TableCell>
                            <TableCell align="center">Status</TableCell>
                            <TableCell align="center">Statistics</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {students.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row" align="center">
                                    {row.name}
                                </TableCell>
                                <TableCell align="center">{row.status}</TableCell>
                                <TableCell align="center">{row.statistics}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}
