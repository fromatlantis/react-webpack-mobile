import React, { PureComponent } from 'react'
import styles from './SingleElection.module.css'
import arrow from './arrow.png'
import normal from './normal.png'

export default class SingleElection extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            about: 'about',
            ChoiceIndex: '',
            Choice: false,
            Choicenum: '',
        }
    }
    componentDidMount() {
        let options = this.props.options
        for (let i in options) {
            if (!options[i].key) {
                options[i].key = options[i].value
            }
        }
        this.setState({
            options,
        })
    }
    lookChoice() {
        this.setState({
            Choicenum: this.state.ChoiceIndex,
            Choice: true,
        })
    }
    setItem(Choicenum) {
        this.setState({
            Choicenum,
        })
    }
    SureChoice() {
        this.setState({
            ChoiceIndex: this.state.Choicenum,
        })
        this.setChoice(false)
        let { onChange } = this.props
        if (onChange) {
            onChange(this.state.Choicenum)
        }
    }
    getChoiceIndex() {
        return this.state.ChoiceIndex
    }
    setChoice(b) {
        this.setState({
            Choice: b,
        })
    }
    showoptions() {
        let item = []
        let { Choicenum, options } = this.state
        for (let i in options) {
            if (Choicenum == options[i].key) {
                item.push(
                    <div
                        key={options[i].key}
                        className={styles.Choiceitem}
                        onClick={() => this.setItem(options[i].key)}>
                        {options[i].icon ? (
                            <img
                                src={options[i].icon}
                                alt=""
                                srcSet=""
                                style={{ width: '16px', height: '16px', margin: '0 6px' }}
                            />
                        ) : (
                            <img
                                src={normal}
                                alt=""
                                srcSet=""
                                style={{ width: '16px', height: '16px', margin: '0 6px' }}
                            />
                        )}
                        <p
                            className={styles.normal}
                            style={{
                                color: options[i].color,
                            }}>
                            {options[i].value}
                        </p>
                        <div style={{ width: '16px', height: '16px', margin: '0 6px' }} />
                    </div>,
                )
            } else {
                item.push(
                    <div
                        key={options[i].key}
                        className={styles.Choiceitem}
                        onClick={() => this.setItem(options[i].key)}>
                        <p>{options[i].value}</p>
                    </div>,
                )
            }
        }
        return item
    }
    showChoiceIndex() {
        let { ChoiceIndex, options } = this.state
        for (let i in options) {
            if (options[i].key == ChoiceIndex) {
                return (
                    <p
                        key={options[i].key}
                        className={styles.shownormal}
                        style={{
                            color: options[i].color,
                        }}>
                        {options[i].value}
                    </p>
                )
            }
        }
    }
    render() {
        let { showColor, show, type, must } = this.props
        let { about, ChoiceIndex, Choice, Choicenum } = this.state
        return (
            <div>
                <div className={styles.resultBox} onClick={() => this.lookChoice()}>
                    <p>
                        {show}
                        {must ? <span>*</span> : null}
                    </p>
                    <div className={styles.center}>
                        {ChoiceIndex == 'normal' ? <p className={styles.shownormal}>正常</p> : null}
                        {ChoiceIndex == 'abnormal' ? (
                            <p className={styles.showabnormal}>异常</p>
                        ) : null}
                        {this.showChoiceIndex()}
                        <img src={arrow} alt="" />
                    </div>
                </div>
                {Choice ? (
                    <div className={styles.Mask}>
                        <div className={styles.mask} onClick={() => this.setChoice(false)} />
                        <div className={styles.ChoiceBox}>
                            <div className={styles.ChoiceConfirm}>
                                <p onClick={() => this.setChoice(false)}>取消</p>
                                <p className={styles.yes} onClick={() => this.SureChoice()}>
                                    确定
                                </p>
                            </div>
                            {this.showoptions()}
                        </div>
                    </div>
                ) : null}
            </div>
        )
    }
}

// <SingleElection
//     show="title"
//     must   //可以没有
//     options={[
//         {
//             value: 'option1',
//             key: '001',
//             color: 'red',
//             icon: warning,
//         },
//         {
//             value: 'option2',
//             key: '002',
//             color: 'blue',
//             icon: warning,
//         },
//         {
//             value: 'option3',
//             key: '003',
//         },
//     ]}
//     onChange={data => alert(data)} //可以没有
//     ref={singleElection => {
//         this.singleElection = singleElection
//     }}
// />

// this.singleElection.getChoiceIndex()    //获取index
