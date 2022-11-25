import React from 'react'
import styles from './SingleForm.module.css'

const SingleForm = (props) => {
  return (
    <div className={`${styles["single-form"]}`}>
        <label for="uname"><b>{props.title}</b></label>
        <input className={`${styles["input"]}`} type="text"  name="uname" required></input>
    </div>
  )
}

export default SingleForm