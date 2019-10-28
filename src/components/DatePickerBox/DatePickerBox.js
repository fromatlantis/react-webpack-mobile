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
        let { type = 'yyyy-mm-dd', value } = this.props
        if (value) {
            if (type == 'yyyy-mm-dd') {
                this.setState({
                    value: value,
                })
            } else {
                let time = new Date(value - 0)
                let FullYear = new Date(time).getFullYear()
                let Month = new Date(time).getMonth() - 0 + 1
                if (Month < 10) {
                    Month = '0' + Month
                }
                let Day = new Date(time).getDate()
                if (Day < 10) {
                    Day = '0' + Day
                }
                let showTime = FullYear + '-' + Month + '-' + Day
                this.setState({
                    value: showTime,
                })
            }
        }
    }
    //子组件改变值
    setTime = value => {
        this.setState({ value })
    }
    onChange = Time => {
        this.setState({ Time })
    }
    determine() {
        let { Time } = this.state
        let { type = 'yyyy-mm-dd' } = this.props

        let FullYear = new Date(Time).getFullYear()
        let Month = new Date(Time).getMonth() - 0 + 1
        let Day = new Date(Time).getDate()
        let value = FullYear + '-' + Month + '-' + Day
        this.setState({
            value,
            show: false,
        })
        if (this.props.onChange) {
            if (type == 'yyyy-mm-dd') {
                this.props.onChange(value)
            } else {
                this.props.onChange(Date.parse(new Date(value)))
            }
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
                <p className={styles.title}>
                    {title}
                    {must ? <span style={{ color: 'red' }}>*</span> : null}
                </p>
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

type :
yyyy-mm-dd
s



 */
