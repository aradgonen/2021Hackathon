import React from 'react'
import PropTypes from 'prop-types'
import { TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { INPUT_STATUS } from '../../../../utils/inputValidation/InputValidations'

const useTextInputStyles = makeStyles({
    input: {
        textAlign: "left",
        width: "100%",
    },
})

const BasicInput = (props) => {
    const { id,
        inputType,
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
    const classes = useTextInputStyles()

    let defValueProp = {}
    if (value === defaultValue) {
        defValueProp = {
            defaultValue: defaultValue
        }
    }

    return (<TextField
        id={id}
        className={classes.input}
        type={inputType}
        label={displayName}
        error={status === INPUT_STATUS.ERROR}
        disabled={isDisabled}
        helperText={message}
        onChange={onChange ? (event) => {
            onChange(event.target.value)
        } : undefined}
        onBlur={onBlur ? (event) => {
            onBlur(event.target.value)
        } : undefined}
        {...settings}
        {...defValueProp}
    />);
}

BasicInput.propTypes = {
    id: PropTypes.node,
    inputType: PropTypes.string,
    displayName: PropTypes.string,
    isDisabled: PropTypes.bool,
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    status: PropTypes.string,
    message: PropTypes.string,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    settings: PropTypes.array
}

export default BasicInput