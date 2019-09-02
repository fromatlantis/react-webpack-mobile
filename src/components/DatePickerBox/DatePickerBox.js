import React, { PureComponent } from 'react'
import { DatePickerView } from 'antd-mobile'
import styles from './DatePickerBox.module.css'

export default class DatePickerBox extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            value: '',
            show: false,
            Time: null,
            minDate: new Date('1993-06-15'),
            maxDate: new Date('2033-06-15'),
        }
    }
    componentDidMount() {
        if (this.props.value) {
            this.setState({
                value: this.props.value,
            })
        }
    }
    //子组件改变值
    setTime = value => {
        this.setState({ value })
    }
    onChange = Time => {
        console.log('子组件', Time)
        this.setState({ Time })
    }
    determine() {
        let { Time } = this.state
        console.log(Time, '-------------')
        let FullYear = new Date(Time).getFullYear()
        let Month = new Date(Time).getMonth() - 0 + 1
        let Day = new Date(Time).getDate()
        let value = FullYear + '-' + Month + '-' + Day
        this.setState({
            value,
            show: false,
        })
        if (this.props.onChange) {
            this.props.onChange(value)
        }
    }
    setshow() {
        let { value } = this.state
        this.setState({
            Time: value ? new Date(value) : new Date(),
            show: true,
        })
    }
    setValue(value) {
        this.setState({ value })
    }
    render() {
        let { title, must, placeholder, mode = 'date' } = this.props
        let { value, show, Time, minDate, maxDate } = this.state
        return (
            <div className={styles.box}>
                <p className={styles.title}>{title}</p>
                {value ? (
                    <p onClick={() => this.setshow()} className={styles.value}>
                        {value}
                    </p>
                ) : (
                    <p onClick={() => this.setshow()} className={styles.placeholder}>
                        {placeholder}
                    </p>
                )}

                {show ? (
                    <div className={styles.ValueBox}>
                        <div
                            className={styles.Mask}
                            onClick={() =>
                                this.setState({
                                    show: false,
                                })
                            }
                        />
                        <div className={styles.showBox}>
                            <div className={styles.top}>
                                <p
                                    className={styles.cancel}
                                    onClick={() =>
                                        this.setState({
                                            show: false,
                                        })
                                    }>
                                    取消
                                </p>
                                <p className={styles.Masktitle}>{placeholder}</p>
                                <p className={styles.determine} onClick={() => this.determine()}>
                                    完成
                                </p>
                            </div>
                            <div className={styles.showDate}>
                                <DatePickerView
                                    mode={mode}
                                    value={Time}
                                    onChange={this.onChange}
                                    minDate={minDate}
                                    maxDate={maxDate}
                                />
                            </div>
                        </div>
                    </div>
                ) : null}
            </div>
        )
    }
}

/**
 * 
 * 
 * 
 * 
 

<DatePickerBox
    ref={date => (this.createDate = date)}
    title="成立日期"
    value={date} // '1993-06-15
    onChange={date => this.setState({ date })}
    placeholder="请选择日期"
/>





 */
