import React, { PureComponent } from 'react'
import styles from './Multiple.module.css'
import rightImg from './right.png'
import tobeChoice from './tobeChoice.png'
import hadChoice from './hadChoice.png'
import { Header, Container, Content, Tags } from '../../components'

export default class Multiple extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            value: [],
            temporary: [],
            ok: false,
        }
    }
    //父组件赋值
    parentSetValue = value => {
        this.setState({
            value,
        })
    }
    setValue() {
        this.setState({
            value: this.props.value,
        })
    }
    setShowTrue() {
        this.setState({ show: true, temporary: this.state.value })
    }
    setOne(value, b) {
        let { temporary } = this.state
        if (b) {
            temporary.push(value)
        } else {
            let newtemporary = []
            for (let i in temporary) {
                if (temporary[i] == value) {
                } else {
                    newtemporary.push(temporary[i])
                }
            }
            temporary = newtemporary
        }

        this.setState({
            temporary,
            ok: !this.state.ok,
        })
    }
    itemsOne(temporary) {
        let { data } = this.props
        let item = []
        for (let i in data) {
            let b = false
            for (let j in temporary) {
                if (temporary[j] == data[i]) {
                    b = true
                }
            }
            if (b) {
                item.push(
                    <div
                        className={`${styles.OneBox}  ${styles.choice}`}
                        onClick={() => this.setOne(data[i], false)}>
                        <img src={hadChoice} alt="" srcSet="" />
                        <p>{data[i]}</p>
                    </div>,
                )
            } else {
                item.push(
                    <div className={styles.OneBox} onClick={() => this.setOne(data[i], true)}>
                        <img src={tobeChoice} alt="" srcSet="" />
                        <p>{data[i]}</p>
                    </div>,
                )
            }
        }
        return item
    }
    showtag() {
        let { value } = this.state
        let item = []
        for (let i in value) {
            item.push(<p className={styles.tag}>{value[i]}</p>)
        }
        return item
    }
    save() {
        this.setState({
            value: this.state.temporary,
            temporary: [],
            show: false,
        })
        if (this.props.onChange) {
            this.props.onChange(this.state.temporary)
        }
    }
    render() {
        let { title, placeholder, data } = this.props
        let { show, temporary, value } = this.state
        if (value.length) {
            return (
                <div className={styles.Box}>
                    <div className={styles.valuetag}>
                        <p className={styles.title}>{title}</p>
                        <div className={styles.tagsBox} onClick={() => this.setShowTrue()}>
                            {this.showtag()}
                        </div>
                    </div>

                    <img src={rightImg} alt="" srcSet="" />

                    {show ? (
                        <div className={styles.page}>
                            <Container>
                                <Header
                                    title={title + '选择'}
                                    goback={() => this.setState({ show: false })}
                                />
                                <Content>
                                    {this.itemsOne(temporary)}
                                    <div className={styles.submissionBox}>
                                        <div
                                            className={styles.submission}
                                            onClick={() => this.save()}>
                                            保存
                                        </div>
                                    </div>
                                </Content>
                            </Container>
                        </div>
                    ) : null}
                </div>
            )
        }
        return (
            <div className={styles.Box}>
                <p className={styles.title}>{title}</p>
                <p className={styles.placeholder} onClick={() => this.setShowTrue()}>
                    {placeholder ? placeholder : '请选择' + title}
                </p>
                <img src={rightImg} alt="" srcSet="" />

                {show ? (
                    <div className={styles.page}>
                        <Container>
                            <Header
                                title={title + '选择'}
                                goback={() => this.setState({ show: false })}
                            />
                            <Content>
                                {this.itemsOne(temporary)}
                                <div className={styles.submissionBox}>
                                    <div className={styles.submission} onClick={() => this.save()}>
                                        保存
                                    </div>
                                </div>
                            </Content>
                        </Container>
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
 * 
 * 
 
<Multiple
    title="行业标签"
    value={['A','B','C']}//已经选中的
    onChange={industry => this.setState({ industry })}
    data={['A','B','C','D']}//所有的的
    placeholder="请选择行业标签"//可以不传
    ref={thisabel => {
        this.industry = thisabel
    }}
/>





 *  */
