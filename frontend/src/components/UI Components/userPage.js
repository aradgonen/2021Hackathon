import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Doughnut } from 'react-chartjs-2';
import { Link } from "react-router-dom";

class UserPersonalPage extends React.Component {
    render() {
        return <CoursesDisplay></CoursesDisplay>
    }
}

function CoursesDisplay(props) {
    const cardUseStyles = makeStyles({
        root: {
            maxWidth: 300,
        },
        media: {
            height: 10,
        },
    });

    const gridUseStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
    }));

    const chartConfiguration = {
        type: 'pie',
        data: {
            labels: ['Complete', 'Remaining'],
            datasets: [{
                data: [80, 20],
                backgroundColor: ['green', 'red'],
            }]
        },
        options: {
            plugins: {
                datalabels: {
                    display: true,
                    align: 'bottom',
                    borderRadius: 3,
                    font: {
                        size: 10,
                    }
                },
            }
        }
    }

    const cardClasses = cardUseStyles();

    const coursesElements = []
    const courses = [
        {
            name: "SH Basic",
            subject: "storage",
            id: 1

        }, 
        {
            name: "Network",
            subject: "Network",
            id: 2
        },
        {
            name: 'Linux Fundumentals',
            subject: "OS",
            id: 3
        }, 
        {
            name: 'AD General',
            subject: "AD",
            id: 4
        }]

    for (const course of courses) {
        coursesElements.push(
            (
                <Grid item xs={3}>
                    <Card className={cardClasses.root}>
                        <CardActionArea>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2" align='center'>
                                    {course.name}
                                </Typography>
                                <Doughnut data={chartConfiguration.data} oprions={chartConfiguration.options} width={1} />
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <div>Next Lesson: </div>
                            <Link to="/course/detail/{course.id}">
                                <Button size="small" color="primary">
                                    Learn More
                                </Button>
                            </Link>
                        </CardActions>
                    </Card>
                </Grid>
            )
        )
    }


    const gridClasses = gridUseStyles();

    return (
        <div className={gridClasses.root}>
            <Typography variant="h3" component="h2" gutterBottom align='center'>
                Current Cources
            </Typography>
            <Grid container spacing={3}>
                {coursesElements}
            </Grid>
        </div>
    );
}



export default UserPersonalPage