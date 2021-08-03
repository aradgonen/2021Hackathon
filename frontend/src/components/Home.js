import React from "react";
import CoursesView from '../components/courses_view';
import { useDispatch, useSelector } from "react-redux";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';



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
  //let searchTerm = useSelector((state) => state.search);
  //console.log(searchTerm);

  const courses_card = courses.map((course) => {
    console.log(course)
    return (
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
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    )
  })

  return (
    // <CoursesView courses={courses}/>
    <Grid container spacing={3}>
      <Grid item xs={12}>
        {[courses_card]}
      </Grid>
      <Grid item xs={12}>
      </Grid>
    </Grid>

  );
};

export default Home;
