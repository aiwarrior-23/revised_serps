import './App.css';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { AppBar, Button, ButtonGroup, FormControl, IconButton, Toolbar, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import HomeIcon from '@mui/icons-material/Home';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ForumIcon from '@mui/icons-material/Forum';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { useState } from 'react';
import HomeScreen from './components/homescreen/homescreen';
import React from 'react';
import ReactDOM from 'react-dom';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import { InputLabel } from '@mui/material';
import { Select } from '@mui/material';
import { MenuItem } from '@mui/material';
import { SpeedDial } from '@mui/material';
import { SpeedDialAction } from '@mui/material';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import { Box } from '@mui/system';
import Checklist from './components/studyCentral/checklist';
import Attendance from './components/studyCentral/attendance';
import Marks from './components/studyCentral/marks';
import CreateTask from './components/createTask/createtask';
import CreateUser from './components/createUser/Userscreen';
import AssignClass from './components/assignClass/AssignClass';
import TeacherProfile from './components/teacherProfile/teacherProfile';
import StudyCentralHome from './components/studyCentral/scHome';
import MyTasks from './components/myTasks/myTasks';


function App() {
  


  const [colorHome, setColorHome] = useState("white")
  const [backgroundHome, setBackgroundHome] = useState("#1976D2")

  const [colorMT, setColorMT] = useState("white")
  const [backgroundMT, setBackgroundMT] = useState("#1976D2")

  const [colorSC, setColorSC] = useState("white")
  const [backgroundSC, setBackgroundSC] = useState("#1976D2")

  const [colorMes, setColorMes] = useState("white")
  const [backgroundMes, setBackgroundMes] = useState("#1976D2")

  const [colorCal, setColorCal] = useState("white")
  const [backgroundCal, setBackgroundCal] = useState("#1976D2")

  const [colorNot, setColorNot] = useState("white")
  const [backgroundNot, setBackgroundNot] = useState("#1976D2")

  const [component, setComponent] = useState(<HomeScreen/>)


  const clearState = () => {
    setColorHome('white')
    setBackgroundHome('#1976D2')
    setBackgroundMT('#1976D2')
    setColorMT('white')
    setColorSC('white')
    setBackgroundSC('#1976D2')
    setColorMes('white')
    setBackgroundMes('#1976D2')
    setColorCal('white')
    setBackgroundCal('#1976D2')
    setColorNot('white')
    setBackgroundNot('#1976D2')
  }

  const onHomeClick = () => {
    clearState()
    setColorHome("#1976D2")
    setBackgroundHome("white")
  }

  const onMyTasksClick = () => {
    clearState()
    setColorMT("#1976D2")
    setBackgroundMT("white")
    setComponent(<MyTasks/>)

  }
  const onStudyCentralClick = () => {
    clearState()
    setColorSC("#1976D2")
    setBackgroundSC("white")
  }
  const onMessagesClick = () => {
    clearState()
    setColorMes("#1976D2")
    setBackgroundMes("white")
  }
  const onCalendarClick = () => {
    clearState()
    setColorCal("#1976D2")
    setBackgroundCal("white")
  }
  const onNotificationsClick = () => {
    clearState()
    setColorNot("#1976D2")
    setBackgroundNot("white")
  }

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

  

  return (
    <div id="App" className="App">
      <Grid container spacing={0}>
        <Grid item xs={2} style={{ backgroundColor: "#1976D2" }}>
          <Typography variant="h6" gutterBottom id="typo" style={{ marginLeft: "13%", marginBottom: "10%", float: "left", paddingTop: "18%", color: "white" }}>Srishti
            Schools</Typography>

          <ButtonGroup orientation="vertical" style={{ color: "white", minWidth: "80%", marginLeft: "5%" }}>
            <ButtonGroup style={{ marginBottom: "10%", borderRadius: "45px", backgroundColor: backgroundHome }}>
              <IconButton aria-label="delete" style={{ marginLeft: "5%" }}>
                <HomeIcon style={{ color: colorHome, width: "21px", height: "28px" }} />
              </IconButton>
              <Button variant="text" style={{ color: colorHome, fontSize: "15px", textTransform: "capitalize" }} onClick={onHomeClick}>Home</Button>
            </ButtonGroup>

            <ButtonGroup style={{ marginBottom: "10%", backgroundColor: backgroundMT, borderRadius: "45px" }}>
              <IconButton aria-label="delete" style={{ marginLeft: "5%" }}>
                <TaskAltIcon style={{ color: colorMT, width: "21px", height: "28px" }} />
              </IconButton>
              <Button variant="text" style={{ color: colorMT, fontSize: "15px", textTransform: "capitalize" }} onClick={onMyTasksClick}>My Tasks</Button>
            </ButtonGroup>

            <ButtonGroup style={{ marginBottom: "10%", borderRadius: "45px", backgroundColor: backgroundSC }}>
              <IconButton aria-label="delete" style={{ marginLeft: "5%" }}>
                <MenuBookIcon style={{ color: colorSC, width: "21px", height: "28px" }} />
              </IconButton>
              <Button variant="text" style={{ color: colorSC, fontSize: "15px", textTransform: "capitalize" }} onClick={onStudyCentralClick}>Study Central</Button>
            </ButtonGroup>

            <ButtonGroup style={{ marginBottom: "10%", fontSize: "20px", borderRadius: "45px", backgroundColor: backgroundMes }}>
              <IconButton aria-label="delete" style={{ marginLeft: "5%" }}>
                <ForumIcon style={{ color: colorMes, width: "21px", height: "28px" }} />
              </IconButton>
              <Button variant="text" style={{ color: colorMes, fontSize: "15px", textTransform: "capitalize" }} onClick={onMessagesClick}>Messages</Button>
            </ButtonGroup>

            <ButtonGroup style={{ marginBottom: "10%", borderRadius: "45px", backgroundColor: backgroundCal }}>
              <IconButton aria-label="delete" style={{ marginLeft: "5%" }}>
                <CalendarTodayIcon style={{ color: colorCal, width: "21px", height: "28px" }} />
              </IconButton>
              <Button variant="text" style={{ color: colorCal, fontSize: "15px", textTransform: "capitalize" }} onClick={onCalendarClick}>Calendar</Button>
            </ButtonGroup>

            <ButtonGroup style={{ marginBottom: "10%", borderRadius: "45px", backgroundColor: backgroundNot }}>
              <IconButton aria-label="delete" style={{ marginLeft: "5%" }}>
                <NotificationsNoneIcon style={{ color: colorNot, width: "21px", height: "28px" }} />
              </IconButton>
              <Button variant="text" style={{ color: colorNot, fontSize: "15px", textTransform: "capitalize" }} onClick={onNotificationsClick}>Notifications</Button>
            </ButtonGroup>
          </ButtonGroup>

        </Grid>
        <Grid id="bigGrid" item xs={10} style={{ backgroundColor: "#1976D2", marginLeft: "-1%", marginTop: "1%" }}>
          {/* <HomeScreen /> */}
          <Item style={{ minHeight: "125%", marginTop: "1%", borderRadius: "45px" }}>
          {/* <Checklist/> */}
          {/* <Attendance/> */}
          {/* <Marks/> */}
          {/* <CreateTask/> */}
          {/* <CreateUser/> */}
          {/* <AssignClass/> */}
          {/* <TeacherProfile/> */}
          {/* <StudyCentralHome/> */}
          {/* <MyTasks/> */}
          {component}
          </Item>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
