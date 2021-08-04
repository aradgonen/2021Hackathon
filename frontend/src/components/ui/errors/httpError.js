import React from 'react'

import { Typography, Grid, Box } from '@material-ui/core'
import ErrorIcon from '@material-ui/icons/Error';
import { makeStyles } from '@material-ui/styles'

const useHttpErrorStyles = makeStyles((theme) => ({
    errorRoot: {
        width: "100%",
    },
    errorTitle: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    errorIcon: {
        fontSize: theme.spacing(6),
        marginRight: theme.spacing(2)
    }
}));

const HttpError = (props) => {
    const { errCode, errTitle, errDesc } = props
    const classes = useHttpErrorStyles()

    return <div className={classes.errorRoot}>
        <Grid container direction="column" alignItems="stretch" spacing={4}>
            <Grid item className={classes.errorTitle} >
                <ErrorIcon className={classes.errorIcon}
                    fontSize="large"
                    color="error" />
                <Typography variant="h3" color="error">
                    <Box fontWeight="fontWeightBold">
                        {errTitle + " " + errCode}
                    </Box>
                </Typography>
            </Grid>
            <Grid item >
                <Typography variant="h4">
                    <Box fontWeight="fontWeightBold" textAlign="center">
                        {errDesc}
                    </Box>
                </Typography>
            </Grid>
        </Grid>
    </div>
}

export default HttpError