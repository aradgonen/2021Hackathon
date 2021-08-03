// import { Button } from 'bootstrap';
import React from 'react';
import Button from '@material-ui/core/Button';
// import {
//   useHistory 
// } from "react-router-dom";

function UDetails(props) {
  // let _history = useHistory()
    let dataArray = []
    Object.entries(props.uData).forEach(([key, value]) => {
      if(key !== '_links') {
        if(typeof(value) === 'object'){
          Object.entries(value).forEach(([name,data]) => {
            dataArray.push(<div>{name} : {data}</div>)
          })
        }
        else{
          dataArray.push(<div>{key} : {value}</div>)
        }
      }
    })
    return (
      <React.Fragment>
      {dataArray}
      <Button variant="contained" color="primary" onClick={()=>handleEditButton(props.rack_id)}>Edit U</Button>
      </React.Fragment>
    );
    function handleEditButton(rack_id){
    
      // _history.push(`/rack/edit/${rack_id}`);
    }
  }


  export default UDetails;