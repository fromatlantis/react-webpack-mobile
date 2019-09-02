import React, { PureComponent } from 'react'
import styles from './Label.module.css'

export default class Label extends PureComponent {
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
        let { single = false } = this.props
        if (single) {
            about = [value]
        } else {
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
 
<Label
    must
    title="企业类型"
    value={'实驻企业'}  //选中数据
    onChange={label => {
        this.setState({ label })
    }}
    data={['实驻企业', '虚拟企业']} //所有数据
    placeholder="请选择企业类型"
    ref={thisabel => {
        this.typeCompany = thisabel
    }}
/>



 
 * 
 * 
 */
