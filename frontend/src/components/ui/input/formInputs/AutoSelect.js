import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';
import { TextField, FormHelperText } from '@material-ui/core'
import Autocomplete from '@material-ui/lab/Autocomplete';
import CheckIcon from '@material-ui/icons/Check';
import clsx from 'clsx'

import { INPUT_STATUS } from '../../../../utils/inputValidation/InputValidations'

const useStyles = makeStyles((theme) => ({
    formControl: {
        textAlign: "left",
    },
    root: {
        textAlign: "left",
    },
    icon: {
        float: "right",
        right: 0,
        width: 17,
        height: 17,
    },
    option: {
        "&:hover": {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText
        },
        width: "100%",
        height: "100%",
        padding: theme.spacing(0.5)
    },
    text: {
        display: "inline-block"
    },
}));

const AutoSelect = (props) => {
    const { id,
        displayName,
        params,
        isDisabled,
        defaultValue,
        value,
        status,
        message,
        onChange,
        onBlur,
        ...otherAttrs } = props
    const classes = useStyles();

    const { options } = params
    // input
    let defValueProp = {}
    if (value == defaultValue) {
        defValueProp = {
            value: defaultValue
        }
    }

    const handelChange = (event, value) => {
        let newValue = ""
        console.log(value)
        if (value)
            newValue = value.value.toString()

        if (onChange)
            onChange(newValue)
        else if (onBlur)
            onBlur(newValue)
    }

    const valueIntoOptions = (value) => {
        return options.find((option) => option.value === value)
    }


    return <Autocomplete
        options={options}
        getOptionLabel={(option) => option.title}
        clearOnEscape
        clearOnBlur
        fullWidth
        defaultValue={valueIntoOptions(defaultValue)}
        renderOption={(option, { selected }) => (
            <div className={classes.option}>
                <div className={classes.text}>
                    {option.title}
                </div>
                <CheckIcon
                    selected={selected}
                    className={clsx(classes.icon, { [classes.selected]: selected })}
                    style={{ visibility: selected ? 'visible' : 'hidden' }}
                />
            </div>
        )}
        renderInput={(params) => (
            <TextField {...params} label={displayName}
                error={status === INPUT_STATUS.ERROR}
                helperText={message}
            />
        )}
        onChange={handelChange} />
}

AutoSelect.propTypes = {
    id: PropTypes.node.isRequired,
    displayName: PropTypes.string.isRequired,
    params: PropTypes.object.isRequired,
    isDisabled: PropTypes.bool,
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    status: PropTypes.string,
    message: PropTypes.string,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
}

export default AutoSelect
