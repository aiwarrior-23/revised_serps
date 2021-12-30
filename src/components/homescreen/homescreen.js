import React, { useState, useEffect } from 'react';
import "./homescreen.scss";
import { styled } from '@mui/material/styles';
import ReactDOM from 'react-dom';
// import "./menuButtons.css"
import axios from 'axios';
// import TaskViewer from '../taskView/tasksViewer';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import NewsComponent from '../newsfeed/NewsFeed';


import { Paper } from '@mui/material';

import { Toolbar } from '@mui/material';
import { FormControl } from '@mui/material';
import { ButtonGroup } from '@mui/material';
import AssignClass from '../assignClass/AssignClass';
import CreateTask from '../createTask/createtask';
import CreateUser from '../createUser/Userscreen';
import TeacherProfile from '../teacherProfile/teacherProfile';
import PersonAdd from '@material-ui/icons/PersonAdd';

function HomeScreen(props) {

    var message = props.name
    const [num, setNum] = useState(0)
    const [wish, setWish] = useState("")

    const quotes = ['“One child, one teacher, one book, one pen can change the world.” – Malala Yousafzai',
        '“When educating the minds of our youth, we must not forget to educate their hearts.”- Dalai Lama',
        '“A good teacher can inspire hope, ignite the imagination, and instill a love of learning.” – Brad Henry',
        '“It is the supreme art of a teacher to awaken joy in creative expression and knowledge.”- Albert Einstein',
        '“Intelligence plus character– that is the goal of true education.”- Martin Luther King Jr.',
        '“The secret in education lies in respecting the student.” – Ralph Waldo Emerson',
        '“Great teachers empathize with kids, respect them, and believe that each one has something special that can be built upon.”- Ann Liberman',
        '“A teacher is a compass that activates the magnets of curiosity, knowledge, and wisdom in the pupils.”- Ever Garrison',
        '“Education is not the filling of a pail but the lighting of a fire.”- William Butler Yeats',
        '“One looks back with appreciation to the brilliant teachers, but with gratitude to those who touched our human feelings.” – Carl Jung',
        '“Education is the passport to the future, for tomorrow belongs to those who prepare for it today.” – Malcolm X',
        '“Everyone who remembers his own education remembers teachers, not methods and techniques. The teacher is the heart of the educational system.” – Sidney Hook',
        '“The mediocre teacher tells. The good teacher explains. The superior teacher demonstrates. The great teacher inspires.” – William Arthur Ward',
        '“Children are likely to live up to what you believe of them.” – Lady Bird Johnson',
        '“The object of education is to prepare the young to educate themselves throughout their lives.” – Robert M. Hutchins',
        '“The beautiful thing about learning is that no one can take it away from you.” – B.B. King',
        '“Anyone who does anything to help a child in his life is a hero to me.” –  Fred Rogers',
        '“A good teacher is like a candle — it consumes itself to light the way for others.” – Mustafa Kemal Ataturk',
        '“Give me a fish and I eat for a day. Teach me to fish and I eat for a lifetime.” – Chinese Proverb',
        '“A teacher takes a hand, opens a mind, and touches a heart.” – Unknown',
        '“Education is not preparation for life; education is life itself.” – John Dewey',
        '“Teaching is a very noble profession that shapes the character, caliber, and future of the individual. If the people remember me as a good teacher, that will be the biggest honor for me.” – APJ Abdul Kalam']

    const min = 0;
    const max = quotes.length;
    const rand = Math.round(min + Math.random() * (max - min));

    const viewTasks = (e) => {
        const mail = props.mail
        const data = JSON.stringify({
            "assigned": mail
        });

        var config = {
            method: 'POST',
            url: 'http://34.136.41.197:5000/taskassign',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios(config)
            .then(response => {
                var description = response.data["data"]
                var pop = response.data["populator"]
                //   .render(
                //     <React.StrictMode>
                //       <TaskViewer msg={response.data["message"]} it={description} pop={pop} const mail={props.mail} cTask={props.cTask} />
                //     </React.StrictMode>,
                //     document.getElementById('dLogin'));
            })

    }

    const getWish = () => {
        var today = new Date()
        var curHr = today.getHours()

        if (curHr < 12) {
            setWish("Good Morning")
        } else if (curHr < 18) {
            setWish("Good Afternoon")
        } else {
            setWish("Good Evening")
        }
    }

    useEffect(() => {
        setNum(rand);
        getWish();
    });

    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));


   
    return (
        <Item style={{ minHeight: "125%", marginTop: "1%", borderRadius: "45px" }}>

           
            <Box>
                <Typography variant="h5" style={{ marginTop: "3%" }}>
                    Hello {props.name}!!
                </Typography>
                <Typography variant="subtitle2">
                    Good Evening.
                </Typography>
                <Paper elevation={3} style={{ width: "70%", marginLeft: "15%" }}>
                    <Typography variant="h6" style={{ marginTop: "3%", paddingTop: "3%" }}>
                        Quote of the Day
                    </Typography>
                    <Typography variant="subtitle2" style={{ paddingBottom: "3%" }}>
                        “Intelligence plus character– that is the goal of true education.”- Martin Luther King Jr
                    </Typography>
                </Paper>
                <ButtonGroup variant="text" aria-label="text button group" style={{ marginTop: "3%", color: "black" }}>
                    <Button style={{ color: "black" }}>Approvals</Button>
                    <Button style={{ color: "black" }}>Circulars</Button>
                </ButtonGroup>
            </Box>
        </Item>
    );
}

export default HomeScreen;
