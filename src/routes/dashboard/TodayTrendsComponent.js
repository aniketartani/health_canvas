import React from 'react';
import {useEffect,useState} from 'react';
import { Column, Row } from 'simple-flexbox';
import { createUseStyles, useTheme } from 'react-jss';
import LineChart from 'react-svg-line-chart';

const data = [];

// data.push(2);


const useStyles = createUseStyles((theme) => ({
    container: {
        backgroundColor: '#FFFFFF',
        border: `1px solid ${theme.color.lightGrayishBlue2}`,
        borderRadius: 4,
        cursor: 'pointer'
    },
    graphContainer: {
        marginTop: 24,
        marginLeft: 0,
        marginRight: 0,
        width: '100%'
    },
    graphSection: {
        padding: 24
    },
    graphSubtitle: {
        ...theme.typography.smallSubtitle,
        color: theme.color.grayishBlue2,
        marginTop: 4,
        marginRight: 8
    },
    graphTitle: {
        ...theme.typography.cardTitle,
        color: theme.color.veryDarkGrayishBlue
    },
    legendTitle: {
        ...theme.typography.smallSubtitle,
        fontWeight: '600',
        color: theme.color.grayishBlue2,
        marginLeft: 8
    },
    separator: {
        backgroundColor: theme.color.lightGrayishBlue2,
        width: 1,
        minWidth: 1
    },
    statContainer: {
        borderBottom: `1px solid ${theme.color.lightGrayishBlue2}`,
        padding: '24px 32px 24px 32px',
        height: 'calc(114px - 48px)',
        '&:last-child': {
            border: 'none'
        }
    },
    stats: {
        borderTop: `1px solid ${theme.color.lightGrayishBlue2}`,
        width: '100%'
    },
    statTitle: {
        fontWeight: '600',
        fontSize: 16,
        lineHeight: '22px',
        letterSpacing: '0.3px',
        textAlign: 'center',
        color: theme.color.grayishBlue2,
        whiteSpace: 'nowrap',
        marginBottom: 6
    },
    statValue: {
        ...theme.typography.title,
        textAlign: 'center',
        color: theme.color.veryDarkGrayishBlue
    }
}));

function TodayTrendsComponent() {
    const [values2, setValues2] = useState({})
  
    const theme = useTheme();
    const classes = useStyles({ theme });
    let project2 = async () =>{
        const response2 = await fetch('https://a7e6-2405-201-6010-aa5d-782b-723d-7b40-de66.ngrok.io/getVitals.php?apikey=Canvas');
        const data2 = await response2.json();
        setValues2(data2)   
        console.log(values2)
        }
       
        useEffect(() => {
            project2()
        }, [])
        // console.log(values2.hr);
       
        // graph
        let ans=1;
        let graph={values2};
        console.log(graph);
        for (let x = 1; x <= 24; x++) {
            data.push({ x: x, y: Math.floor(Math.random() * 10+90) });
        }

    function renderLegend(color, title) {
        return (
            <Row vertical='center'>
                <div style={{ width: 16, border: '2px solid', borderColor: color }}></div>
                <span className={classes.legendTitle}>{title}</span>
            </Row>
        );
    }

    function renderStat(title, value) {
        return (
            <Column
                flexGrow={1}
                className={classes.statContainer}
                vertical='center'
                horizontal='center'
            >
                <span className={classes.statTitle}>{title}</span>
                <span className={classes.statValue}>{value}</span>
            </Column>
        );
    }

    return (
        <Row
            flexGrow={1}
            className={classes.container}
            horizontal='center'
            breakpoints={{ 1024: 'column' }}
        >
            <Column
                wrap
                flexGrow={7}
                flexBasis='735px'
                className={classes.graphSection}
                breakpoints={{ 1024: { width: 'calc(100% - 48px)', flexBasis: 'auto' } }}
            >
                <Row wrap horizontal='space-between'>
                    <Column>
                        <span className={classes.graphTitle}>Heart Status</span>
                        {/* <span className={classes.graphSubtitle}>as of 25 May 2019, 09:41 PM</span> */}
                    </Column>
                    {renderLegend(theme.color.lightBlue, 'Today')}
                </Row>
                <div className={classes.graphContainer}>
                    <LineChart
                        data={data}
                        viewBoxWidth={500}
                        pointsStrokeColor={theme.color.lightBlue}
                        areaColor={theme.color.lightBlue}
                        areaVisible={true}
                    />
                </div>
            </Column>
            <Column className={classes.separator} breakpoints={{ 1024: { display: 'none' } }}>
                <div />
            </Column>
            <Column flexGrow={3} flexBasis='342px' breakpoints={{ 1024: classes.stats }}>
                {renderStat('Health Status', 'healthy')}
                {renderStat('Irregular heart Beat', 'No')}
                {renderStat('SPO2 status', 'normal')}
                {renderStat('Irregular Spo2', 'No')}
                {renderStat('ANY ELSE', '94%')}
            </Column>
        </Row>
    );
}

export default TodayTrendsComponent;
