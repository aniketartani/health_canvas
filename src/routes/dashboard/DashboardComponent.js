import React from 'react';
import {useEffect,useState} from 'react';
import { Column, Row } from 'simple-flexbox';
import { createUseStyles } from 'react-jss';
import MiniCardComponent from 'components/cards/MiniCardComponent';
import TodayTrendsComponent from './TodayTrendsComponent';
import UnresolvedTicketsComponent from './UnresolvedTicketsComponent';
import TasksComponent from './TasksComponent';

// const [values, setValues] = useState({})
//     let project = async () =>{
//     //   const a=JSON.parse(localStorage.getItem("userdata")).phonenumber;
//         const res = await fetch(`http://khabia-demo.stackstaging.com/iot/iotVitalData.php?apikey=Canvas`) 
//         const data = await res.json()
//         setValues(data)
//         console.log(values.hr);
        
//     }
//     useEffect(() => {
//         project()
//     }, [])
// const [value,setValue] = useState("");
const useStyles = createUseStyles({
    cardsContainer: {
        marginRight: -30,
        marginTop: -30
    },
    cardRow: {
        marginTop: 30,
        '@media (max-width: 768px)': {
            marginTop: 0
        }
    },
    miniCardContainer: {
        flexGrow: 1,
        marginRight: 30,
        '@media (max-width: 768px)': {
            marginTop: 30,
            maxWidth: 'none'
        }
    },
    todayTrends: {
        marginTop: 30
    },
    lastRow: {
        marginTop: 30
    },
    unresolvedTickets: {
        marginRight: 30,
        '@media (max-width: 1024px)': {
            marginRight: 0
        }
    },
    tasks: {
        marginTop: 0,
        '@media (max-width: 1024px)': {
            marginTop: 30
        }
    }
});

function DashboardComponent() {
    // const [values, setValues] = useState("")
    // const [value,setValue] = useState("");
    let hr=0;
    const [value,setValue] = useState("");
    const [values, setValues] = useState({})
    let project = async () =>{
    const response = await fetch('https://a7e6-2405-201-6010-aa5d-782b-723d-7b40-de66.ngrok.io/iotVitalData.php?apikey=Canvas');
    const data = await response.json();
    setValues(data[0]);
    // hr=data[0].hr;
    // console.log()
    }
   
    useEffect(() => {
        project()
    }, [])
   
    // console.log(values);
    console.log(value);
    const classes = useStyles();
    return (
        <Column>
            <Row
                className={classes.cardsContainer}
                wrap
                flexGrow={1}
                horizontal='space-between'
                breakpoints={{ 768: 'column' }}
            >
                <Row
                    className={classes.cardRow}
                    wrap
                    flexGrow={1}
                    horizontal='space-between'
                    breakpoints={{ 384: 'column' }}
                >
                    <MiniCardComponent
                        className={classes.miniCardContainer}
                        title='Heart Beat'
                        value={values.hr}
                    />
                    <MiniCardComponent
                        className={classes.miniCardContainer}
                        title='SPO2 Level'
                        value={values.spo2}
                    />
                </Row>
                <Row
                    className={classes.cardRow}
                    wrap
                    flexGrow={1}
                    horizontal='space-between'
                    breakpoints={{ 384: 'column' }}
                >
                    <MiniCardComponent
                        className={classes.miniCardContainer}
                        title='Time'
                        value={values.TimeStamp}
                    />
                    <MiniCardComponent
                        className={classes.miniCardContainer}
                        title='Bpm'
                        value={values.ir}
                    />
                </Row>
            </Row>
            <div className={classes.todayTrends}>
                <TodayTrendsComponent />
            </div>
            <Row
                horizontal='space-between'
                className={classes.lastRow}
                breakpoints={{ 1024: 'column' }}
            >
                {/* <UnresolvedTicketsComponent containerStyles={classes.unresolvedTickets} /> */}
                {/* <TasksComponent containerStyles={classes.tasks} /> */}
            </Row>
        </Column>
    );
}

export default DashboardComponent;
