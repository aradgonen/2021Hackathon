import React, { useState } from 'react'
import { TreeItem } from '@material-ui/lab'
import { withStyles, fade, } from '@material-ui/core/styles';

const NavTreeItem = withStyles((theme) => ({
    root: {
        color: theme.palette.text.secondary,
        '&:focus > $content, &$selected > $content': {
            backgroundColor: theme.palette.primary.light,
            color: theme.palette.primary.contrastText,
        },
        '&:focus > $content $label, &:hover > $content $label, &$selected > $content $label': {
            backgroundColor: 'transparent',
        },
    },
    content: {
        color: theme.palette.text.secondary,
        borderTopRightRadius: theme.spacing(2),
        borderBottomRightRadius: theme.spacing(2),
        padding: theme.spacing(1),
        fontWeight: theme.typography.fontWeightMedium,
        '$expanded > &': {
            fontWeight: theme.typography.fontWeightRegular,
        },
    },
    group: {
        marginLeft: 0,
        '& $content': {
            paddingLeft: theme.spacing(2),
        },
    },
    expanded: {},
    selected: {
        color: theme.palette.text.primary,
    },
    label: {
        "&:focus": {
            backgroundColor: 'transparent',
        },
        fontWeight: 'inherit',
        color: 'inherit',
    },
}))((props) => <TreeItem {...props} />);


export default NavTreeItem