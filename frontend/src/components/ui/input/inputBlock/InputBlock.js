import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'

import { Grid, Button, Typography } from "@material-ui/core"
import { useTheme } from '@material-ui/styles'
import { INPUT_STATUS } from '../../../../utils/inputValidation/InputValidations'
import InputForm from '../inputForm'
import useInputBlockStyles from './inputBlockStyles'
import Axios from 'axios';


const isValidStatus = (status, isRequired) => {
    return ((status === INPUT_STATUS.NONE && !isRequired) ||
        status === INPUT_STATUS.SUCCESS);
}

const initialState = {
    status: INPUT_STATUS.NONE,
    confirmed: false,
    submited: false,
    inputs: []
}


const InputBlock = (props) => {
    const { format, postUrl, handleResponse, handleHttpError, token } = props
    const currTheme = useTheme()
    const classes = useInputBlockStyles()

    const [blockData, updateBlockData] = useState(initialState)

    useEffect(() => {
        updateBlockData(initialState)
    }, [props.format, props.postUrl]);
    // Building forn stats data objects


    const handleSubmit = (event) => {
        event.preventDefault()
        if (blockData.status == INPUT_STATUS.SUCCESS) {
            // builds the new data
            let newData = {}
            for (let index in blockData.inputs) {
                newData[blockData.inputs[index].oKey] = blockData.inputs[index].value
            }
            onServerSubmit(newData)
            updateBlockData((state) => ({
                ...state,
                submited: false,
            }))
        }
        else {
            updateBlockData((state) => ({
                ...state,
                confirmed: true,
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
        updateBlockData({
            status: isValid ? INPUT_STATUS.SUCCESS : INPUT_STATUS.ERROR,
            confirmed: false,
            inputs: inputs
        })
    }

    const onServerSubmit = (data) => {
        Axios.post(postUrl, {
            payload: data,
            token: token
        }).then((response) => {
            handleResponse(response)
        }).catch((error) => {
            handleHttpError(error.response)
        })
    }



    let errorMessage = null
    if (blockData.confirmed) {
        let message = ""
        switch (blockData.status) {
            case INPUT_STATUS.NONE:
                if (currTheme.language == "heIL")
                    message = "אנא מלאו את הפרטים בטופס"
                else
                    message = "Please enter data in the form"
                break
            case INPUT_STATUS.ERROR:
                if (currTheme.language == "heIL")
                    message = "אנא וודא שהשדות הבאים תקינים:"
                else
                    message = "Please make sure the following fields are corrent: "

                let names = []
                for (let fIndx in blockData.inputs) {
                    if (blockData.inputs[fIndx].status == INPUT_STATUS.ERROR) {
                        names.push(blockData.inputs[fIndx].displayName)
                    }
                }
                message += " " + names.join(", ")
        }
        errorMessage = <Typography variant="body1" color="error"> {message}</Typography>
    }

    return <div className={classes.inputBlock}>
        <form onSubmit={handleSubmit} noValidate autoComplete="off" >
            <Grid
                container
                spacing={2}
                direction="column">
                <InputForm format={format} onInputChange={verifyInput} />
                <Grid container
                     direction="row"
                     justify="space-between"
                    alignItems="center">
                    <Grid item>
                        {errorMessage}
                    </Grid>
                    <Grid item
                        xs={2}
                        alignItems="flex-end">
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            disabled={blockData.submited}
                            className={classes.submit}>
                            Run
                    </Button>
                    </Grid>
                </Grid>
            </Grid>
        </form>
    </div>
}

const mapStateToProps = (state) => {
    return {
        token: state.account.token
    }
}

export default connect(mapStateToProps)(InputBlock)