import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { Grid, GridList, GridListTile } from "@material-ui/core"
import cloneDeep from 'lodash/cloneDeep';

import GeneralInput from './formInputs/GeneralInput'
import { runCheckProcess, INPUT_STATUS } from '../../../utils/inputValidation/InputValidations'


const useInputBlockStyles = makeStyles((theme) => ({
    inputForm: {
        display: "inline-block",
    },
    gridList: {
        flexDirection: theme.direction == "rtl" ? "row-reverse" : "row"
    },
    toLeft: {
        textAlign: "left"
    },
}));


const InputForm = ({ format, onInputChange, defaultRecord = {} }) => {
    const classes = useInputBlockStyles()
    const [formInfo, updateFormInfo] = useState(undefined)
    const currTheme = useTheme()

    // Updates state (formInfo) on prop (format) change
    useEffect(() => {

        // Sets the default values received from the default record
        let newFormat = cloneDeep(format)
        let record = cloneDeep(defaultRecord)
        newFormat.forEach((input) => {
            if (record[input.iKey])
                input.defaultValue = record[input.iKey]
        })

        let formInfo = {}
        newFormat.forEach((input) => {
            let defaultValue = input.defaultValue ? input.defaultValue : "";
            let initStatus = INPUT_STATUS.SUCCESS
            let initMessage = ""
            if (input.validation)
                [initStatus, initMessage] = verifyValue(defaultValue, input.validation)

            const isRequired = input.validation && input.validation.isRequired
            let inputInfo = {
                defaultValue: defaultValue,
                value: defaultValue,
                status: initStatus,
                wasVisited: false,
                message: initMessage,
                validation: input.validation,
                displayName: `${isRequired ? "*" : ""}${input.displayName}`,
                oKey: input.oKey
            }
            formInfo[input.id] = inputInfo
        })

        updateFormInfo(formInfo);
    }, [format]);

    const verifyValue = (value, validation) => {
        let status = INPUT_STATUS.SUCCESS;
        let message = "";

        // if there is no value
        if (!value || Array.isArray(value) && value.length === 0 || value === "" || value === false) {
            if (validation.isRequired) {
                status = INPUT_STATUS.ERROR;
                if (currTheme.language == "heIL")
                    message = " שדה זה הכרחי"
                else
                    message = "This field is required"
            }
        }

        // checks for errors in the input value
        if (validation.validationProcess &&
            status === INPUT_STATUS.SUCCESS) {
            const [isValid, errMessage] =
                runCheckProcess(value, validation.validationProcess)
            if (!isValid) {
                status = INPUT_STATUS.ERROR;
                message = errMessage
            }
        }

        // Checks for warnings in the input value
        if (validation.warningProcess &&
            status === INPUT_STATUS.SUCCESS) {
            const [isValid, warningMessage] =
                runCheckProcess(value, validation.warningProcess)
            if (!isValid) {
                status = INPUT_STATUS.WARNNING;
                message = warningMessage
            }
        }
        return [status, message]
    }
    const handleInputChange = (value, id) => {
        // updates input value in states
        let formInfoNew = { ...formInfo }
        formInfoNew[id].value = value

        console.log(`output: value: ${value} type: ${typeof(value)}`)
        let status = INPUT_STATUS.SUCCESS
        let message = ""
        const validation = formInfoNew[id].validation
        if (validation)
            [status, message] = verifyValue(value, validation)

        formInfoNew[id].status = status;
        formInfoNew[id].message = message;
        formInfoNew[id].wasVisited = true

        // builds the input report
        let reportFormInfo = []
        for (let id in formInfoNew) {
            reportFormInfo.push({
                displayName: formInfoNew[id].displayName,
                oKey: formInfoNew[id].oKey,
                status: formInfoNew[id].status,
                value: formInfoNew[id].value
            })
        }

        onInputChange(reportFormInfo)
        updateFormInfo(formInfoNew)
    }

    let inputBlocks = null;
    if (formInfo) {
        let blocks = format.map((inputField) => {
            const { type, id, size, params, otherAttrs } = inputField

            // In a case of prop change 
            // There is a little delay of time until the state is updated from prop
            // Because of the useEffect (is called after update) and useState method (async)
            // Not best immplementation :) 
            if (!(id in formInfo)) {
                return <div></div>
            }

            const { value, status, wasVisited, displayName, message, defaultValue } = formInfo[id]

            return <GridListTile
                className={classes.toLeft}
                key={id}
                rows={size && size.rows ? size.rows : 2}
                cols={size && size.cols ? size.cols : 2}>
                <GeneralInput
                    id={id}
                    type={type}
                    displayName={displayName}
                    value={value}
                    defaultValue={defaultValue}
                    params={params}
                    status={!wasVisited ? INPUT_STATUS.NONE : status}
                    message={wasVisited ? message : ""}
                    onBlur={(value) => handleInputChange(value, id)}
                    {...otherAttrs}
                />
            </GridListTile>
        })
        inputBlocks = <GridList
            className={classes.gridList}
            spacing={4}
            cols={8}
            cellHeight="auto">
            {blocks}
        </GridList>
    }
    return <div className={classes.inputForm} >
        <Grid container>
            {inputBlocks}
        </Grid>
    </div>
}

InputForm.propTypes = {
    format: PropTypes.array.isRequired,
    onInputChange: PropTypes.func.isRequired,
    defaultRecord: PropTypes.object,
};

export default InputForm