import React from 'react'
import LogoImage from "../../images/SproutLogo.png"
import styles from "./SproutLogo.module.scss"

const SproutLogo = () => {


  return (
    <div className={styles.logo}>
            <img src={LogoImage}  alt="Sprout Logo"/>
    </div>
  )
}

export default SproutLogo