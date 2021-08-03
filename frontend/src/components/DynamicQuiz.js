import React,{} from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Card,Stepper,Step,StepLabel,FormControlLabel,Typography,Button,TextField,Box,Radio,RadioGroup,FormControl,FormLabel } from '@material-ui/core';
import FontAwesomeIcon from 'react-fontawesome';
import SolutionKnowledge from './SolutionKnowledge';
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
  


function DynamicQuiz(props) {
    const form_scheme = props.scheme;
    const form_type = props.scheme.type;
    const [values, setValues] = React.useState([]);
    const [tempKey, setTempKey] = React.useState([]);
    const [tempVal, setTempVal] = React.useState([]);
      const addValue = () => {
        setValues([...values, {tempKey:tempVal}]);
      };

      const deleteValue = (jump) => {
        setValues(values.filter((j) => j !== jump));
      };
      const [value, setValue] = React.useState('');

const handleChange = (event) => {
  setValue(event.target.value);
  props.handleSelect(event);
};
            return (
            <FormControl component="fieldset">
            <FormLabel component="legend">{props.scheme.question}</FormLabel>
            <RadioGroup aria-label={props.scheme.question} name={props.scheme.question} value={value} onChange={handleChange}>
                {form_scheme.answers.map(field =>{
                    return(<FormControlLabel value={field.label} control={<Radio />} label={field.label} />)
                })}
            </RadioGroup>
          </FormControl>
                );
    }

  export default DynamicQuiz;