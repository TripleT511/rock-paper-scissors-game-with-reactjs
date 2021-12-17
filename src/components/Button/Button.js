import React from 'react'
import clsx from 'clsx'

import styles from './index.module.scss'
import rockimg from '../../images/icon-rock.svg'
import paperimg from '../../images/icon-paper.svg'
import scissorsimg from '../../images/icon-scissors.svg'

export default function Button(props) {
    const { type, onBtnClick, isWin } = props;
    let srcImg = '';
    
    const typeBtn = type;
    if (typeBtn === 'btn__rock') {
        srcImg = rockimg;
    } else if (typeBtn === 'btn__paper') {
        srcImg = paperimg;
    } else {
        srcImg = scissorsimg
    }
    const handleClick = () => {
        if (onBtnClick) onBtnClick();
    }
    return (
        <>
            <div className={clsx(
                {
                    [styles.active]: isWin,
                    
                }
            )}
            onClick={handleClick}
            >
                <div className={clsx(styles.btn, styles[type], {[styles.result]: props.result ? props.result : null})}>
                    <div className={clsx(styles.btn__img)}>
                        <img src={srcImg} alt="btn"/>
                    </div>
                </div>
            </div>
        </>
        
    )
}
