import React,{} from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Card,Stepper,Step,StepLabel,StepContent,Typography,Button,TextField } from '@material-ui/core';
import FontAwesomeIcon from 'react-fontawesome';
import SolutionKnowledge from './SolutionKnowledge';
import DynamicForm from './DynamicForm';
const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    backButton: {
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  }));
function handleSubmit(e){
  e.preventDefaults()
}
function getFormByStep(step,label,handleNext){

  switch(step){
    case 0:
      return (<DynamicForm handleSubmit={handleNext} scheme={{type:"STANDART",title:label,fields:[{label:"Title",type:"Text"},{label:"Subject",type:"Text"}]}}/>);
    case 1:
      return (<DynamicForm handleSubmit={handleNext} scheme={{type:"STANDART",title:label,fields:[{label:"Problem",type:"Text"},{label:"Symptoms",type:"Text"},{label:"Cause",type:"Text"},{label:"Solution",type:"Text"}]}}/>);
    case 2:
      return (<div/>);
    default:
      return <div/>;
  }
}
function CreateSolution(props) {
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = ["Solution Details","Enter Flow", "Confirm"];
    const classes = useStyles();
    const [solution, setSolution] = React.useState(); 
    const handleNext = (e) => {
      e.preventDefault()
      for(let val of e.target){
        if(val.name!=""){
          setSolution((solution) => ({...solution, [val.name]:val.value}))

        }
      }
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  
    const handleReset = () => {
      setActiveStep(0);
    };
    const handleFinish = () => {
      console.log(solution);
    }
    return (
      <div className={classes.root}>
        <Paper>        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map(label => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <div>
          {activeStep === steps.length ? (
            <div>
              <Typography className={classes.instructions}>All steps completed</Typography>
              <Button onClick={handleReset}>Reset</Button>
            </div>
          ) : (
            <div>
              <Typography className={classes.instructions}>{getFormByStep(activeStep,steps[activeStep],handleNext)}</Typography>
              <div>
                <Button
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  className={classes.backButton}
                >
                  Back
                </Button>
                {activeStep === steps.length - 1 ? (<Button variant="contained" color="primary" onClick={handleFinish}>
                  Finish
                </Button>) : ''}
                {/* <Button variant="contained" color="primary" onClick={handleNext}>
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button> */}
              </div>
            </div>
          )}
        </div></Paper>

      </div>
    );

}
  export default CreateSolution;