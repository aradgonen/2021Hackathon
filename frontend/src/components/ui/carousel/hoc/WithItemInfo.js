
import React from 'react'
import withWidth, { isWidthDown } from '@material-ui/core/withWidth';
import { useTheme } from '@material-ui/core'
import ItemContext from '../context/itemContext'

const WithItemAmount = ({ children, width }) => {
    const currTheme = useTheme()

    let itemsToDisplay = null
    if (isWidthDown('xs', width)) {
        itemsToDisplay = 2
    } else if (isWidthDown('sm', width)) {
        itemsToDisplay = 3
    } else if (isWidthDown('md', width)) {
        itemsToDisplay = 4
    } else if (isWidthDown('lg', width)) {
        itemsToDisplay = 5
    } else if (isWidthDown('xl', width)) {
        itemsToDisplay = 6

    }
    const itemSize = (100 - 2 * currTheme.layout.siteSpace) / itemsToDisplay

    return <ItemContext.Provider
        value={{
            itemsToDisplay: itemsToDisplay,
            itemSize: itemSize
        }}>
        {children}
    </ItemContext.Provider >
}

export default withWidth()(WithItemAmount);