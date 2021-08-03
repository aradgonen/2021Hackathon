import React, { useState, useEffect } from "react";
import DataService from "../services/data.service";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

const AddDevicesToRack = () => {
  const [devices, setDevices] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    DataService.getHomelessDevices().then(
      (response) => {
        setDevices(response.data);
      },
      (error) => {
        const _devices =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setDevices(_devices);
      }
    );
  }, []);

  return (
    <div className="container">
      <header className="jumbotron">
      <FormControl className={classes.formControl} >
        <InputLabel id="demo-simple-select-label">Device</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
        >
        {devices.map(device => {
            return (
                <MenuItem value={device.id}>{device.id}</MenuItem>
            );
        })}
        </Select>
      </FormControl>
      </header>
    </div>
  );
};

export default AddDevicesToRack;
