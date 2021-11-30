import { Button } from "@material-ui/core";
import { Box } from "@mui/system";
import Attendance from "./attendance";
import Checklist from "./checklist";
import Marks from "./marks";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import * as React from 'react';



export default function StudyCentralHome() {

    const [value, setValue] = React.useState(<Attendance />);
    const [tabs, setTabs] = React.useState(0);

    const handleChange = (event, newValue) => {
        setTabs(newValue);
    };

    const marksReportButton = (e) => {
        setValue(<Marks/>)
    }

    const attendanceReportButton = (e) => {
        setValue(<Attendance/>)
    }

    const checklistButton = (e) => {
        setValue(<Checklist/>)
    }

    return (
        <Box style={{ display: 'flex', flexWrap: 'wrap', marginLeft: "3.5%" }}>

            <Box style={{ width: "50%", marginTop: "2%", marginBottom: "5%", marginLeft:"3.5%" }}>
                <Tabs value={tabs} onChange={handleChange} aria-label="disabled tabs example">
                    <Tab label="Attendance Report" style={{marginRight:"2%"}} onClick={attendanceReportButton}/>
                    <Tab label="Marks Report" style={{marginRight:"2%"}} onClick={marksReportButton}/>
                    <Tab label="Checklist" onClick={checklistButton} />
                </Tabs>
            </Box>
            <Box>
                {value}
            </Box>
        </Box>

    )

}