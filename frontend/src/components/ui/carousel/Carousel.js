import React, { useState, useContext } from 'react'
import PropTypes from "prop-types"
import clsx from 'clsx'

import { Button } from '@material-ui/core'
import { IconButton } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { makeStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';

import itemContext from './context/itemContext'


const useCarouselStyles = makeStyles((theme) => ({
    root: {
        position: "relative",
        left: 0,
        right: 0,
    },
    itemBar: {
        transition: "all 400ms ease 100ms",
        paddingLeft: theme.layout.siteSpaceDisplay,
        paddingRight: theme.layout.siteSpaceDisplay,
    },
    rollArrow: {
        position: "absolute",
        top: 0,
        width: "4vw",
        height: "100%",
        minWidth: "auto",
        borderRadius: "0",
        height: "100%",
        padding: "0",
        backgroundColor: "rgba(0, 0, 0, .2)",
        color: grey[0],
        "&:hover": {
            backgroundColor: "rgba(0, 0, 0, .3)",
        },
        "&:hover svg": {
            transform: "scale(1.2)"
        }
    },
    toLeft: {
        left: 0
    },
    toRight: {
        right: 0
    },
    icon: {
        fontSize: "5rem"
    }
}));

const Carousel = ({ children, itemAmount }) => {
    const [barOffset, updateBarOffset] = useState(0)
    const classes = useCarouselStyles();
    const itemData = useContext(itemContext)
    const theme = useTheme();

    const rollBarForward = (dirFactor) => {
        if (barOffset) {
            let amount = Math.min(itemData.itemsToDisplay, Math.abs(barOffset))

            updateBarOffset(barOffset + dirFactor * amount);
        }
    }
    const rollBarBackward = (dirFactor) => {
        if ((Math.abs(barOffset) + itemData.itemsToDisplay) < itemAmount) {
            let amount = Math.min(itemData.itemsToDisplay,
                itemAmount - (Math.abs(barOffset) + itemData.itemsToDisplay))

            updateBarOffset(barOffset - dirFactor * amount);
        }
    }

    let rollArrows = undefined;

    // reset the offset in a case of direction change
    if (theme.direction === "ltr" && barOffset > 0 ||
        theme.direction === "rtl" && barOffset < 0) {
        updateBarOffset(0)
    }
    if (itemAmount > itemData.itemsToDisplay) {
        //const showLeftIcons = theme.direction === "ltr" ? rollBarForward : rollBarBackward
        //const showRightIcons = theme.direction === "ltr" ? rollBarBackward : rollBarForward
        const showLeftIcons = rollBarForward
        const showRightIcons = rollBarBackward
        const directionFactor = theme.direction === "ltr" ? 1 : -1
        const LeftArrowIcon = theme.direction === "ltr" ?
            <ChevronLeftIcon className={classes.icon} /> :
            <ChevronRightIcon className={classes.icon} />
        const RightArrowIcon = theme.direction === "ltr" ?
            <ChevronRightIcon className={classes.icon} /> :
            <ChevronLeftIcon className={classes.icon} />

        rollArrows = [
            <IconButton key="left-roll-arrow"
                className={clsx(classes.rollArrow, classes.toLeft)}
                onClick={
                    () => {
                        showLeftIcons(directionFactor)
                    }}>
                {LeftArrowIcon}
            </IconButton>,
            <IconButton key="right-roll-arrow"
                className={clsx(classes.rollArrow, classes.toRight)}
                onClick={
                    () => {
                        showRightIcons(directionFactor)
                    }}>
                {RightArrowIcon}
            </IconButton>
        ]

    }

    const rollBar = {
        transform: "translateX(" + (barOffset * itemData.itemSize) + "vw)",
    }

    return <div className={classes.root}>
        <div className={classes.itemBar} style={rollBar} >
            {children}
        </div>
        {rollArrows}
    </div>

}

Carousel.propTypes = {
    itemAmount: PropTypes.number,
}

export default Carousel