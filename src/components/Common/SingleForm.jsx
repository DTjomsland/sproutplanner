import React from 'react'
import styles from './SingleForm.module.css'
import StandardButton from './StandardButton'

const SingleForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
    <div className={`${styles["single-form"]}`}>
        <label for="uname"><b>{props.title}</b></label>
        <input className={`${styles["input"]}`} type="text"  onChange = {props.handleChange} name="uname" required></input>
        <StandardButton buttonType="submit" buttonText="Create" buttonStyle="green-button" />
        
    </div>
    </form>
  )
}

export default SingleForm