import React, { PureComponent } from 'react'
import styles from './Title.module.css'

export default class Title extends PureComponent {
    render() {
        return (
            <div className={styles.titleBox}>
                <p className={styles.title}>{this.props.title}</p>
            </div>
        )
    }
}

//<Title title="巡检结果" />
