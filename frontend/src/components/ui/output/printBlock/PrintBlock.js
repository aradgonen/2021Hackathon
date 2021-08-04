import React from 'react'
import { Typography, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import GeneralOutput from '../GeneralOutput'
const usePrintBlockStyles = makeStyles((theme) => ({
}));

const PrintBlock = (props) => {
    const { format } = props
    const classes = usePrintBlockStyles()
    let outputBlocks = format.map((outputFormat, index) => {
        return <div
            key={"output-block-" + index} >
            <GeneralOutput
                format={outputFormat} />
        </div>
    })

    return <div >
        {outputBlocks}
    </div>
}

export default PrintBlock