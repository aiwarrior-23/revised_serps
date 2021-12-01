import * as React from 'react';
import Box from '@mui/material/Box';
import { Tabs } from '@material-ui/core';
import { Tab } from '@material-ui/core';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import TaskIcon from '@mui/icons-material/Task';
import { Paper } from '@mui/material';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';


export default function MyTasks(props) {
    const [tabs, setTabs] = React.useState(0);
    const [cmp, setCMP] = React.useState([]);
    const [ctask, setCTask] = React.useState(true);
    const handleChange = (event, newValue) => {
        setTabs(newValue);
    };

    const description = props.it
    const pop = props.pop

    function checkPriority(taskDescription, priority) {
        if (priority === "high") {
            return highPriorityTask(taskDescription, priority)
        }
        else if (priority === "medium") {
            return mediumPriorityTask(taskDescription, priority)
        }
        else {
            return lowPriorityTask(taskDescription, priority)
        }
    }

    const lowPriorityTask = (taskDescription, priority) => {
        return <Paper
            style={{
                marginBottom: "5%",
                width: "1000px",
                background: "#30AE0433",
                borderRadius: "25px"
            }}>
            <Box>
                <Box style={{ display: 'flex', flexWrap: 'wrap', marginLeft: "3.5%" }}>
                    <TaskIcon style={{ marginRight: "1%", color: "rgba(28, 106, 0, 1)", marginTop: "3%" }} />
                    <Typography style={{ color: "rgba(28, 106, 0, 1)", marginTop: "3%" }}>{taskDescription}</Typography>
                </Box>
                <Box style={{ display: 'flex', flexWrap: 'wrap', marginLeft: "3.5%", marginTop: "2%", paddingBottom: "3%" }}>
                    <PriorityHighIcon style={{ color: "rgba(28, 106, 0, 1)" }} />
                    <Typography style={{ marginRight: "5%", color: "rgba(28, 106, 0, 1)" }}>{priority}</Typography>

                    <PersonOutlineOutlinedIcon style={{ color: "rgba(28, 106, 0, 1)" }} />
                    <Typography style={{ marginRight: "5%", color: "rgba(28, 106, 0, 1)" }}>Teacher</Typography>

                    <DateRangeOutlinedIcon style={{ color: "rgba(28, 106, 0, 1)" }} />
                    <Typography style={{ marginRight: "5%", color: "rgba(28, 106, 0, 1)" }}>Saturday</Typography>
                </Box>
            </Box>

        </Paper>
    }

    const mediumPriorityTask = (taskDescription, priority) => {
        return <Paper
            style={{
                marginBottom: "5%",
                width: "1000px",
                background: "rgba(255, 184, 25, 0.2)",
                borderRadius: "25px"
            }}>
            <Box>
                <Box style={{ display: 'flex', flexWrap: 'wrap', marginLeft: "3.5%" }}>
                    <TaskIcon style={{ marginRight: "1%", color: "rgba(147, 110, 0, 1)", marginTop: "3%" }} />
                    <Typography style={{ color: "rgba(147, 110, 0, 1)", marginTop: "3%" }}>{taskDescription}</Typography>
                </Box>
                <Box style={{ display: 'flex', flexWrap: 'wrap', marginLeft: "3.5%", marginTop: "2%", paddingBottom: "3%" }}>
                    <PriorityHighIcon style={{ color: "rgba(147, 110, 0, 1)" }} />
                    <Typography style={{ marginRight: "5%", color: "rgba(147, 110, 0, 1)" }}>{priority}</Typography>

                    <PersonOutlineOutlinedIcon style={{ color: "rgba(147, 110, 0, 1)" }} />
                    <Typography style={{ marginRight: "5%", color: "rgba(147, 110, 0, 1)" }}>Teacher</Typography>

                    <DateRangeOutlinedIcon style={{ color: "rgba(147, 110, 0, 1)" }} />
                    <Typography style={{ marginRight: "5%", color: "rgba(147, 110, 0, 1)" }}>Saturday</Typography>
                </Box>
            </Box>

        </Paper>
    }

    const highPriorityTask = (taskDescription, priority) => {
        return <Paper
            style={{
                marginBottom: "5%",
                width: "1000px",
                background: "rgba(249, 126, 109, 0.2)",
                borderRadius: "25px"
            }}>
            <Box>
                <Box style={{ display: 'flex', flexWrap: 'wrap', marginLeft: "3.5%" }}>
                    <TaskIcon style={{ marginRight: "1%", color: "rgba(231, 61, 77, 1)", marginTop: "3%" }} />
                    <Typography style={{ color: "rgba(231, 61, 77, 1)", marginTop: "3%" }}>{taskDescription}</Typography>
                </Box>
                <Box style={{ display: 'flex', flexWrap: 'wrap', marginLeft: "3.5%", marginTop: "2%", paddingBottom: "3%" }}>
                    <PriorityHighIcon style={{ color: "rgba(231, 61, 77, 1)" }} />
                    <Typography style={{ marginRight: "5%", color: "rgba(231, 61, 77, 1)" }}>{priority}</Typography>

                    <PersonOutlineOutlinedIcon style={{ color: "rgba(231, 61, 77, 1)" }} />
                    <Typography style={{ marginRight: "5%", color: "rgba(231, 61, 77, 1)" }}>Teacher</Typography>

                    <DateRangeOutlinedIcon style={{ color: "rgba(231, 61, 77, 1)" }} />
                    <Typography style={{ marginRight: "5%", color: "rgba(231, 61, 77, 1)" }}>Saturday</Typography>
                </Box>
            </Box>

        </Paper>
    }


    let listItemsActive = Object.keys(pop["activeTaskID"][0]).map((key, index) => (
        checkPriority(pop["activeTaskID"][0][key][3], pop["activeTaskID"][0][key][0])
    ))
    
    let listItemsUrgent = Object.keys(pop["urgentTaskID"][0]).map((key, index) => (
        checkPriority(pop["urgentTaskID"][0][key][3], pop["urgentTaskID"][0][key][0])
    ))

    let listItemsBacklogs = Object.keys(pop["backlogTaskID"][0]).map((key, index) => (
        checkPriority(pop["backlogTaskID"][0][key][3], pop["backlogTaskID"][0][key][0])
    ))

    let listItemsFuture = Object.keys(pop["futureTaskID"][0]).map((key, index) => (
        checkPriority(pop["futureTaskID"][0][key][3], pop["futureTaskID"][0][key][0])
    ))

    let listItemsCompleted = Object.keys(pop["completedTaskID"][0]).map((key, index) => (
        checkPriority(pop["completedTaskID"][0][key][3], pop["completedTaskID"][0][key][0])
    ))

    function handleActive(e) {
        setCTask(false)
        setCMP(listItemsActive)
    }

    function handleUrgent(e) {
        setCTask(false)
        setCMP(listItemsUrgent)
    }
    
    function handleBacklogs(e) {
        setCTask(false)
        setCMP(listItemsBacklogs)
    }

    function handleFuture(e) {
        setCTask(false)
        setCMP(listItemsFuture)
    }

    function handleCompleted(e) {
        setCTask(false)
        setCMP(listItemsCompleted)
    }

    return (
        <Box style={{ display: 'flex', flexWrap: 'wrap', marginLeft: "3.5%" }}>
            <Box style={{ width: "100%", marginTop: "2%", marginBottom: "5%", marginLeft: "3.5%" }}>
                <Tabs value={tabs} onChange={handleChange} aria-label="disabled tabs example">
                    <Tab label="Active" style={{ marginRight: "2%" }} onClick={handleActive}/>
                    <Tab label="Urgent" style={{ marginRight: "2%" }} onClick={handleUrgent}/>
                    <Tab label="Backlogs" style={{ marginRight: "2%" }} onClick={handleBacklogs}/>
                    <Tab label="Future" style={{ marginRight: "2%" }} onClick={handleFuture}/>
                    <Tab label="Completed" onClick={handleCompleted}/>
                </Tabs>
            </Box>

            <Box>
                {ctask && listItemsActive}
                {cmp}
            </Box>

        </Box >
    );
}
