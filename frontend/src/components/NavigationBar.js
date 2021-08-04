
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles';
import m2e_logo from '../images/m2e_logo.png'
import {
    AppBar,
    Toolbar,
    MenuItem,
    FormControl, 
    Select,
    FormHelperText,
} from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
    root: {
        paddingLeft: '4vw',
        paddingRight: '4vw',
    },
    siteLogo: {
        marginTop: '.5rem',
        marginRight: '1vw'
    },
    link: {
        marginRight: "1rem",
        fontSize: "1.2rem",
        textDecoration: "none",
        color: theme.palette.text.nav.nonActive,
        "&:hover": {
            color: theme.palette.text.nav.hover
        },
    },
    activeLink: {
        color: theme.palette.text.nav.active,
        fontWeight: 700,
        cursor: "default",
        "&:hover": {
            color: theme.palette.text.nav.active,
        },
    },
    profile: {
        marginLeft: 'auto',
        width: theme.spacing(4),
        height: theme.spacing(4),
    },
    mavbarFooter: {
        marginLeft: "auto",
    }

}));


const NavigationBar = (props) => {
    const {
        onThemeChange,
        currTheme
    } = props

    const classes = useStyles();
   
    return <div>
        <AppBar position="sticky" >
            <Toolbar className={classes.root}>
                <NavLink to="/"
                    className={classes.link}>
                    <img alt="m2e homepage" src={m2e_logo} width="30" height="30" className={classes.siteLogo} />
                </NavLink>
                <NavLink to="/home"
                    className={classes.link}
                    activeClassName={classes.activeLink}>
                    Home
                </NavLink>
                <NavLink to="/subjects"
                    className={classes.link}
                    activeClassName={classes.activeLink}>
                    Subjects
                </NavLink>
                <NavLink to="/courses"
                    className={classes.link}
                    activeClassName={classes.activeLink}>
                    Courses
                </NavLink>
                <NavLink to="/sk"
                    className={classes.link}
                    activeClassName={classes.activeLink}>
                    Solution knowledge
                </NavLink>
                <NavLink to="/exam"
                    className={classes.link}
                    activeClassName={classes.activeLink}>
                    Exam
                </NavLink>
                <NavLink to="/create/solution"
                    className={classes.link}
                    activeClassName={classes.activeLink}>
                    Create Solution
                </NavLink>
                <NavLink to="/course/detail"
                    className={classes.link}
                    activeClassName={classes.activeLink}>
                    Course Detail
                </NavLink>
                <NavLink to="/personal"
                    className={classes.link}
                    activeClassName={classes.activeLink}>
                    Personal
                </NavLink>
                <div className={classes.mavbarFooter}>
                    <FormControl className={classes.formControl}>
                        <Select
                            value={currTheme}
                            onChange={(event) => onThemeChange(event.target.value)}
                            displayEmpty >
                            <MenuItem value={"dark"}>Dark Mode</MenuItem>
                            <MenuItem value={"light"}>Light Mode</MenuItem>
                            <MenuItem value={"pink"}>Pink Mode</MenuItem>
                        </Select>
                    </FormControl>
                    <NavLink to="/login"
                    className={classes.link}
                    activeClassName={classes.activeLink}>
                    Login
                </NavLink>
                <NavLink to="/logout"
                    className={classes.link}
                    activeClassName={classes.activeLink}>
                    Logout
                </NavLink>
                </div>
            </Toolbar>
        </AppBar>
    </div>

}

export default NavigationBar;




