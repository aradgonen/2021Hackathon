import React,{} from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Card,Stepper,Step,StepLabel,StepContent,Typography,Button } from '@material-ui/core';
import FontAwesomeIcon from 'react-fontawesome';
import {useHistory} from "react-router-dom";

function getSteps() {
  return ['Read this file', 'Read this file, and do the Lab', 'Get Ready for test'];
}

function getStepContent(step,subjectIndexToShow) {
  switch (step) {
    case 0:
      if(subjectIndexToShow == 1){
        return "Basic Storage - First Step"
      }
      if(subjectIndexToShow == 2){
        return "EMC - First Step"
      }
      if(subjectIndexToShow == 4){
        return "NetApp - First Step"
      }
      if(subjectIndexToShow == 5){
        return "Network - First Step"
      }
    case 1:
      if(subjectIndexToShow == 1){
        return "Basic Storage - Second Step"
      }
      if(subjectIndexToShow == 2){
        return "EMC - Second Step"
      }
      if(subjectIndexToShow == 4){
        return "NetApp - Second Step"
      }
      if(subjectIndexToShow == 5){
        return "Network - Second Step"
      }
    case 2:
          if(subjectIndexToShow == 1){
            return "Basic Storage - Third Step"
          }
          if(subjectIndexToShow == 2){
            return "EMC - Third Step"
          }
          if(subjectIndexToShow == 4){
            return "NetApp - Third Step"
          }
          if(subjectIndexToShow == 5){
            return "Network - Third Step"
          }
  }
}
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));
function DetailedCourseCard() {
  let subjectIndexToShow = 1
  if(window.location.href.indexOf("2") !== -1) {
      subjectIndexToShow = 2
  }
  if(window.location.href.indexOf("4") !== -1) {
      subjectIndexToShow = 4
  }
  if(window.location.href.indexOf("5") !== -1) {
    subjectIndexToShow = 5
}
  let _history = useHistory()
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  const courses = {1:"Basic Storage",2:"EMC Storage Solutions",4:"NetApp Storage Solutions",5:"Basic Networking"}
  return (
    <div className={classes.root}>
      <Card>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>{courses[subjectIndexToShow]}</Paper>
        </Grid>
        <Grid item xs={12}>
{/* The Steps */}
<Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
            <Grid container spacing={3}>
              <Grid item xs={6}> 
              <Typography>{getStepContent(index,subjectIndexToShow)}</Typography>
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </div>
              </Grid>
              <Grid item xs={6}>
                <Grid container spacing={3}>
                  <Grid item zeroMinWidth>
                    <Typography>{label}</Typography>
                  </Grid>
                  <Grid container zeroMinWidth >
                    {/* List the course files for this step */}
                    <Paper elevation={3} mx="auto" onClick={()=>handleFileClick("https://www.soundczech.cz/temp/lorem-ipsum.pdf")}>PDF</Paper>
                  </Grid>
                </Grid>
                
              </Grid>
              </Grid>
            </StepContent>
            
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={()=>handleExamClick(subjectIndexToShow)} className={classes.button}>
            Go To Test
          </Button>
        </Paper>
      )}
        </Grid>
      </Grid>
      </Card>
    </div>
  );
  function handleFileClick(file_id) {
    window.location.replace("https://www.soundczech.cz/temp/lorem-ipsum.pdf");
  }
    function handleExamClick(exam_id) {
    _history.push(`/exam/${exam_id}`);
  }
}
  export default DetailedCourseCard;