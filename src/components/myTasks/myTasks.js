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


export default function MyTasks() {
    const [tabs, setTabs] = React.useState(0);
    const handleChange = (event, newValue) => {
        setTabs(newValue);
    };

    const lowPriorityTask = <Paper
        style={{
            marginBottom: "5%",
            width: "1000px",
            background: "#30AE0433",
            borderRadius:"25px"
        }}>
        <Box>
            <Box style={{ display: 'flex', flexWrap: 'wrap', marginLeft: "3.5%" }}>
                <TaskIcon style={{ marginRight: "1%", color: "rgba(28, 106, 0, 1)", marginTop: "3%" }} />
                <Typography style={{ color: "rgba(28, 106, 0, 1)", marginTop: "3%" }}>Task to be done</Typography>
            </Box>
            <Box style={{ display: 'flex', flexWrap: 'wrap', marginLeft: "3.5%", marginTop: "2%", paddingBottom:"3%" }}>
                <PriorityHighIcon style={{ color: "rgba(28, 106, 0, 1)" }} />
                <Typography style={{ marginRight: "5%", color: "rgba(28, 106, 0, 1)" }}>Low Importance</Typography>

                <PersonOutlineOutlinedIcon style={{ color: "rgba(28, 106, 0, 1)" }} />
                <Typography style={{ marginRight: "5%", color: "rgba(28, 106, 0, 1)" }}>Teacher</Typography>

                <DateRangeOutlinedIcon style={{ color: "rgba(28, 106, 0, 1)" }} />
                <Typography style={{ marginRight: "5%", color: "rgba(28, 106, 0, 1)" }}>Saturday</Typography>
            </Box>
        </Box>

    </Paper>

    const mediumPriorityTask = <Paper
    style={{
        marginBottom: "5%",
        width: "1000px",
        background: "rgba(255, 184, 25, 0.2)",
        borderRadius:"25px"
    }}>
    <Box>
        <Box style={{ display: 'flex', flexWrap: 'wrap', marginLeft: "3.5%" }}>
            <TaskIcon style={{ marginRight: "1%", color: "rgba(147, 110, 0, 1)", marginTop: "3%" }} />
            <Typography style={{ color: "rgba(147, 110, 0, 1)", marginTop: "3%" }}>Task to be done</Typography>
        </Box>
        <Box style={{ display: 'flex', flexWrap: 'wrap', marginLeft: "3.5%", marginTop: "2%", paddingBottom:"3%" }}>
            <PriorityHighIcon style={{ color: "rgba(147, 110, 0, 1)" }} />
            <Typography style={{ marginRight: "5%", color: "rgba(147, 110, 0, 1)" }}>Medium Importance</Typography>

            <PersonOutlineOutlinedIcon style={{ color: "rgba(147, 110, 0, 1)" }} />
            <Typography style={{ marginRight: "5%", color: "rgba(147, 110, 0, 1)" }}>Teacher</Typography>

            <DateRangeOutlinedIcon style={{ color: "rgba(147, 110, 0, 1)" }} />
            <Typography style={{ marginRight: "5%", color: "rgba(147, 110, 0, 1)" }}>Saturday</Typography>
        </Box>
    </Box>

</Paper>

    const highPriorityTask = <Paper
    style={{
        marginBottom: "5%",
        width: "1000px",
        background: "rgba(249, 126, 109, 0.2)",
        borderRadius:"25px"
    }}>
    <Box>
        <Box style={{ display: 'flex', flexWrap: 'wrap', marginLeft: "3.5%" }}>
            <TaskIcon style={{ marginRight: "1%", color: "rgba(231, 61, 77, 1)", marginTop: "3%" }} />
            <Typography style={{ color: "rgba(231, 61, 77, 1)", marginTop: "3%" }}>Task to be done</Typography>
        </Box>
        <Box style={{ display: 'flex', flexWrap: 'wrap', marginLeft: "3.5%", marginTop: "2%", paddingBottom:"3%" }}>
            <PriorityHighIcon style={{ color: "rgba(231, 61, 77, 1)" }} />
            <Typography style={{ marginRight: "5%", color: "rgba(231, 61, 77, 1)" }}>High Importance</Typography>

            <PersonOutlineOutlinedIcon style={{ color: "rgba(231, 61, 77, 1)" }} />
            <Typography style={{ marginRight: "5%", color: "rgba(231, 61, 77, 1)" }}>Teacher</Typography>

            <DateRangeOutlinedIcon style={{ color: "rgba(231, 61, 77, 1)" }} />
            <Typography style={{ marginRight: "5%", color: "rgba(231, 61, 77, 1)" }}>Saturday</Typography>
        </Box>
    </Box>

</Paper>

    return (
        <Box style={{ display: 'flex', flexWrap: 'wrap', marginLeft: "3.5%" }}>
            <Box style={{ width: "100%", marginTop: "2%", marginBottom: "5%", marginLeft: "3.5%" }}>
                <Tabs value={tabs} onChange={handleChange} aria-label="disabled tabs example">
                    <Tab label="Active" style={{ marginRight: "2%" }} />
                    <Tab label="Urgent" style={{ marginRight: "2%" }} />
                    <Tab label="Backlogs" style={{ marginRight: "2%" }} />
                    <Tab label="Future" style={{ marginRight: "2%" }} />
                    <Tab label="Completed" />
                </Tabs>
            </Box>

            <Box>
                {highPriorityTask}
                {mediumPriorityTask}
                {lowPriorityTask}
            </Box>

        </Box >
    );
}
