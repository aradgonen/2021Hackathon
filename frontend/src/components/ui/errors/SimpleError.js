import React from 'react'

import {Typography} from  '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/styles'

const useSimpleErrorStyles = makeStyles((theme) => ({
    root: {
        marginTop: "15rem",
       marginLeft:"20rem"

    },
    image: {
        width: "35rem",
    },
}));


const SimpleError = (props) => {
    const {errMessage} = props
    const classes = useSimpleErrorStyles()
    const currTheme = useTheme()

    let imageSource = 'pictures/netfix_logo-dark.png'
    if( currTheme.palette.type ==="light")
    imageSource = 'pictures/netfix_logo.png'

    return <div className={classes.root}>
        <img src={imageSource} className={classes.image} />
        <Typography variant="h2"> Whoops, Something went wrong...</Typography>
        <Typography variant="h6"> {errMessage}</Typography>
    </div>
}

export default SimpleError