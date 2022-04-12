import React from 'react'
import classes from '../assets/css/Backdrop.module.css'

function Backdrop(props) {
  return <div className={classes.backdrop} onClick={props.onClick} />
}

export default Backdrop
