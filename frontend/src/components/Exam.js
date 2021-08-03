import React,{} from 'react';
import * as Survey from "survey-react";
import 'survey-react/survey.css';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
function Exam() {
    const [isCompleted, setIsComplete] = React.useState(true);
    let json = {
        questions: [
          {
            type: "checkbox",
            name: "car",
            title: "What car are you driving?",
            isRequired: true,
            hasSelectAll: true,
            hasNone: true,
            noneText: "None of the above",
            colCount: 4,
            choicesOrder: "asc",
            choices: [
              "Ford",
              "Tesla",
              "Vauxhall",
              "Volkswagen",
              "Nissan",
              "Audi",
              "Mercedes-Benz",
              "BMW",
              "Peugeot",
              "Toyota",
              "Citroen"
            ]
          }
        ]
      };
      const surveyRender = isCompleted ? (
        <Survey.Survey
          json={json}
          showCompletedPage={false}
          onComplete={setIsComplete}
        />
      ) : null;
      const onCompleteComponent = isCompleted ? (
        <div>The component after onComplete event</div>
      ) : null;
      return (
        <div>
          {surveyRender}
          {onCompleteComponent}
        </div>
      );

}
  export default Exam;