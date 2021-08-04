import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSnackbar } from 'notistack';
import { IconButton } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/styles'
import Snackbar from './Snackbar'
import { removeSnackbar, deleteNotification } from '../../../store/actionCreators/index'
let displayed = [];

const useStyles = makeStyles((theme) => ({
    exitButton: {
        margin: theme.spacing(1),
    }
}))
const Notifier = () => {
    const dispatch = useDispatch();
    const classes = useStyles()
    const notifications = useSelector(store => store.notifications.notifications || []);
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    const storeDisplayed = (key) => {
        displayed = [...displayed, key];
    };

    const removeDisplayed = (key) => {
        displayed = [...displayed.filter(key => key !== key)];
    };

    React.useEffect(() => {
        notifications.forEach((notification) => {
            const { key,
                message,
                variant,
                format = {},
                options = {},
                dismissed = false } = notification
            console.log(dismissed)
            if (dismissed) {
                // dismiss snackbar using notistack
                closeSnackbar(key);
                return;
            }

            // do nothing if snackbar is already displayed
            if (displayed.includes(key)) return;

            const persist = options.persist || false
            const horizontal = options.persist ? "center" : options.horizontal || 'right'
            console.log({ vertical: options.vertical || 'bottom', horizontal })
            // display snackbar using notistack
            enqueueSnackbar(message, {
                key,
                variant,
                persist,
                anchorOrigin: { vertical: options.vertical || 'bottom', horizontal },
                autoHideDuration: options.persist || 5000,
                action: !persist ? (key) =>
                    (<IconButton aria-label="delete"
                        onClick={() => dispatch(removeSnackbar(key))}
                        className={classes.margin}
                        size="medium">
                        <CloseIcon fontSize="inherit" size="medium" />
                    </IconButton>) : undefined,
                onExited: (event, key) => {
                    // remove this snackbar from redux store
                    dispatch(deleteNotification(key));
                },
            });

            // keep track of snackbars that we've displayed
            storeDisplayed(key);
        });
    }, [notifications, closeSnackbar, enqueueSnackbar, dispatch]);

    return null;
};

export default Notifier;
