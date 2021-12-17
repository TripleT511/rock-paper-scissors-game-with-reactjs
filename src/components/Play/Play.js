import React from 'react'
import clsx from 'clsx'
import styles from './index.module.scss'
import background from '../../images/bg-triangle.svg'

export default function Play(props) {
    return (
        <div className={clsx(styles.game__wrapper)}>
            <div className={clsx(styles.game__wrapper__background)}>
                <img src={background}  alt='background'/>
            </div>
            <div className={clsx(styles.game__wrapper__button)}>
               {props.children}
            </div>
        </div>
    )
}
