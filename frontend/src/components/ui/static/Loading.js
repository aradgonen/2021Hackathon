import React from 'react'
import PropTypes from 'prop-types'
import { Typography, CircularProgress } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme) => ({
    shadow: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        textAlign: "center",
        backgroundColor: theme.palette.action.disabledBackground,

    },
    loadingSimbol: {
        margin: 0,
        position: "absolute",
        top: "50%",
        left: "50%",
        "-ms-transform": "translate(-50%, -50%)",
        "transform": "translate(-50%, -50%)"
    },
    message: {
        margin: theme.spacing(4),
        color: theme.palette.text.secondary
    }
}));


const Loading = ({ isActive, message = "" }) => {
    const classes = useStyles()

    return isActive ? <div>
        <div className={classes.shadow}>
            <div className={classes.loadingSimbol}>
                <CircularProgress style={{ width: "100px", height: "100px" }} />
                <Typography className={classes.message} variant="h4">{message}</Typography>
            </div>
        </div>
    </div> : null
}

Loading.propTypes = {
    isActive: PropTypes.bool.isRequired,
    message: PropTypes.string
}

export default Loading