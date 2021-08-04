import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { FormGroup, FormControl, FormLabel, FormControlLabel, FormHelperText } from '@material-ui/core'
import Checkbox from '@material-ui/core/Checkbox'
import { INPUT_STATUS } from '../../../../utils/inputValidation/InputValidations'

const Checkboxes = (props) => {
    const { id,
        displayName,
        params,
        isDisabled,
        defaultValue,
        value,
        status,
        message,
        onChange,
        onBlur } = props

    const [checked, setCheckedBoxes] = useState([])
    let { boxes } = params

    useEffect(() => {
        if (defaultValue) {
            setCheckedBoxes(defaultValue)
        }
    }, [])

    const handelCheckChange = (currValue, isChecked) => {
        let newValues = null
        if (isChecked)
            newValues = [...checked, currValue]
        else
            newValues = checked.filter((value) => value !== currValue)

        if (onChange)
            onChange(newValues)
        else if (onBlur)
            onBlur(newValues)

        setCheckedBoxes(newValues)
    }



    return (
        <FormControl
            error={status === INPUT_STATUS.ERROR}
            onChange={onChange ? (event) => {
                onChange(event.target.checked)
            } : undefined}
            onBlur={onBlur ? (event) => {
                onBlur(event.target.checked)
            } : undefined}>
            <FormLabel>{displayName}</FormLabel>

            <FormGroup>
                {
                    boxes.map((box) => (
                        <FormControlLabel
                            key={`checkbox-${box.value}`}
                            disabled={box.isDisabled}
                            checked={checked.includes(box.value)}
                            control={
                                <Checkbox
                                    color="primary"
                                />
                            }
                            label={box.title}
                            onChange={(event) =>
                                handelCheckChange(box.value, event.target.checked)}
                        />
                    ))

                }
            </FormGroup>
            <FormHelperText>{message}</FormHelperText>
        </FormControl>

    );
}

Checkboxes.propTypes = {
    id: PropTypes.node,
    displayName: PropTypes.string.isRequired,
    inputType: PropTypes.string,
    isDisabled: PropTypes.bool,
    params: PropTypes.object,
    defaultValue: PropTypes.array,
    value: PropTypes.array,
    status: PropTypes.string,
    message: PropTypes.string,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
}

export default Checkboxes
