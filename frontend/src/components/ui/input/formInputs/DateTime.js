import React, { useState } from "react";
import PropTypes from 'prop-types'
import { InputAdornment, IconButton } from '@material-ui/core'
import { DateTimePicker } from "@material-ui/pickers";
import EventIcon from '@material-ui/icons/Event';
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%"
    }
}))

const DateTime = (props) => {
    const { id,
        displayName,
        isDisabled,
        defaultValue,
        value,
        status,
        message,
        onChange,
        onBlur,
        settings,
        ...otherConfigs } = props
    const [selectedDate, handleDateChange] = useState(new Date().toString());
    const classes = useStyles()

    let defValueProp = {}
    if (value == defaultValue) {
        defValueProp = {
            value: defaultValue
        }
    }
    return (<DateTimePicker
        className={classes.root}
        disableFuture
        variant="inline"
        InputProps={{
            endAdornment: (
                <InputAdornment position="end">
                    <IconButton>
                        <EventIcon fontSize="default" />
                    </IconButton>
                </InputAdornment>
            ),
        }}
        ampm={false}
        label={displayName}
        value={selectedDate}
        views={["date", "hours", "minutes", "seconds"]}
        format="dd/MM/yyyy HH:mm:ss"
        onChange={handleDateChange}
        onClose={onBlur ? (event) => {
            onBlur(selectedDate)
        } : undefined}
    />
    );
}

DateTime.propTypes = {
    id: PropTypes.node.isRequired,
    displayName: PropTypes.string.isRequired,
    isDisabled: PropTypes.bool,
    defaultValue: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
    value: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
    status: PropTypes.string,
    message: PropTypes.string,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    settings: PropTypes.array
}

export default DateTime;