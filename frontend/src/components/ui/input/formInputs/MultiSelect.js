import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';
import { Box, TextField, FormHelperText, Chip } from '@material-ui/core'
import Autocomplete from '@material-ui/lab/Autocomplete';
import CheckIcon from '@material-ui/icons/Check';
import clsx from 'clsx'
import { INPUT_STATUS } from '../../../../utils/inputValidation/InputValidations'

const useStyles = makeStyles((theme) => ({
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
const MultiSelect = (props) => {
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


    const handelChange = (event, value) => {
        let newValue = ""
        console.log(value)
        if (value) {
            newValue = value.map((item) => (item.value))
        }

        if (onChange)
            onChange(newValue)
        else if (onBlur)
            onBlur(newValue)
    }

    const valueIntoOptions = (values) => {
        return options.filter((option) => values.includes(option.value))
    }

    return <div className={classes.root}>
        <Autocomplete
            options={options}
            getOptionLabel={(option) => option.title}
            disableCloseOnSelect
            clearOnEscape
            clearOnBlur
            fullWidth
            multiple
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
            renderTags={(tags, getTagProps) => (tags.map((tag, index) =>
                (<Chip label={tag.title}
                    color="primary"
                    size="small"
                    {...getTagProps({ index })} />)))}
            renderInput={(params) => (
                <TextField {...params} label={displayName}
                    error={status === INPUT_STATUS.ERROR}
                    helperText={message}
                />
            )}
            onChange={handelChange} />
    </div>
}

MultiSelect.propTypes = {
    id: PropTypes.node.isRequired,
    displayName: PropTypes.string.isRequired,
    params: PropTypes.object.isRequired,
    isDisabled: PropTypes.bool,
    defaultValue: PropTypes.array,
    value: PropTypes.array,
    status: PropTypes.string,
    message: PropTypes.string,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
}
export default MultiSelect


