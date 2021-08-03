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



const Home = (props) => {
  //let courses = useSelector((state) => state.courses);
  const courses = [
    {
      title: "Basic Storage",
      subject: "BasicStorage",
      own_group: "Storage"
    },
    {
      title: "EMC Storage Solutions",
      subject: "EMC",
      own_group: "Storage"
    },
    {
      title: "NetApp Storage Solutions",
      subject: "NetApp",
      own_group: "Storage"
    },
    {
      title: "Basic Networking",
      subject: "BasicNetworking",
      own_group: "Network"
    }
  ]



  // all subjects with no parents in the db
  const parent_subjects = [
    {
      title: "storage",
      child_subject: ["Basic Storage", "EMC Storage", "NetApp Storage"]
    },
    {
      title: "Network",
      child_subject: ["Basic Network", "L2", "L3", "L4", "L5 - Benny edition"]
    },{
      title: "Excahnge",
      child_subject: ["Basic Exchange", "Nothing - as usual"]
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

  const parentSubjectsCard = courses.map((course) => {
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
        {courses_card}
      </Grid>
    </div>


  );
};

export default Home;
