import React from "react";
import CoursesView from '../components/courses_view';
import { useDispatch, useSelector } from "react-redux";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles, makeStyles } from '@material-ui/core/styles';

import IconButton from '@material-ui/core/IconButton';
import clsx from 'clsx';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';





const Home = (props) => {

  const HtmlTooltip = withStyles((theme) => ({
    tooltip: {
      backgroundColor: '#f5f5f9',
      color: 'rgba(0, 0, 0, 0.87)',
      maxWidth: 220,
      fontSize: theme.typography.pxToRem(12),
      border: '1px solid #dadde9',
    },
  }))(Tooltip);


  //let courses = useSelector((state) => state.courses);
  const courses = [
    {
      title: "Basic Storage",
      subject: "BasicStorage",
      own_group: "Storage",
      coursePath:"/"
    },
    {
      title: "EMC Storage Solutions",
      subject: "EMC",
      own_group: "Storage",
      coursePath:"/"
    },
    {
      title: "NetApp Storage Solutions",
      subject: "NetApp",
      own_group: "Storage",
      coursePath:"/"
    },
    {
      title: "Basic Networking",
      subject: "BasicNetworking",
      own_group: "Network",
      coursePath:"/"
    }
  ]


  // all subjects with no parents in the db
  const parentSubjects = [
    {
      title: "storage",
      child_subject: ["Basic Storage", "EMC Storage", "NetApp Storage"],
      subjectPath:"/subjects/2"
    },
    {
      title: "Network",
      child_subject: ["Basic Network", "L2", "L3", "OSPF", "Routing"],
      subjectPath:"/subjects/1"
    }, {
      title: "Excahnge",
      child_subject: ["Basic Exchange", "Advanced Outlook"],
      subjectPath:"/subjects/4"
    }
  ]
  //let searchTerm = useSelector((state) => state.search);
  //console.log(searchTerm);

  const coursesCard = courses.map((course) => {
    console.log(course)
    return (
      <Grid item xs={3}>
        <Card>
          <CardContent>
            <Typography variant="body2" component="p">
              {course.title}
            </Typography>
            <Typography variant="body2" component="p">
              {course.own_group}
            </Typography>
          </CardContent>
          <CardActions>
            <Link to="/home">
              <Button size="small">Go To Course</Button>
            </Link>
          </CardActions>
        </Card>
      </Grid>
    )
  })


  const childSubjectToJSX = (childSubjects) => {

  }

  const parentSubjectsCard = parentSubjects.map((subject) => {
    console.log(subject)
    return (

      <Grid item xs={3}>
        <HtmlTooltip
          title={
            <React.Fragment>
              <Typography color="inherit">Subtopics</Typography>
              {subject.child_subject.map((child) => <div>{child}</div>)}
            </React.Fragment>
          }
        >
          <Card>
            <CardContent>
              <Typography variant="body2" component="p">
                {subject.title}
              </Typography>
            </CardContent>
            <CardActions>
              <Link to={subject.subjectPath}>
                <Button size="small">Go To Subjects</Button>
              </Link>
            </CardActions>
          </Card>
        </HtmlTooltip>
      </Grid>
    )
  })

  return (
    // <CoursesView courses={courses}/>
    <div>
      <Typography component="h2" variant="display4" gutterBottom>
        Courses
      </Typography>
      <Grid container spacing={3}>
        {coursesCard}
      </Grid>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Typography component="h2" variant="display4" gutterBottom>
        Subjects
      </Typography>
      <Grid container spacing={3}>
        {parentSubjectsCard}
      </Grid>
    </div>
    //<CoursesView courses={courses}/>
  );
};

export default Home;
