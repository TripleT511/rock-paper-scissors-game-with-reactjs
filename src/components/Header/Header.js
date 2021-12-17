import styles from './index.module.scss'
import logo from '../../images/logo.svg'
import React from 'react'

export default function Header(props) {
    return (
        <header className={styles.header}>
            <div className={styles.header__left}>
                <img src={logo}  alt="logo"/>
            </div>
            <div className={styles.header__right}>
                <p>SCORE</p>
                <span className={styles.score}>{ props.result }</span>
            </div>
        </header>
    )
}
