import React, { useState, useCallback } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import NextUiGraph from './NextUiGraph'
import PrintBlock from '../printBlock/PrintBlock'
const useStyles = makeStyles((theme) => ({
    typography: {
        padding: theme.spacing(2),
    },
}));

const initPopoverInfoState = { isOpen: false, format: {} }
const GraphOutput = (props) => {
    const { format } = props
    const { nodes, links, nodeSet } = format

    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const [popoverInfo, setpopoverInfo] = useState(initPopoverInfoState);

    const handleClose = () => {
        setpopoverInfo(initPopoverInfoState);
    };

    const memoizedOpen = useCallback((format) => (setpopoverInfo({ isOpen: true, format: format })) , []);
    const memoizedClick = useCallback((event) => (setAnchorEl(event.currentTarget)) , []);
    
    return <React.Fragment>
        <NextUiGraph
            onClick={memoizedClick}
            nodes={nodes}
            links={links}
            nodeSet={nodeSet}
            onNodeClick={memoizedOpen}
            onLinkClick={memoizedOpen}
        />
        <Popover
            open={popoverInfo.isOpen}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }} >
            <PrintBlock format={popoverInfo.isOpen ? popoverInfo.format : []} />
        </Popover>
    </React.Fragment>
}
export default GraphOutput


