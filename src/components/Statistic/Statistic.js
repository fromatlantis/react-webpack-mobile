import React from 'react'
import styles from './Statistic.module.css'
export default props => (
    <div className={styles.root}>
        <p className={styles.value}>{props.value}</p>
        <p className={styles.title}>{props.title}</p>
    </div>
)
