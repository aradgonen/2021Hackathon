import React from 'react'
import PropTypes from 'prop-types'

import { Typography, Grid, Box } from '@material-ui/core'
import ErrorIcon from '@material-ui/icons/Error';
import { makeStyles } from '@material-ui/styles'


const ErrorLine = (props) => {
    const { message } = props

    return <div>
        <ErrorIcon
            fontSize="large"
            color="error" />
        <Typography variant="h3" color="error">
            <Box fontWeight="fontWeightBold">
                {message}
            </Box>
        </Typography>

    </div>
}

ErrorLine.propTypes = {
    message: PropTypes.string.isRequired
}
export default ErrorLine