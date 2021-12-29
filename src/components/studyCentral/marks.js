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
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import axios from 'axios';


export default function Marks() {
    const [class_, setClass] = React.useState('');
    const [eType, setEType] = React.useState('');
    const [sub, setSubjects] = React.useState();

    const handleChangeClass = (event) => {
        setClass(event.target.value);
    };

    const handleChangeEType = (event) => {
        setEType(event.target.value);
    };

    const presentButtonTextStyle = {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: "18px",
        lineHeight: "27px",
        color: "#1C6A00",
        textTransform: "capitalize",
        background: "rgba(163, 234, 138, 0.4)"
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


    function createData(name, marks, statistics) {
        return { name, marks, statistics };
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

    const [rowsF, setRows] = React.useState([createData('Himanshu', [[24, 24, 24, 24, 24, 24]], rating("EXCELLENT"))]);
    const dummyData = {
        "info": {
            "students": ["1gg9yiroxk", "8amen5ug7r", "h8i7ud1hpc", "nxwicw4x4y", "oc1oykm7n5", "og1fge3zf6", "suekadqdpw", "u4tntpsem4", "w1uane42ne", "zftec1grup"],
            "subjects": ["maths", "science", "social", "telugu", "hindi", "sanskrit"]
        },
        "marks": {
            "1gg9yiroxk": [45, 44, 2, 39, 22, 29],
            "8amen5ug7r": [45, 44, 2, 39, 22, 29],
            "h8i7ud1hpc": [45, 44, 2, 39, 22, 29],
            "nxwicw4x4y": [45, 44, 2, 39, 22, 29],
            "oc1oykm7n5": [45, 44, 2, 39, 22, 29],
            "og1fge3zf6": [45, 44, 2, 39, 22, 29],
            "suekadqdpw": [45, 44, 2, 39, 22, 29],
            "u4tntpsem4": [45, 44, 2, 39, 22, 29],
            "w1uane42ne": [45, 44, 2, 39, 22, 29],
            "zftec1grup": [45, 44, 2, 39, 22, 66]
        },
        "message": "Data Retrieved"
    }

    function getMarks(e) {
        const data = JSON.stringify({
            "class": "1a",
            "exam_type": "internally"
        });

        var config = {
            method: 'POST',
            url: 'http://127.0.0.1:5000/marksfilter',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios(config)
            .then(response => {
                const subjects = [];
                const students = [];
                const rows = []
                var rs = dummyData.info //response.data["data"]
                var data = dummyData.marks
                Object.keys(rs).filter(key => key !== "students").map((key, index) => (
                    subjects.push(rs["subjects"])
                ))
                Object.keys(rs).filter(key => key !== "subjects").map((key, index) => (
                    students.push(rs["students"])
                ))

                const finalStudentsList = []
                const finalSubjectsList = []

                students.map(function (name, index) {
                    for (var i in name) {
                        const marks = []
                        Object.keys(data).filter(key => key === name[i]).map((key, index) => (
                            marks.push(data[key])
                        ))

                        rows.push(createData(name[i], marks, rating("EXCELLENT")))
                    }

                })
                setRows(rows)
                subjects.map(function (name, index) {
                    for (var i in name) {
                        finalSubjectsList.push(<TableCell align="center">{name[i]}</TableCell>)
                    }
                })
                setSubjects(finalSubjectsList)





            })
    }



    return (
        <Box style={{ display: 'flex', flexWrap: 'wrap', marginLeft: "3.5%" }}>
            <FormControl style={{ width: "50%", marginRight: "10%", marginBottom: "3%" }}>
                <InputLabel id="demo-simple-select-label">Class</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={class_}
                    label="Class"
                    onChange={handleChangeClass}
                >
                    <MenuItem value={10}>1A</MenuItem>
                    <MenuItem value={20}>2A</MenuItem>
                    <MenuItem value={30}>3A</MenuItem>
                </Select>
            </FormControl>
            <FormControl style={{ width: "30%" }}>
                <InputLabel id="demo-simple-select-label">Exam Type</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={eType}
                    label="Exam Type"
                    onChange={handleChangeEType}
                >
                    <MenuItem value={10}>Internal</MenuItem>
                    <MenuItem value={20}>External</MenuItem>
                </Select>
            </FormControl>
            <Button variant="outlined" style={{ height: "55px", width: "30%", marginBottom: "3%" }} onClick={getMarks}>Submit</Button>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Name</TableCell>
                            {sub}
                            <TableCell align="center">Statistics</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rowsF.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                {row.name}
                                {row["marks"].map((mark) => (
                                            mark.map((m) => (
                                        <TableCell align="center">{m}</TableCell>
                                    ))
                                ))}
                                <TableCell align="center">{row.statistics}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}
