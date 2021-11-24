import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Paper from '@mui/material/Paper';


export default function Checklist() {
    const [age, setAge] = React.useState('');
    const [value, setValue] = React.useState('1');

    const handleChange2 = (event, newValue) => {
        setValue(newValue);
    };

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const standardActivities = [
        "Prepare well each and every aspect of the lesson before the delivery of the lesson",
        "Use of relevant teaching aids",
        "Motivate the students before the actual delivery of lesson.",
        "Use a combination of different methods & techniques of teaching",
        "Interact with students",
        "Induce curiosity, motivate & provoke thinking, imagination and application of concept taught",
        "Maintain cleanliness and discipline class teacher must mark attendance",
        "Create a learning environment",
        "Make best use of laboratory, models, equipment, apparatus to show experiments, on regular basis",
        "Encourage students to prepare models and participate in exhibitions",
        "Attend school on time"
    ]

    const standardActivitiesComponents = []

    for (var i = 0; i < standardActivities.length; i++) {
        standardActivitiesComponents.push(<Paper elevation={4} style={{ width: "289px", height: "155px", marginTop: "3%", marginLeft: "38px", border: "1px solid #000000", boxSizing: "border-box" }}>{standardActivities[i]}</Paper>)
    }

    const coreActivities = [
        "Prepare well each and every aspect of the lesson before the delivery of the lesson",
        "Use of relevant teaching aids",
        "Motivate the students before the actual delivery of lesson.",
        "Use a combination of different methods & techniques of teaching",
        "Interact with students",
        "Induce curiosity, motivate & provoke thinking, imagination and application of concept taught",
        "Maintain cleanliness and discipline class teacher must mark attendance",
        "Create a learning environment",
        "Make best use of laboratory, models, equipment, apparatus to show experiments, on regular basis",
        "Encourage students to prepare models and participate in exhibitions",
        "Attend school on time"
    ]

    const coreActivitiesComponents = []

    for (var i = 0; i < coreActivities.length; i++) {
        coreActivitiesComponents.push(<Paper elevation={4} style={{ width: "289px", height: "155px", marginTop: "3%", marginLeft: "38px", border: "1px solid #000000", boxSizing: "border-box" }}>{coreActivities[i]}</Paper>)
    }

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl style={{width:"80%", marginLeft:"5%", marginTop:"2%"}}>
                <InputLabel id="demo-simple-select-label">Select Role</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Select Role"
                    onChange={handleChange}
                    
                >
                    <MenuItem value={10}>Teaching Staff</MenuItem>
                    <MenuItem value={20}>Non-Teaching Staff</MenuItem>
                </Select>
            </FormControl>
            <FormControl style={{width:"80%", marginLeft:"5%", marginTop:"3%"}}>
                <InputLabel id="demo-simple-select-label">Select Frequency</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Select Frequency"
                    onChange={handleChange}
                >
                    <MenuItem value={10}>Daily</MenuItem>
                    <MenuItem value={20}>Weekly</MenuItem>
                    <MenuItem value={30}>Monthly</MenuItem>
                </Select>
            </FormControl>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }} style={{marginTop:"3%"}}>
                    <TabList onChange={handleChange2} aria-label="lab API tabs example">
                        <Tab label="Standard Activities" value="1" />
                        <Tab label="Core Activities" value="2" />
                    </TabList>
                </Box>
                <TabPanel value="1">
                    <Box style={{ display: 'flex', flexWrap: 'wrap', marginLeft: "3.5%" }}>
                        {standardActivitiesComponents}
                    </Box>
                </TabPanel>
                <TabPanel value="2">
                    <Box style={{ display: 'flex', flexWrap: 'wrap', marginLeft: "3.5%" }}>
                        {coreActivitiesComponents}
                    </Box>
                </TabPanel>
            </TabContext>

        </Box>
    );
}
