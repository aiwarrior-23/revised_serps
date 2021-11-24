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

export default function Marks() {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const presentButtonTextStyle = {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: "18px",
        lineHeight: "27px",
        color: "#1C6A00",
        textTransform: "capitalize",
        background:"rgba(163, 234, 138, 0.4)"
    }

    const absentButtonTextStyle = {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: "18px",
        lineHeight: "27px",
        color: "#B60011",
        textTransform: "capitalize",
        background: "#FF6D7A33"
    }

    const averageButtonTextStyle = {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: "18px",
        lineHeight: "27px",
        color: "#936E00",
        textTransform: "capitalize",
        background: "#FCD06D"
    }


    function createData(name, s1, s2, s3, s4, s5, s6, s7, statistics) {
        return { name, s1, s2, s3, s4, s5, s6, s7, statistics };
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


    const goodMarksFormat = <Typography style={presentButtonTextStyle}>25</Typography>
    const badMarksFormat = <Typography style={absentButtonTextStyle}>07</Typography>

    const rating = (r) => {
        if (r === "EXCELLENT") {
            return <Typography style={presentButtonTextStyle}>Excellent</Typography>
        }
        else if (r === "AVERAGE") {
            return <Typography style={averageButtonTextStyle}>Average</Typography>
        }
        else {
            return <Typography style={absentButtonTextStyle}>Bad</Typography>
        }
    }


    const rows = [
        createData('Himanshu', goodMarksFormat, goodMarksFormat, goodMarksFormat, goodMarksFormat, goodMarksFormat, goodMarksFormat, goodMarksFormat, rating("EXCELLENT")),
        createData('Sandip', goodMarksFormat, goodMarksFormat, badMarksFormat, goodMarksFormat, goodMarksFormat, goodMarksFormat, badMarksFormat, rating("AVERAGE")),
        createData('Divesh', goodMarksFormat, goodMarksFormat, goodMarksFormat, goodMarksFormat, goodMarksFormat, goodMarksFormat, goodMarksFormat, rating("EXCELLENT")),
        createData('Aravind', badMarksFormat, goodMarksFormat, badMarksFormat, goodMarksFormat, badMarksFormat, goodMarksFormat, goodMarksFormat, rating("POOR"))
    ];



    return (
        <Box style={{ display: 'flex', flexWrap: 'wrap', marginLeft: "3.5%" }}>
            <FormControl style={{ width: "50%", marginRight: "10%", marginBottom: "3%" }}>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
            <FormControl style={{ width: "30%" }}>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
            
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Name</TableCell>
                            <TableCell align="center">Subject 1</TableCell>
                            <TableCell align="center">Subject 2</TableCell>
                            <TableCell align="center">Subject 3</TableCell>
                            <TableCell align="center">Subject 4</TableCell>
                            <TableCell align="center">Subject 5</TableCell>
                            <TableCell align="center">Subject 6</TableCell>
                            <TableCell align="center">Subject 7</TableCell>
                            <TableCell align="center">Statistics</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row" align="center">
                                    {row.name}
                                </TableCell>
                                <TableCell align="center">{row.s1}</TableCell>
                                <TableCell align="center">{row.s2}</TableCell>
                                <TableCell align="center">{row.s3}</TableCell>
                                <TableCell align="center">{row.s4}</TableCell>
                                <TableCell align="center">{row.s5}</TableCell>
                                <TableCell align="center">{row.s6}</TableCell>
                                <TableCell align="center">{row.s7}</TableCell>
                                <TableCell align="center">{row.statistics}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}
