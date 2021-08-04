import React from 'react';

import { Typography, Box } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { red, blue, cyan, green, orange } from '@material-ui/core/colors'
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx'

const useStyles = makeStyles((theme) => ({
    warningColor: {
        color: theme.palette.type == "dark" ? orange[400] : orange[700]
    },
    errorColor: {
        color: red["A700"]
    },
    criticalColor: {
        color: red["A700"]
    },
    logScreen: {
        overflowY: "auto",
        maxHeight: theme.spacing(40),
        minHeight: theme.spacing(40),
    },
    cell: {
        padding: "0px",
    },
    lineCell: {
        paddingLeft: "16px",
    },
    logCell: {
        paddingLeft: "16px",
        width: "100%",
    }


}))

const LogScreen = (props) => {
    const { logs } = props
    const classes = useStyles()

    return <div className={classes.logScreen}>
        <Table className={classes.table} aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell align="left"><Typography variant="h5">line</Typography></TableCell>
                    <TableCell align="left"><Typography variant="h5">time</Typography></TableCell>
                    <TableCell align="left"><Typography variant="h5">log</Typography></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {

                    logs.map((log, index) => {
                        let time = new Date(0); // Epoch
                        time.setUTCSeconds(log.time + 3 * 3600);

                        let colorClass = null
                        switch (log.level) {
                            case "DEBUG":
                                colorClass = classes.debugColor
                                break
                            case "INFO":
                                colorClass = classes.infoColor
                                break
                            case "WARNING":
                                colorClass = classes.warningColor
                                break
                            case "ERROR":
                                colorClass = classes.errorColor
                                break
                            case "CRITICAL":
                                colorClass = classes.criticalColor
                                break
                        }
                        return <TableRow key={"log_line_" + index}>
                            <TableCell className={clsx(classes.cell, classes.lineCell)} align="left">
                                <Typography variant="h5" className={colorClass}>{index + 1}</Typography>
                            </TableCell>
                            <TableCell className={classes.cell} align="left">
                                <Typography variant="h5" className={colorClass}>{time.toISOString().substr(11, 8)}</Typography>
                            </TableCell>
                            <TableCell className={clsx(classes.cell, classes.logCell)} align="left">
                                <Typography variant="h5" className={colorClass}>
                                    {log.log}
                                </Typography>
                            </TableCell>

                        </TableRow>
                    })}
            </TableBody>
        </Table>
    </div>
}

export default LogScreen