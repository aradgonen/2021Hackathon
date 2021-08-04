import React, { } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Card, Stepper, Step, StepLabel, StepContent, Typography, Button } from '@material-ui/core';
import FontAwesomeIcon from 'react-fontawesome';
import SolutionKnowledge from './SolutionKnowledge';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    padding: theme.spacing(3)
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
}));

function SolutionFlow(props) {
  const { problem, symptoms, cause, solution } = props
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const steps = [
    { title: "problem", data: problem },
    { title: "symptoms", data: symptoms },
    { title: "cause", data: cause },
    { title: "solution", data: solution },
  ];

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map(({ title, data }) => (
          <Step key={data}>
            <StepLabel>{title}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>All steps completed</Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>) :
          (<div>
            <Typography className={classes.instructions} >
              {steps[activeStep].data}
            </Typography>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton} size="small">
                Back
                </Button>
              <Button variant="contained" color="primary" onClick={handleNext} size="small">
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>)}
      </div>
    </div>
  );

}
export default SolutionFlow;