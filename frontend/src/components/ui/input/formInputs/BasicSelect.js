import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';

import { INPUT_STATUS } from '../../../../utils/inputValidation/InputValidations'

const useStyles = makeStyles((theme) => ({
    formControl: {
        textAlign: "left",
        width: "100%",
    },
    icon: {
        color: "inherit"
    },
    option: {
        padding: theme.spacing(1)
    },
}));

const BasicSelect = (props) => {
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

    let errorComonent = null
    const isError = status === INPUT_STATUS.ERROR
    if (isError)
        errorComonent = <FormHelperText>{message}</FormHelperText>

    return < FormControl
        className={classes.formControl}
        error={status === INPUT_STATUS.ERROR}>
        <InputLabel>{displayName}</InputLabel>
        <Select
            native
            classes={{icon: classes.icon}}
            {...defValueProp}
            onChange={onChange ? (event) => {
                onChange(event.target.value)
            } : undefined}
            onBlur={onBlur ? (event) => {
                onBlur(event.target.value)
            } : undefined}
            {...otherAttrs}>
            <option value="" />
            {
                options.map((option) =>
                    (<option key={option.value}
                        className={classes.option}
                        value={option.value}>
                        {option.title}
                    </option>))
            }
        </Select>
        {errorComonent}
    </FormControl >
}

BasicSelect.propTypes = {
    id: PropTypes.node.isRequired,
    displayName: PropTypes.string.isRequired,
    params: PropTypes.object.isRequired,
    isDisabled: PropTypes.bool,
    defaultValue: PropTypes.string,
    value: PropTypes.string,
    status: PropTypes.string,
    message: PropTypes.string,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
}
export default BasicSelect


