import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { green } from '@material-ui/core/colors'
import { FormGroup, FormControl, FormHelperText, FormControlLabel } from '@material-ui/core'
import Checkbox from '@material-ui/core/Checkbox'
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank'
import CheckBoxIcon from '@material-ui/icons/CheckBox'
import Favorite from '@material-ui/icons/Favorite'
import FavoriteBorder from '@material-ui/icons/FavoriteBorder'
import { INPUT_STATUS } from '../../../../utils/inputValidation/InputValidations'

const MyCheckbox = (props) => {
    const { id,
        displayName,
        isDisabled,
        defaultValue,
        value,
        status,
        message,
        onChange,
        onBlur } = props

    let checkBoxProps = {}
    if (value && value === defaultValue) {
        checkBoxProps = {
            checked: defaultValue
        }
    }

    return (
        <FormControl
            error={status === INPUT_STATUS.ERROR}
            component="fieldset">
            <FormControlLabel
                disabled={isDisabled}
                control={
                    <Checkbox
                        {...checkBoxProps}
                        color="primary"
                        icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                        checkedIcon={<CheckBoxIcon fontSize="small" />}
                        name="checkedI"
                    />
                }
                label={displayName}
                onChange={(event) => {
                    if (onChange)
                        onChange(event.target.checked)
                    else if (onBlur)
                        onBlur(event.target.checked)
                }}
            />
            <FormHelperText>{message}</FormHelperText>
        </FormControl>

    );
}

MyCheckbox.propTypes = {
    id: PropTypes.node,
    inputType: PropTypes.string,
    displayName: PropTypes.string.isRequired,
    isDisabled: PropTypes.bool,
    defaultValue: PropTypes.bool,
    params: PropTypes.object,
    value: PropTypes.bool,
    status: PropTypes.string,
    message: PropTypes.string,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
}

export default MyCheckbox
