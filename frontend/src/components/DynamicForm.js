import React,{} from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Card,Stepper,Step,StepLabel,StepContent,Typography,Button,TextField,Box } from '@material-ui/core';
import FontAwesomeIcon from 'react-fontawesome';
import SolutionKnowledge from './SolutionKnowledge';
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
  


function DynamicForm(props) {
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
    switch(form_type){
        case "STANDART":
            return (
                <div>
                <form onSubmit={props.handleSubmit}>
                <Typography>{form_scheme.title}</Typography>
                {form_scheme.fields.map(field =>{
                    return(      <TextField
                        label={field.label}
                        variant="filled"
                        type={field.type}
                        name={field.label}
                        required
                      />);
                })}
                <Button type="submit">Next</Button>
            </form>
            
            </div>
            );
        case "KEYVAL":
            
            return (
                <form>
          {values.map((jump, index) => (
            <Box key={"jump" + index}>
              <Grid container spacing={1} alignItems="flex-end">
                <Grid item xs={5}>
                  <TextField
                    autoFocus
                    margin="dense"
                    label="Key"
                    value={tempKey[index]}
                    onChange={(e) => setTempKey(e.target.value)}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={5}>
                  <TextField
                    margin="dense"
                    label="Step"
                    value={tempVal[index]}
                    onChange={(e) => setTempVal(e.target.value)}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={2}>
                  <div
                    className="font-icon-wrapper"
                    onClick={() => deleteValue(jump)}
                  >
                    <IconButton aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  </div>
                </Grid>
              </Grid>

            </Box>
          ))}
                            <Button onClick={addValue} color="primary">
          Add
        </Button>
            </form>
            );
            default:
                return <div/>;
    }

}
  export default DynamicForm;