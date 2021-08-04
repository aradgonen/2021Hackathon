import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import inputMap from './utils/formInputMap'



function GeneralInput(props) {
  const { type, ...inputProps } = props

  let Input = undefined
  if (type in inputMap) {
    Input = inputMap[type].component
  } else {
    // TODO: throw exception
  }

  return <Input
    {...inputProps}
    {...inputMap[type].constProps}
  />
}


export default GeneralInput