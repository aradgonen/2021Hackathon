import React from 'react';
import PropTypes from 'prop-types'
import { SnackbarContent } from 'notistack';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';

import useNotifier from './useNotifier'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));


const Snackbar = React.forwardRef((props, ref) => {
    const { key, message, severity, isDeletable, format } = props
    const classes = useStyles();
    const { unotify } = useNotifier()

    const handleDismiss = () => {
        unotify(key);
    };

    let alertOptions = {}
    console.log(`key [${key}] message [${message}] sevirity [${severity}]`)
    if (isDeletable)
        alertOptions.onClose = handleDismiss
    return (
        <SnackbarContent ref={ref} className={classes.root}>
            <Alert sevirity={severity} {...alertOptions}>
                {message}
            </Alert>
        </SnackbarContent >
    );
});

Snackbar.propTypes = {
    key: PropTypes.node.isRequired,
    message: PropTypes.string.isRequired,
    severity: PropTypes.oneOf(["success", "error", "info", "warning"]).isRequired,
    isDeletable: PropTypes.bool.isRequired,
    format: PropTypes.object.isRequired,
}


export default Snackbar;