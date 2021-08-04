import React from 'react'
import { Typography } from '@material-ui/core'

import { makeStyles } from '@material-ui/styles'


const useSimpleOutputgeStyles = makeStyles((theme) => ({
    root: {
        marginTop: "1rem",
        marginBottom: "1rem",
        textAlign: "left"
    },
}));

const SimpleOutput = (props) => {
    const { format } = props
    const classes = useSimpleOutputgeStyles

    return <div className={classes.root}>
        <Typography variant="h6">{format.title + ": " + format.value}</Typography>
    </div>
}

export default SimpleOutput