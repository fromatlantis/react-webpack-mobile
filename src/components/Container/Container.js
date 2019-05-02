import React, { Component } from 'react'
import styles from './Container.module.css'

export default class Container extends Component {
    render() {
        const { children, style } = this.props
        return (
            <div className={styles.Container} style={style}>
                {children}
            </div>
        )
    }
}
