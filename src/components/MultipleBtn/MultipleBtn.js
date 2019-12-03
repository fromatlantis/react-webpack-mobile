import React, { PureComponent } from 'react'
import styles from './MultipleBtn.module.css'

export default class MultipleBtn extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            value: '',
            show: false,
            about: '',
            data: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K'],
        }
    }
    componentDidMount() {
        if (this.props.value) {
            this.setState({
                value: this.props.value,
            })
        }
        if (this.props.data) {
            this.setState({
                data: this.props.data,
            })
        }
    }
    setDate(data) {
        this.setState({
            data,
        })
    }
    determine() {
        let { about } = this.state
        this.setState({
            value: about,
            show: false,
        })
        if (this.props.onChange) {
            this.props.onChange(about)
        }
    }
    //父组件改值
    parentSetValue = value => {
        this.setState({ value })
    }
    setshow() {
        let { value } = this.state
        this.setState({
            about: value,
            show: true,
        })
    }
    setTag(value, b) {
        let { about } = this.state
        about = about ? about.split(',') : []
        if (b) {
            about.push(value)
        } else {
            let newabout = []
            for (let i in about) {
                if (value == about[i]) {
                } else {
                    newabout.push(about[i])
                }
            }
            about = newabout
        }
        this.setState({
            about: about.join(','),
        })
    }
    showData() {
        let { data, about } = this.state
        about = about.split(',')

        let item = []
        for (let i in data) {
            let b = false
            for (let j in about) {
                if (about[j] == data[i]) {
                    b = true
                }
            }
            if (b) {
                item.push(
                    <div className={styles.tag} onClick={() => this.setTag(data[i], !b)}>
                        <p>{data[i]}</p>
                    </div>,
                )
            } else {
                item.push(
                    <div className={styles.tagone} onClick={() => this.setTag(data[i], !b)}>
                        <p>{data[i]}</p>
                    </div>,
                )
            }
        }
        return <div className={styles.tags}>{item}</div>
    }
    render() {
        let { title, must, placeholder, mode = 'date' } = this.props
        let { value, show } = this.state
        console.log('........', value)
        return (
            <div className={styles.box}>
                <p className={styles.title}>{title}</p>
                {value ? (
                    <div className={styles.allLabel}>
                        {value.split(',').map(item => {
                            return (
                                <p
                                    key={item}
                                    onClick={() => this.setshow()}
                                    className={styles.value}>
                                    {item}
                                </p>
                            )
                        })}
                    </div>
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
                            <div className={styles.showDate}>{this.showData()}</div>
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
 MultipleBtn
 






 * 
 */
