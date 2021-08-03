import React,{} from 'react';
import * as Survey from "survey-react";
import 'survey-react/survey.css';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
function Exam(props) {
    const [isCompleted, setIsComplete] = React.useState(false);

    function completeHandler(data){
      console.log(data)
      setIsComplete(true)
    }

    let Jsonprops = {
      title : "American History!!!",
      description: "You are about to start Exam by history. <br/>Please click on <b>'Start Exam'</b> button when you are ready.",
      questions : [
          {
              title: "When was the Civil War?",
              choices: [
                  "1750-1800", "1800-1850", "1850-1900", "1900-1950", "after 1950"
              ],
              correctAnswer: "1850-1900"
          },
          {
              title: "Who said 'Give me liberty or give me death?'",
              choices: [
                  "John Hancock", "James Madison", "Patrick Henry", "Samuel Adams"
              ],
              correctAnswer: "Patrick Henry"
          },
          {
            title: "Who said 'Give me liberty or give me death?'",
            choices: [
                "John Hancock", "James Madison", "Patrick Henry", "Samuel Adams"
            ],
            correctAnswer: "Patrick Henry"
        },
        {
          title: "Who said 'Give me liberty or give me death?'",
          choices: [
              "John Hancock", "James Madison", "Patrick Henry", "Samuel Adams"
          ],
          correctAnswer: "Patrick Henry"
      }
      ]
  }

    let completejson = {
      title: Jsonprops.title,
      showProgressBar: "bottom",
      firstPageIsStarted: true,
      startSurveyText: "Start Exam",
      logo: "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg",
      logoPosition: "left",
      pages: [
          {
              questions: [
                  {
                      type: "html",
                      html: Jsonprops.description
                  }
              ]
          }
      ],
      completedHtml: "<h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4>"
  };


  for (const questionnum in Jsonprops.questions){
    let question = Jsonprops.questions[questionnum]
    completejson.pages.push(
      {
        questions: [
            {
                type: "radiogroup",
                title: question.title,
                choicesMin: 1,
                choicesMax: 2,
                //isRequired: true,
                choices: question.choices,
                //description: "Survey Description",
                correctAnswer: question.correctAnswer
            }
        ]
    }
    )
  }
  completejson.completedHtml = "<h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4>"

  const onCompleteComponent = isCompleted ? (
    <div>The component after onComplete event</div>
  ) : null;

      const surveyRender = (
        <Survey.Survey
          json={completejson}
          showCompletedPage={true}
          onComplete={completeHandler}
        />
      )
     
      return (
        <div>
          {surveyRender}
          {onCompleteComponent}
        </div>
      );

}
  export default Exam;