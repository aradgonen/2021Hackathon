import React from "react";
import CoursesView from '../components/courses_view';
import { useDispatch, useSelector } from "react-redux";

const Home = (props) => {
  let courses = useSelector((state) => state.courses);
  let searchTerm = useSelector((state) => state.search);
  console.log(searchTerm);
  
  return (
      <CoursesView courses={courses}/>
  );
};

export default Home;
