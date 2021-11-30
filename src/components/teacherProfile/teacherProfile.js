import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Avatar, Button } from '@material-ui/core';
import { Paper } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

export default function TeacherProfile() {

    function createData(field1, field2) {
        return { field1, field2 };
    }

    const rows = [
        createData('Name', "Himanshu Singh"),
        createData('Email ID', "himanshu@pohulabs.com"),
        createData('Classes', "A"),
        createData('Role', "Subject Incharge"),
        createData('Subjects', "Maths, Physics"),

    ];


    return (
        <Box>
            <Typography component="div" gutterBottom align="left" ml="8%" mt="2%">
                Teacher Profile
            </Typography>
            <Box ml="5%" width="986px" border="2px solid #CCCACA" borderRadius="45px">
                <Box display="flex" flexWrap="wrap" mt="2%">
                    <Typography mr="70%" ml="3%" mt="0.5%">Personal Information</Typography>
                    <Button variant="outlined"><Typography>Edit</Typography></Button>
                </Box>
                <Box ml="45%" mb="3%">
                    <Avatar style={{ height: '100px', width: '100px' }}></Avatar>
                </Box>
               
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.field1}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row" ml="2%">
                                        {row.field1}
                                    </TableCell>
                                    <TableCell align="left" ml="2%">{row.field2}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Box>
    );
}
