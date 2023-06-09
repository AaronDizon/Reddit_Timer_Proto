import React from 'react'
import styles from '../Styling/Footer.module.css'
import { GoMarkGithub } from "react-icons/go";
import { BsLinkedin } from "react-icons/bs"
import { BsPersonFill } from "react-icons/bs"


const Footer = () => {
  return (

      <div className={styles.container}>
        <div className={styles.social}>
            <a href={'https://github.com/AaronDizon'}className={styles.socialIcon}><GoMarkGithub size='4vmin' color='#F5F5F5'/></a>
            <a href={'https://www.linkedin.com/in/aaron-dizon-2ab738227/'}className={styles.socialIcon}><BsLinkedin size='4vmin' color='#F5F5F5'/></a>
            <a href={'https://idyllic-semolina-feb97e.netlify.app/'}className={styles.socialIcon}><BsPersonFill size='4vmin' color='#F5F5F5'/></a>
        </div>
        <p className={styles.emailText}>Email: Iamartindizon@gmail.com</p>
        <p className={styles.trademarkText}>TM: AaronDizon</p>
      </div>


  )
}

export default Footer