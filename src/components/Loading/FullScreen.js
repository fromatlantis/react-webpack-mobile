import React, { PureComponent } from 'react'
import { ActivityIndicator } from 'antd-mobile'
import styles from './Loading.module.css'
export default class FullScreen extends PureComponent {
    render() {
        return (
            <div className={styles.fullScreen}>
                <ActivityIndicator size="large" text="Loading" />
            </div>
        )
    }
}
