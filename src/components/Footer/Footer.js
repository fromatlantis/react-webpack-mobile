import React, { Component } from 'react'
import styles from './Footer.module.css'

export default class Footer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            footBottom: window.tukit ? window.tukit.footerPadding : 0,
        }
    }
    render() {
        const { children, style = {} } = this.props
        console.log(this.state.footBottom)
        style.paddingBottom = this.state.footBottom + 'px'
        return (
            <div className={styles.root} style={style}>
                {children}
            </div>
        )
    }
}
