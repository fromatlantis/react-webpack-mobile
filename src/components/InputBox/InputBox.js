import React, { PureComponent } from 'react'
import styles from './InputBox.module.css'

export default class InputBox extends PureComponent {
    render() {
        let { title, value, onChange, placeholder, must } = this.props
        return (
            <div className={styles.box}>
                <p className={styles.title}>
                    {title}
                    {must ? <span style={{ color: 'red' }}>*</span> : null}
                </p>
                <div className={styles.valueBox}>
                    <input
                        type="text"
                        value={value}
                        onChange={data => onChange(data.target.value)}
                        className={styles.value}
                        placeholder={placeholder}
                    />
                </div>
            </div>
        )
    }
}

/**
 * 
 * 
 * 
 * 
 





 <InputBox
                    title="报修地址"
                    value={value}
                    onChange={value => this.setState({ value })}
                    placeholder="placeholder"
                />




                
 */
