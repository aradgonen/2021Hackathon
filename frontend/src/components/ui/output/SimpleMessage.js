import React from 'react'
import { Typography } from '@material-ui/core'

import { makeStyles } from '@material-ui/styles'


const useSimpleMessageStyles = makeStyles((theme) => ({
    root: {
        marginTop: "5rem",
        width: "100%",
        textAlign: "center"
    },
}));

const SimpleMessage = (props) => {
    const { message } = props
    const classes = useSimpleMessageStyles


    return <div className={classes.root}>
        <Typography variant="h3">{message}</Typography>
    </div>
}

export default SimpleMessage