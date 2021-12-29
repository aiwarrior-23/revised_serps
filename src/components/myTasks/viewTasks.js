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
    console.log("WE got data:" + JSON.stringify(props.Contentdata));



    return (

        <div>
            <Indicator state={data["task status"]}></Indicator>
            <Box>
                <CreateNewFolderIcon color="primary" fontSize="medium" style={{ float: "left", fontWeight: "600" }} />
                <Typography style={{ float: "left", fontWeight: "600" }}>Update Task-{data["task title"]}</Typography><br></br>
            </Box>

            <Box>
                <Stack direction="row" sx={{ margin: '3%' }}>
                    <DescriptionOutlinedIcon />
                    <Typography sx={{ marginLeft: '8px' }}>Task Description</Typography>
                </Stack>
                <Stack direction="row" sx={{ margin: '3%' }}>
                    <TextareaAutosize
                        aria-label="minimum height"
                        minRows={4}
                        value={data["task description"]}
                        style={{ width: 800, maxWidth: '100%', marginTop: -20 }}
                    />
                </Stack>
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
                        <TextField
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={data["task priority"]}
                            label="Priority"

                        >
                        </TextField>
                    </FormControl>
                </Box>
                <Stack direction="row" sx={{ margin: '2%' }}>
                    <CalendarTodayIcon />
                    <Typography sx={{ marginLeft: '8px' }}>Deadline</Typography>
                </Stack>
                <Box
                    sx={{
                        width: 800,
                        maxWidth: '100%',
                        marginLeft: 5
                    }}
                >
                    <TextField fullWidth label="dd/mm/yyyy" value={data["task deadline"]} />
                </Box>

                <Stack direction="row" sx={{ margin: '2%' }}>
                    <PersonIcon />
                    <Typography sx={{ marginLeft: '8px' }}>Staff Type</Typography>
                </Stack>
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

                        <TextField
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={data["task assigned to"]}


                        />
                    </FormControl>
                </Box>
                <Box sx={{ marginTop: '2%' }}>
                    <Button variant="contained" color="primary">
                        {data["task status"]}
                    </Button>
                </Box>
            </Box>
        </div>
    )
}
