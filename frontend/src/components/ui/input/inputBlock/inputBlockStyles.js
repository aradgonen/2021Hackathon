import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
    inputBlock: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        paddingTop: theme.spacing(3),
        backgroundColor: theme.palette.background.paper,
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));