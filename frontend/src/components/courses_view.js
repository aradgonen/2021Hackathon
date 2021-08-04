import React from 'react';
import { Box } from '@material-ui/core';
import CourseCard from './course_card'
import DetailedCourseCard from './detailed_course_card';

function CoursesView(props) {
  return(
      <DetailedCourseCard courseId={props.courseId}></DetailedCourseCard>
    )
}
  export default CoursesView;