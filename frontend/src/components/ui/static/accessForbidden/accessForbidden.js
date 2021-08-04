import React from 'react'
import { makeStyles, Grid, Typography } from '@material-ui/core'

import './accessForbidden.css'

const useStyles = makeStyles((theme) => ({
    root: {
       
        height: "100%",
        width: "100%",
        backgroundColor: theme.palette.background.default,
        textAlign: "center",
        fontFamily: "Open Sans",
        fontSize: "1.3rem",
    },
    container: {
        marginTop: "22vh"
    },
}));

const AccessForbidden = () => {
    const classes = useStyles()
    console.log(classes.root)

    return <div className={classes.root}>
        <Grid container
            direction="row"
            justify="center"
            alignItems="center"
            className={classes.container}>
            <Grid item
                xs={4}
                className={classes.message}>
                <Typography variant="h1">403</Typography>
                <Typography variant="h4">You Shall Not Pass</Typography>
                <br />
                <Typography variant="h5">It seens like your user hasn't been activated yet.</Typography>
                <Typography variant="h5">Contact the site administrators for access.</Typography>
            </Grid>
            <Grid item xs={4}>
                <div className="gandalf">
                    <div className="fireball"></div>
                    <div className="skirt"></div>
                    <div className="sleeves"></div>
                    <div className="shoulders">
                        <div className="hand left"></div>
                        <div className="hand right"></div>
                    </div>
                    <div className="head">
                        <div className="hair"></div>
                        <div className="beard"></div>
                    </div>
                </div>
            </Grid>
        </Grid>
    </div>
}


export default AccessForbidden