import React from 'react'
import { makeStyles, } from '@material-ui/core/styles';

import TableOutput from './TableOutput'
import SimpleOutput from './SimpleOutput'
import GraphOutput from './graph/GraphOutput'

const OUTPUT_FUCTORY = {
    "simple_output": {
        component: SimpleOutput,
        constProps: {
        }
    },
    "table": {
        component: TableOutput,
        constProps: {
        }
    },
    "graph": {
        component: GraphOutput,
        constProps: {
        }
    },
}


function GeneralOutput(props) {
    const { format } = props

    let type = format.type
    let Output = undefined
    if (type in OUTPUT_FUCTORY) {
        Output = OUTPUT_FUCTORY[type].component
    } else {
        // TODO: throw exception
    }
    console.log(format)
    return <Output
        {...props}
        {...OUTPUT_FUCTORY[type].constProps}
    />
}


export default GeneralOutput