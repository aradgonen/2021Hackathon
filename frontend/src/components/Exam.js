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

function getFormByStep(step,label,handleSelect,subjectIndexToShow){

  if(subjectIndexToShow == 1){
    switch(step){
      case 0:
        return (<DynamicQuiz handleSelect={handleSelect} scheme={{question:label,answers:[{label:"HDD",type:"Text",isCorrect:false},{label:"CD",type:"Text",isCorrect:false},{label:"SSD",type:"Text",isCorrect:true},{label:"Tape",type:"Text",isCorrect:false}]}}/>);
      case 1:
        return (<DynamicQuiz handleSelect={handleSelect} scheme={{question:label,answers:[{label:"File",type:"Text",isCorrect:true},{label:"Block",type:"Text",isCorrect:false},{label:"Both",type:"Text",isCorrect:false},{label:"Neither",type:"Text",isCorrect:false}]}}/>);
      case 2:
        return (<DynamicQuiz handleSelect={handleSelect} scheme={{question:label,answers:[{label:"File",type:"Text",isCorrect:false},{label:"Niether",type:"Text",isCorrect:false},{label:"Both?",type:"Text",isCorrect:false},{label:"Block",type:"Text",isCorrect:true}]}}/>);
      default:
        return <div/>;
    }
  }
  if(subjectIndexToShow == 2){
    switch(step){
      case 0:
        return (<DynamicQuiz handleSelect={handleSelect} scheme={{question:label,answers:[{label:"Not related",type:"Text",isCorrect:false},{label:"All the answers",type:"Text",isCorrect:false},{label:"First and second",type:"Text",isCorrect:false},{label:"Splitting each disk to partinions and create raid-groups",type:"Text",isCorrect:true}]}}/>);
      case 1:
        return (<DynamicQuiz handleSelect={handleSelect} scheme={{question:label,answers:[{label:"Game Engine",type:"Text",isCorrect:false},{label:"All Correct",type:"Text",isCorrect:false},{label:"EMC Server",type:"Text",isCorrect:false},{label:"Unified Storage Array",type:"Text",isCorrect:true}]}}/>);
      case 2:
        return (<DynamicQuiz handleSelect={handleSelect} scheme={{question:label,answers:[{label:"Not Related",type:"Text",isCorrect:false},{label:"Backup Feature",type:"Text",isCorrect:false},{label:"Sync Replication",type:"Text",isCorrect:false},{label:"Manage Hot And Cold Data",type:"Text",isCorrect:true}]}}/>);
      default:
        return <div/>;
    }
  }
  if(subjectIndexToShow == 4){
    switch(step){
      case 0:
        return (<DynamicQuiz handleSelect={handleSelect} scheme={{question:label,answers:[{label:"Not Related",type:"Text",isCorrect:false},{label:"Backup Feature",type:"Text",isCorrect:false},{label:"Sync Replication",type:"Text",isCorrect:false},{label:"Writing Data From FLASH To Disk Phase",type:"Text",isCorrect:true}]}}/>);
      case 1:
        return (<DynamicQuiz handleSelect={handleSelect} scheme={{question:label,answers:[{label:"Not Related",type:"Text",isCorrect:false},{label:"NTFS",type:"Text",isCorrect:false},{label:"EXT4",type:"Text",isCorrect:false},{label:"WAFL",type:"Text",isCorrect:true}]}}/>);
      case 2:
        return (<DynamicQuiz handleSelect={handleSelect} scheme={{question:label,answers:[{label:"Not Related",type:"Text",isCorrect:false},{label:"CDOT",type:"Text",isCorrect:false},{label:"8.3.2",type:"Text",isCorrect:false},{label:"9.9",type:"Text",isCorrect:true}]}}/>);
      default:
        return <div/>;
    }
  }
  if(subjectIndexToShow == 5){
    switch(step){
      case 0:
        return (<DynamicQuiz handleSelect={handleSelect} scheme={{question:label,answers:[{label:"3",type:"Text",isCorrect:false},{label:"4",type:"Text",isCorrect:false},{label:"5",type:"Text",isCorrect:false},{label:"2",type:"Text",isCorrect:true}]}}/>);
      case 1:
        return (<DynamicQuiz handleSelect={handleSelect} scheme={{question:label,answers:[{label:"7",type:"Text",isCorrect:false},{label:"5",type:"Text",isCorrect:false},{label:"8",type:"Text",isCorrect:false},{label:"2",type:"Text",isCorrect:true}]}}/>);
      case 2:
        return (<DynamicQuiz handleSelect={handleSelect} scheme={{question:label,answers:[{label:"5",type:"Text",isCorrect:false},{label:"Many",type:"Text",isCorrect:false},{label:"3",type:"Text",isCorrect:false},{label:"7",type:"Text",isCorrect:true}]}}/>);
      default:
        return <div/>;
    }
  }

}
function Exam(props) {
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
  const steps = {1:["What is faster?","is NAS is Block Or File?", "Is SAN is Block Or File?"],2:["What is Hyper-Volume","What is unity?","What is FAST-VP?"],4:["Explain Consistency-Point","ONTAP FileSystem Name","ONTAP Latest Version"],5:["Wich layer is ARP Protocol?","Wich layer is MAC Address?","How many layers is TCP/IP?"]};  
  const questions = [{question:steps[1][0],
                      answers:[{label:"HDD",type:"Text",isCorrect:false},{label:"CD",type:"Text",isCorrect:false},{label:"SSD",type:"Text",isCorrect:true},{label:"Tape",type:"Text",isCorrect:false}]},
                    {question:steps[1][1],
                      answers:[{label:"File",type:"Text",isCorrect:true},{label:"Block",type:"Text",isCorrect:false},{label:"Both",type:"Text",isCorrect:false},{label:"Neither",type:"Text",isCorrect:false}]},
                    {question:steps[1][2],
                      answers:[{label:"File",type:"Text",isCorrect:false},{label:"Niether",type:"Text",isCorrect:false},{label:"Both?",type:"Text",isCorrect:false},{label:"Block",type:"Text",isCorrect:true}]},
                      {question:steps[2][0],
                        answers:[{label:"Not related",type:"Text",isCorrect:false},{label:"All the answers",type:"Text",isCorrect:false},{label:"First and second",type:"Text",isCorrect:false},{label:"Splitting each disk to partinions and create raid-groups",type:"Text",isCorrect:true}]},
                        {question:steps[2][1],
                          answers:[{label:"Game Engine",type:"Text",isCorrect:false},{label:"All Correct",type:"Text",isCorrect:false},{label:"EMC Server",type:"Text",isCorrect:false},{label:"Unified Storage Array",type:"Text",isCorrect:true}]},
                          {question:steps[2][2],
                            answers:[{label:"Not Related",type:"Text",isCorrect:false},{label:"Backup Feature",type:"Text",isCorrect:false},{label:"Sync Replication",type:"Text",isCorrect:false},{label:"Manage Hot And Cold Data",type:"Text",isCorrect:true}]},
                            {question:steps[4][0],
                              answers:[{label:"Not Related",type:"Text",isCorrect:false},{label:"Backup Feature",type:"Text",isCorrect:false},{label:"Sync Replication",type:"Text",isCorrect:false},{label:"Writing Data From FLASH To Disk Phase",type:"Text",isCorrect:true}]},
                              {question:steps[4][1],
                                answers:[{label:"Not Related",type:"Text",isCorrect:false},{label:"NTFS",type:"Text",isCorrect:false},{label:"EXT4",type:"Text",isCorrect:false},{label:"WAFL",type:"Text",isCorrect:true}]},
                                {question:steps[4][2],
                                  answers:[{label:"Not Related",type:"Text",isCorrect:false},{label:"CDOT",type:"Text",isCorrect:false},{label:"8.3.2",type:"Text",isCorrect:false},{label:"9.9",type:"Text",isCorrect:true}]},
                                  {question:steps[5][0],
                                    answers:[{label:"3",type:"Text",isCorrect:false},{label:"4",type:"Text",isCorrect:false},{label:"5",type:"Text",isCorrect:false},{label:"2",type:"Text",isCorrect:true}]},
                                    {question:steps[5][1],
                                      answers:[{label:"7",type:"Text",isCorrect:false},{label:"5",type:"Text",isCorrect:false},{label:"8",type:"Text",isCorrect:false},{label:"2",type:"Text",isCorrect:true}]},
                                      {question:steps[5][2],
                                        answers:[{label:"5",type:"Text",isCorrect:false},{label:"Many",type:"Text",isCorrect:false},{label:"3",type:"Text",isCorrect:false},{label:"7",type:"Text",isCorrect:true}]},
                                    ]
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
          {steps[subjectIndexToShow].map((label, index) => (
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
              <Typography className={classes.instructions}>{getFormByStep(activeStep,steps[subjectIndexToShow][activeStep],handleSelect,subjectIndexToShow)}</Typography>
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