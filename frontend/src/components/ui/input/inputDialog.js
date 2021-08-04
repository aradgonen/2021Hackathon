import React, { useState } from 'react';
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles, useTheme } from '@material-ui/styles';
import clsx from 'clsx'

import InputForm from './inputForm'
import { INPUT_STATUS } from '../../../utils/inputValidation/InputValidations'

const useStyles = makeStyles((theme) => ({
    title: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText
    },
    alignToSide: {
        textAlign: "left"
    },
    actions: {
        justifyContent: theme.language === "heIL" ? "flex-start" : "none"
    },
    button: {
        marginRight: theme.spacing(1),
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
    }
}))


const initialState = {
    status: INPUT_STATUS.NONE,
    confirmed: false,
    inputs: []
}

const InputDialog = (props) => {
    const {
        format,
        defaultRecord,
        isOpen,
        onClose,
        onDataSubmit,
        dialogTitle,
        dialogDesc,
        submitText,
        maxWidth,
        cancelText } = props
    const [dialogData, updateDialogData] = useState(initialState)
    const currTheme = useTheme()
    const classes = useStyles()

    const handleClose = () => {
        onClose()
    };

    let dialogMaxWith = maxWidth ? maxWidth : "sm"

    const handleInsert = () => {
        if (dialogData.status == INPUT_STATUS.SUCCESS) {
            // builds the new dialog data
            let newData = {}

            for (let index in dialogData.inputs) {
                newData[dialogData.inputs[index].oKey] = dialogData.inputs[index].value
            }
            onDataSubmit(newData)
            onClose()
        }
        else {
            updateDialogData((state) => ({
                status: state.status,
                confirmed: true,
                inputs: state.inputs
            }))
        }
    };


    const verifyInput = (inputs) => {
        let isValid = true
        for (let fIndx in inputs) {
            if (inputs[fIndx].status == INPUT_STATUS.ERROR) {
                isValid = false
                break;
            }
        }
        updateDialogData({
            status: isValid ? INPUT_STATUS.SUCCESS : INPUT_STATUS.ERROR,
            confirmed: false,
            inputs: inputs
        })
    }

    let errorMessage = null
    if (dialogData.confirmed) {
        let message = ""
        switch (dialogData.status) {
            case INPUT_STATUS.NONE:
                if (currTheme.language == "heIL")
                    message = "אנא מלאו את פרטיכם בטופס"
                else
                    message = "Please, enter your data in the form :)"
                break
            case INPUT_STATUS.ERROR:
                if (currTheme.language == "heIL")
                    message = "אנא וודא שהשדות הבאים תקינים:"
                else
                    message = "Make sure the following fields are corrent: "

                let names = []
                for (let fIndx in dialogData.inputs) {
                    if (dialogData.inputs[fIndx].status == INPUT_STATUS.ERROR) {
                        names.push(dialogData.inputs[fIndx].displayName)
                    }
                }
                message += " " + names.join(", ")
        }
        errorMessage = <Typography variant="body1" color="error"> {message}</Typography>
    }
    return (
        <div>
            <Dialog
                open={isOpen}
                onClose={handleClose}
                maxWidth={dialogMaxWith}
                aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title"
                    className={clsx(classes.alignToSide, classes.title)}
                    disableTypography={true}>
                    <Typography variant="h3">  {dialogTitle}</Typography>
                </DialogTitle>

                <DialogContent>
                    <DialogContentText className={classes.alignToSide}>
                        {dialogDesc}
                    </DialogContentText>
                    {
                        isOpen ? <InputForm format={format}
                            defaultRecord={defaultRecord}
                            onInputChange={verifyInput} /> : null
                    }
                </DialogContent>
                <DialogActions className={classes.actions}>
                    {errorMessage}
                    <Button onClick={handleClose} className={classes.button}>
                        {cancelText}
                    </Button>
                    <Button onClick={handleInsert} className={classes.button}>
                        {submitText}
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

InputDialog.propTypes = {
    format: PropTypes.array.isRequired,
    isOpen: PropTypes.bool.isRequired,
    onDataSubmit: PropTypes.func.isRequired,
    dialogTitle: PropTypes.string.isRequired,
    dialogDesc: PropTypes.string.isRequired,
    submitText: PropTypes.string.isRequired,
    cancelText: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
    defaultRecord: PropTypes.object,
    maxWidth: PropTypes.string,

}
export default InputDialog

