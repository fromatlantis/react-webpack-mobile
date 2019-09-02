import React, { PureComponent } from 'react'
import styles from './Submission.module.css'

export default class Submission extends PureComponent {
    click() {
        let { onClick } = this.props
        if (onClick) {
            onClick()
        }
    }
    render() {
        let { title = 'hello world', position = 'bottom' } = this.props
        if (position == 'fixed') {
            return (
                <div className={styles.buttonfixed} onClick={() => this.click()}>
                    <p>{title}</p>
                </div>
            )
        } else {
            return (
                <div className={styles.box}>
                    <div className={styles.button} onClick={() => this.click()}>
                        <p>{title}</p>
                    </div>
                </div>
            )
        }
    }
}
/**
 * 
 * 
 
position = 'fixed' 一直显示在屏幕最下面，别的都是在页面最下面
 <Submission title="提交" onClick={() => alert()} />




 */
