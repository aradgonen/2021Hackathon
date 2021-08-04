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
import DynamicQuiz from './DynamicQuiz';
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

function getFormByStep(step,label,handleSelect){

  switch(step){
    case 0:
      return (<DynamicQuiz handleSelect={handleSelect} scheme={{question:label,answers:[{label:"HDD",type:"Text",isCorrect:false},{label:"CD",type:"Text",isCorrect:false},{label:"SSD",type:"Text",isCorrect:true},{label:"Tape",type:"Text",isCorrect:false}]}}/>);
    case 1:
      return (<DynamicQuiz handleSelect={handleSelect} scheme={{question:label,answers:[{label:"Yes",type:"Text",isCorrect:true},{label:"No",type:"Text",isCorrect:false},{label:"Maybe",type:"Text",isCorrect:false},{label:"Hahahaha",type:"Text",isCorrect:false}]}}/>);
    case 2:
      return (<DynamicQuiz handleSelect={handleSelect} scheme={{question:label,answers:[{label:"Yes",type:"Text",isCorrect:false},{label:"No",type:"Text",isCorrect:false},{label:"What?",type:"Text",isCorrect:false},{label:"Maybe",type:"Text",isCorrect:true}]}}/>);
    default:
      return <div/>;
  }
}
function Exam(props) {
  const steps = ["What is faster?","is Mamram Gay?", "Oded Nimzha?"];  
  const questions = [{question:steps[0],answers:[{label:"HDD",type:"Text",isCorrect:false},{label:"CD",type:"Text",isCorrect:false},{label:"SSD",type:"Text",isCorrect:true},{label:"Tape",type:"Text",isCorrect:false}]},{question:steps[1],answers:[{label:"Yes",type:"Text",isCorrect:true},{label:"No",type:"Text",isCorrect:false},{label:"Maybe",type:"Text",isCorrect:false},{label:"Hahahaha",type:"Text",isCorrect:false}]},{question:steps[2],answers:[{label:"Yes",type:"Text",isCorrect:false},{label:"No",type:"Text",isCorrect:false},{label:"What?",type:"Text",isCorrect:false},{label:"Maybe",type:"Text",isCorrect:true}]}]
    const [activeStep, setActiveStep] = React.useState(0);
    const classes = useStyles();
    const [solution, setSolution] = React.useState(); 
    const [score, setScore] = React.useState();
    const handleNext = (e,questions) => {
      if(e.target.innerHTML == "Finish"){
        handleFinish(questions)
      }
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    const handleSelect = (e) => {
      e.preventDefault()

      setSolution((solution) => ({...solution, [e.target.name]:e.target.value}))
    }
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  
    const handleReset = () => {
      setActiveStep(0);
    };
    const handleFinish = (questions) => {
      let correctAnswers = 0;
      for(let question of questions){
        if(solution[question.question] == (question.answers.filter((answer)=> answer.isCorrect)[0]).label){
          correctAnswers = correctAnswers + 1;
        }
      }
      setScore((correctAnswers/questions.length)*100)
      console.log("You got ",correctAnswers, " from ",questions.length, " questions");
    }
    return (
      <div className={classes.root}>
        <Paper>        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel>{"Question "+(index+1)}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <div>
                            {activeStep === steps.length ? (
            <div>
              <Typography className={classes.instructions}>All steps completed - You got {score} Points</Typography>
            </div>
          ) : (
            <div>
              <Typography className={classes.instructions}>{getFormByStep(activeStep,steps[activeStep],handleSelect)}</Typography>
              <div>
                <Button
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  className={classes.backButton}
                >
                  Back
                </Button>
                <Button variant="contained" color="primary" onClick={(e) => handleNext(e,questions)}>
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
              </div>
            </div>
          )}
        </div></Paper>

      </div>
    );

}
  export default Exam;