import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Typography, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import NavTreeView from './NavTreeView'

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        height: "100%",
    },
    header: {
        width: "100%",
        textAlign: "center",
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText
    },
    headerContent: {
        padding: "2rem 0",
    },
    content: {
        height: "100%",
        padding: theme.spacing(2),
        backgroundColor: theme.palette.background.paper,
    },
}));


const NavSideBar = ({ title, iconComponent, complexLinks }) => {
    const classes = useStyles();

    return (<div className={classes.root}>
        <div className={classes.header}>
            <div className={classes.headerContent}>
                <Grid container>
                    <Grid item xs={8}>
                        <Typography variant="h5">
                            {title}
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        {iconComponent}
                    </Grid>
                </Grid>

            </div>
        </div>
        <div className={classes.content}>
            <NavTreeView complexLinks={complexLinks} />
        </div>
    </div>

    );
}

NavSideBar.propTypes = {
    title: PropTypes.string,
    iconComponent: PropTypes.element,
    complexLinks: PropTypes.array,
};

export default NavSideBar