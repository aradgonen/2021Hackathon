import React, { useContext } from 'react'

import { makeStyles, useTheme } from '@material-ui/core/styles';

import itemContext from './context/itemContext'

const useBarStyles = (props) => (makeStyles(({
    bar: {
        // so the bar will fit the content width in a case when
        // the items are less then the window size
        display: "inline-flex",
        "&:hover > div": {
            // move to the back
            transform: "translateX(-25%)"
        },
        "& > div:hover ~ div": {
            // move to the front
            transform: "translateX(25%)"
        },
        "& > div:hover": {
            transform: "scale(1.5)"
        },

    },
    item: {
        transition: "all 400ms ease",
        width: props.itemSize + "vw",
    }
}))());

const ItemBar = ({ children}) => {
    const itemData = useContext(itemContext)
    const classes = useBarStyles({
        itemSize: itemData.itemSize
    })
    console.log(itemData)
    const items = children.map((item, index) => {
        return <div
            key={"bar-item-" + index}
            className={classes.item}>
            {item}
        </div>
    })

    return <div className={classes.bar}>
        {items}
    </div>
}


export default ItemBar