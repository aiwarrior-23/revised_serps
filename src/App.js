import './App.css';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import ClassIcon from '@material-ui/icons/Class';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ReactDOM from 'react-dom';
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
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import { InputLabel } from '@mui/material';
import { Select } from '@mui/material';
import { MenuItem } from '@mui/material';
import { SpeedDial } from '@mui/material';
import { SpeedDialAction } from '@mui/material';

import SpeedDialIcon from '@mui/material/SpeedDialIcon';



import CreateTask from './components/createTask/createtask';
import CreateUser from './components/createUser/Userscreen';
import AssignClass from './components/assignClass/AssignClass';
import TeacherProfile from './components/teacherProfile/teacherProfile';
import StudyCentralHome from './components/studyCentral/scHome';
import MyTasks from './components/myTasks/myTasks';
import axios from 'axios';
import PersonAdd from '@material-ui/icons/PersonAdd';


function App(props) {



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

  const [component, setComponent] = useState(<HomeScreen />)


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
    setComponent(<HomeScreen />)
  }

  const onMyTasksClick = () => {
    clearState()
    setColorMT("#1976D2")
    setBackgroundMT("white")
    const data = JSON.stringify({
      "assigned": "admin@srishtiworldschools.in"
    });

    var config = {
      method: 'POST',
      url: 'http://127.0.0.1:5000/taskassign',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios(config)
      .then(response => {
        var description = response.data["data"]
        var pop = response.data["populator"]

        setComponent(<MyTasks msg={response.data["message"]} it={description} pop={pop} mail="admin@srishtiworldschools.in" />)
      })

  }
  const onStudyCentralClick = () => {
    clearState()
    setColorSC("#1976D2")
    setBackgroundSC("white")
    setComponent(<StudyCentralHome />)
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
  const actions = [
    { icon: < ClassIcon />, name: 'Assign Class' },
    { icon: <PlaylistAddIcon />, name: 'Create Task' },
    { icon: <PersonAdd />, name: 'Create User' },
    { icon: <AccountCircleIcon />, name: 'Teacher profile' },
  ];
  const handleComponent = (e, name) => {
    e.preventDefault();
    if (name == 'Assign Class') {
      ReactDOM.render(
        <React.StrictMode>
          <AssignClass />
        </React.StrictMode>,
        document.getElementById('main')
      );

    }
    else if (name == 'Create Task') {
      ReactDOM.render(
        <React.StrictMode>
          <CreateTask />
        </React.StrictMode>,
        document.getElementById('main')
      );

    }
    else if (name == 'Create User') {
      ReactDOM.render(
        <React.StrictMode>
          <CreateUser />
        </React.StrictMode>,
        document.getElementById('main')
      );
    }
    else if (name == 'Teacher profile') {
      ReactDOM.render(
        <React.StrictMode>
          <TeacherProfile />
        </React.StrictMode>,
        document.getElementById('main')
      );
    }

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

          <Item id="main" style={{ minHeight: "125%", marginTop: "1%", borderRadius: "45px" }}>
            {/* <Checklist/> */}
            {/* <Attendance/> */}<Toolbar>
              <FormControl style={{ width: "50%" }}>

                <InputLabel id="demo-simple-select-standard-label">Select School...</InputLabel>

                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Select..."
                  style={{ width: "145%", borderRadius: "45px" }}
                >
                  <MenuItem value={1}>Srishti World School</MenuItem>
                  <MenuItem value={2}>Chaitanya Public School</MenuItem>
                </Select>

              </FormControl>

              <SearchIcon style={{ marginLeft: "25%", height: "60px", width: "70px" }} />

              <SpeedDial
                ariaLabel="SpeedDial basic example"
                sx={{ position: 'absolute', marginLeft: 120 }}
                icon={<SpeedDialIcon />}
                direction="down"
                style={{ width: 20, height: 50 }}
              >
                {actions.map((action) => (
                  <SpeedDialAction
                    key={action.name}
                    icon={action.icon}
                    tooltipTitle={action.name}
                    onClick={(e, name = action["name"]) => {
                      handleComponent(e, name)
                    }}
                  />
                ))}
              </SpeedDial>
            </Toolbar>
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
