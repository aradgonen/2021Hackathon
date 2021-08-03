import React from 'react';
import {useHistory} from "react-router-dom";
import {Card} from 'react-bootstrap'

function CourseCard(props){

    let _history = useHistory()
      return props.data.courses.map(course => {
      return(
        <Card className="ml-auto mr-auto text-center">  
        </Card>
      )
    })
  }

export default CourseCard