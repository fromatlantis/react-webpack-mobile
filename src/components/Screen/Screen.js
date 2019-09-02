import React, { PureComponent } from 'react'
import styles from './Screen.module.css'
import { Icon, Grid } from 'antd-mobile'
import top1 from './top1.png'
import top2 from './top2.png'
import choice from './choice.png'

export default class Screen extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            propsData: [],
            showScreenBrue: false,
            showScreenBrueOne: false,
            showScreen: {
                value: [],
                obj: {},
            },
            ok: false,
            headerHeight: 48,
            more: true,
        }
    }
    componentDidMount() {
        let headerHeight = window.tukit.safeArea ? window.tukit.safeArea.topInset : 20
        headerHeight = headerHeight - 0 + 48
        this.setState({
            propsData: this.props.data,
            headerHeight,
            more: this.props.data.length > 2 ? true : false,
        })
    }
    ScreenOne(obj) {
        if (obj.choice) {
            return (
                <div
                    style={{ borderWidth: 1 / (window.tukit.PixelRatio - 0) + 'px' }}
                    onClick={() => this.setScreenOne(obj, false)}
                    className={`${this.state.more ? styles.item : styles.itemnomore} ${
                        styles.screenitem
                    }  ${styles.Choiceborder}  ${styles.bblue} `}>
                    <div className={`${styles.long} ${styles.blue}`}>{obj.value || obj.name}</div>
                    <div className={styles.checkIcon}>
                        <img
                            src={top1}
                            alt=""
                            srcSet=""
                            style={{
                                width: '9px',
                                height: '9px',
                                position: 'relative',
                                top: '2px',
                            }}
                        />
                    </div>
                </div>
            )
        } else {
            if (obj.value) {
                return (
                    <div
                        style={{ borderWidth: 1 / (window.tukit.PixelRatio - 0) + 'px' }}
                        onClick={() => this.setScreenOne(obj, true)}
                        className={`${this.state.more ? styles.item : styles.itemnomore} ${
                            styles.screenitem
                        } ${styles.Choiceborder}  ${styles.bblue}`}>
                        <div className={`${styles.long} ${styles.blue}`}>{obj.value}</div>
                        <div className={styles.checkIcon}>
                            <img
                                src={top2}
                                alt=""
                                srcSet=""
                                style={{
                                    width: '9px',
                                    height: '9px',
                                    position: 'relative',
                                    top: '2px',
                                    transform: 'rotate(180deg)',
                                }}
                            />
                        </div>
                    </div>
                )
            } else {
                return (
                    <div
                        style={{ borderWidth: 1 / (window.tukit.PixelRatio - 0) + 'px' }}
                        onClick={() => this.setScreenOne(obj, true)}
                        className={`${this.state.more ? styles.item : styles.itemnomore} ${
                            styles.screenitem
                        } `}>
                        <div className={`${styles.long} `}>{obj.name}</div>
                        <div className={styles.checkIcon}>
                            <img
                                src={top2}
                                alt=""
                                srcSet=""
                                style={{
                                    width: '9px',
                                    height: '9px',
                                    position: 'relative',
                                    top: '2px',
                                    transform: 'rotate(180deg)',
                                }}
                            />
                        </div>
                    </div>
                )
            }
        }
    }
    Screen(obj) {
        if (obj.choice) {
            return (
                <div
                    style={{ borderWidth: 1 / (window.tukit.PixelRatio - 0) + 'px' }}
                    onClick={() => this.setScreen(obj, false)}
                    className={`${this.state.more ? styles.item : styles.itemnomore} ${
                        styles.screenitem
                    }  ${styles.Choiceborder}  ${styles.bblue} `}>
                    <div className={`${styles.long} ${styles.blue}`}>{obj.value || obj.name}</div>
                    <div className={styles.checkIcon}>
                        <img
                            src={top1}
                            alt=""
                            srcSet=""
                            style={{
                                width: '9px',
                                height: '9px',
                                position: 'relative',
                                top: '2px',
                            }}
                        />
                    </div>
                </div>
            )
        } else {
            if (obj.value) {
                return (
                    <div
                        style={{ borderWidth: 1 / (window.tukit.PixelRatio - 0) + 'px' }}
                        onClick={() => this.setScreen(obj, true)}
                        className={`${this.state.more ? styles.item : styles.itemnomore} ${
                            styles.screenitem
                        } ${styles.Choiceborder}  ${styles.bblue}`}>
                        <div className={`${styles.long} ${styles.blue}`}>{obj.value}</div>
                        <div className={styles.checkIcon}>
                            <img
                                src={top2}
                                alt=""
                                srcSet=""
                                style={{
                                    width: '9px',
                                    height: '9px',
                                    position: 'relative',
                                    top: '2px',
                                    transform: 'rotate(180deg)',
                                }}
                            />
                        </div>
                    </div>
                )
            } else {
                return (
                    <div
                        style={{ borderWidth: 1 / (window.tukit.PixelRatio - 0) + 'px' }}
                        onClick={() => this.setScreen(obj, true)}
                        className={`${this.state.more ? styles.item : styles.itemnomore} ${
                            styles.screenitem
                        } `}>
                        <div className={`${styles.long} `}>{obj.name}</div>
                        <div className={styles.checkIcon}>
                            <img
                                src={top2}
                                alt=""
                                srcSet=""
                                style={{
                                    width: '9px',
                                    height: '9px',
                                    position: 'relative',
                                    top: '2px',
                                    transform: 'rotate(180deg)',
                                }}
                            />
                        </div>
                    </div>
                )
            }
        }
    }
    Sorting(obj) {
        if (!obj.value) {
            return (
                <div
                    style={{ borderWidth: 1 / (window.tukit.PixelRatio - 0) + 'px' }}
                    className={`${this.state.more ? styles.item : styles.itemnomore}  ${
                        styles.screen
                    }  ${styles.screenitem} `}
                    onClick={() => this.setSorting(obj, 'positive')}>
                    {obj.name}
                    <div className={styles.checkIcon}>
                        <img
                            src={top2}
                            alt=""
                            srcSet=""
                            style={{
                                width: '9px',
                                height: '9px',
                                position: 'relative',
                                top: '2px',
                                transform: 'rotate(180deg)',
                            }}
                        />
                    </div>
                </div>
            )
        }
        if (obj.value == 'positive') {
            return (
                <div
                    style={{ borderWidth: 1 / (window.tukit.PixelRatio - 0) + 'px' }}
                    className={`${this.state.more ? styles.item : styles.itemnomore} ${
                        styles.Choiceborder
                    } ${styles.screen}  ${styles.screenitem}  ${styles.blue} ${styles.bblue} `}
                    onClick={() => this.setSorting(obj, 'reverse')}>
                    {obj.name}
                    <div className={styles.checkIcon}>
                        <img
                            src={top1}
                            alt=""
                            srcSet=""
                            style={{
                                width: '9px',
                                height: '9px',
                                position: 'relative',
                                top: '2px',
                            }}
                        />
                    </div>
                </div>
            )
        } else if (obj.value == 'reverse') {
            return (
                <div
                    style={{ borderWidth: 1 / (window.tukit.PixelRatio - 0) + 'px' }}
                    className={`${this.state.more ? styles.item : styles.itemnomore} ${
                        styles.Choiceborder
                    } ${styles.screen}  ${styles.screenitem}  ${styles.blue} ${styles.bblue} `}
                    onClick={() => this.setSorting(obj, '')}>
                    {obj.name}
                    <div className={styles.checkIcon}>
                        <img
                            src={top2}
                            alt=""
                            srcSet=""
                            style={{
                                width: '9px',
                                height: '9px',
                                position: 'relative',
                                top: '2px',
                                transform: 'rotate(180deg)',
                            }}
                        />
                    </div>
                </div>
            )
        }
    }
    showItems() {
        let items = this.state.propsData
        let item = []
        for (let i in items) {
            if (items[i].type == 0) {
                item.push(
                    <div
                        className={`${this.state.more ? styles.item : styles.itemnomore}`}
                        style={{ borderWidth: 1 / (window.tukit.PixelRatio - 0) + 'px' }}
                        onClick={() => this.setReset()}>
                        {items[i].name}
                    </div>,
                )
            } else if (items[i].type == 1) {
                item.push(this.Sorting(items[i]))
            } else if (items[i].type == 2) {
                item.push(this.Screen(items[i]))
            } else if (items[i].type == 3) {
                item.push(this.ScreenOne(items[i]))
            }
        }

        return item
    }
    setScreenOne(obj, choice) {
        obj.choice = choice
        let { propsData } = this.state
        for (let i in propsData) {
            if (propsData[i].key == obj.key) {
                propsData[i] = obj
            } else {
                propsData[i].choice = false
            }
        }
        let showScreen = {
            value: obj.value.split(','),
            obj,
        }
        this.setState({
            propsData,
            showScreenBrueOne: choice,
            showScreen,
            ok: !this.state.ok,
        })
    }
    setScreen(obj, choice) {
        obj.choice = choice
        let { propsData } = this.state
        for (let i in propsData) {
            if (propsData[i].key == obj.key) {
                propsData[i] = obj
            } else {
                propsData[i].choice = false
            }
        }
        let showScreen = {
            value: obj.value.split(','),
            obj,
        }
        this.setState({
            propsData,
            showScreenBrue: choice,
            showScreen,
            ok: !this.state.ok,
        })
    }
    setSorting(obj, value) {
        let { propsData } = this.state
        obj.value = value
        for (let i in propsData) {
            if (propsData[i].key == obj.key) {
                propsData[i] = obj
            } else if (propsData[i].type == 1) {
                propsData[i].value = ''
            } else if (propsData[i].type == 2) {
                propsData[i].choice = false
            }
        }
        this.setState({
            propsData,
            ok: !this.state.ok,
            showScreenBrue: false,
        })

        this.change()
    }
    setReset() {
        let list = this.props.data
        for (let i in list) {
            list[i].value = ''
            if (list[i].choice) {
                list[i].choice = false
            }
        }
        this.setState({
            propsData: list,
            ok: !this.state.ok,
            showScreenBrue: false,
            showScreenBrueOne: false,
        })

        this.change()
    }
    setCheckOne(item, b) {
        let { showScreen } = this.state
        if (b) {
            showScreen.value = [item]
        } else {
            let value = []
            let list = showScreen.value
            for (let i in list) {
                if (item != list[i]) {
                    value.push(list[i])
                }
            }
            showScreen.value = value
        }
        this.setState({
            showScreen,
            ok: !this.state.ok,
        })
    }
    setCheck(item, b) {
        let { showScreen } = this.state
        if (b) {
            showScreen.value.push(item)
        } else {
            let value = []
            let list = showScreen.value
            for (let i in list) {
                if (item != list[i]) {
                    value.push(list[i])
                }
            }
            showScreen.value = value
        }
        this.setState({
            showScreen,
            ok: !this.state.ok,
        })
    }
    showAllCheckItemsOne() {
        let { showScreen } = this.state
        let list = showScreen.value
        let item = []
        for (let i in showScreen.obj.data) {
            let b = false
            for (let j in list) {
                if (list[j] == showScreen.obj.data[i]) {
                    b = true
                }
            }
            if (b) {
                item.push(
                    <div
                        className={styles.choicetrueitem}
                        onClick={() => this.setCheckOne(showScreen.obj.data[i], false)}>
                        <img
                            src={choice}
                            alt=""
                            srcSet=""
                            style={{
                                width: '16px',
                                height: '16px',
                                marginRight: '5px',
                                position: 'relative',
                                top: '-1px',
                            }}
                        />
                        <p className={styles.blueChoice}>{showScreen.obj.data[i]}</p>
                    </div>,
                )
            } else {
                item.push(
                    <div
                        className={styles.choicetrueitem}
                        onClick={() => this.setCheckOne(showScreen.obj.data[i], true)}>
                        <p>{showScreen.obj.data[i]}</p>
                    </div>,
                )
            }
        }
        return item
    }
    showAllCheckItems() {
        let { showScreen } = this.state
        let list = showScreen.value
        let item = []
        for (let i in showScreen.obj.data) {
            let b = false
            for (let j in list) {
                if (list[j] == showScreen.obj.data[i]) {
                    b = true
                }
            }
            if (b) {
                item.push(
                    <div
                        className={styles.choicetrueitem}
                        onClick={() => this.setCheck(showScreen.obj.data[i], false)}>
                        <img
                            src={choice}
                            alt=""
                            srcSet=""
                            style={{
                                width: '16px',
                                height: '16px',
                                marginRight: '5px',
                                position: 'relative',
                                top: '-1px',
                            }}
                        />
                        <p className={styles.blueChoice}>{showScreen.obj.data[i]}</p>
                    </div>,
                )
            } else {
                item.push(
                    <div
                        className={styles.choicetrueitem}
                        onClick={() => this.setCheck(showScreen.obj.data[i], true)}>
                        <p>{showScreen.obj.data[i]}</p>
                    </div>,
                )
            }
        }
        return item
    }
    checkReset() {
        let { showScreen } = this.state
        showScreen.value = []
        this.setState({
            showScreen,
            ok: !this.state.ok,
        })
        this.change()
    }
    setChecks() {
        let { showScreen, propsData, showScreenBrue, showScreenBrueOne } = this.state
        let value = []
        for (let i in showScreen.value) {
            if (showScreen.value[i]) {
                value.push(showScreen.value[i])
            }
        }
        for (let i in propsData) {
            if (propsData[i].key == showScreen.obj.key) {
                propsData[i].value = value.join(',')
                propsData[i].choice = false
            }
        }
        this.setState({
            propsData,
            showScreenBrue: false,
            showScreenBrueOne: false,
        })
        this.change()
    }
    change() {
        let that = this
        setTimeout(() => {
            that.props.onchange(this.state.propsData)
        }, 0)
    }
    render() {
        let { showScreenBrue, showScreenBrueOne, headerHeight } = this.state
        return (
            <div>
                <div className={`${this.state.more ? styles.box : styles.boxnomore}`}>
                    <div
                        style={{
                            width: '24px',
                            flexShrink: '0',
                            height: '1px',
                            background: 'rgba(0,0,0,0)',
                        }}
                    />
                    {this.showItems()}
                    <div
                        style={{
                            width: '15px',
                            flexShrink: '0',
                            height: '1px',
                            background: 'rgba(0,0,0,0)',
                        }}
                    />
                </div>
                {showScreenBrue ? (
                    <div className={styles.Shelter} style={{ top: `${headerHeight}px` }} />
                ) : null}
                {showScreenBrue ? (
                    <div className={styles.checkItems}>
                        {this.showAllCheckItems()}
                        {/* <p>购买</p>
                        <p>租赁</p>
                        <p className={styles.blue}>
                            <Icon type="check" size="xs" color="#108ee9" />
                            购买
                        </p>
                        <p>租赁</p> */}
                    </div>
                ) : null}
                {showScreenBrue ? (
                    <div className={styles.checkDetermine}>
                        <div className={styles.Remanufacture} onClick={() => this.checkReset()}>
                            重置
                        </div>
                        <div className={styles.yes} onClick={() => this.setChecks()}>
                            确定
                        </div>
                    </div>
                ) : null}
                {showScreenBrueOne ? (
                    <div className={styles.Shelter} style={{ top: `${headerHeight}px` }} />
                ) : null}
                {showScreenBrueOne ? (
                    <div className={styles.checkItems}>
                        {this.showAllCheckItemsOne()}
                        {/* <p>购买</p>
                        <p>租赁</p>
                        <p className={styles.blue}>
                            <Icon type="check" size="xs" color="#108ee9" />
                            购买
                        </p>
                        <p>租赁</p> */}
                    </div>
                ) : null}
                {showScreenBrueOne ? (
                    <div className={styles.checkDetermine}>
                        <div className={styles.Remanufacture} onClick={() => this.checkReset()}>
                            重置
                        </div>
                        <div className={styles.yes} onClick={() => this.setChecks()}>
                            确定
                        </div>
                    </div>
                ) : null}
            </div>
        )
    }
}

/**
 * 
使用demo：
type ：
0 重置
1 排序
2 筛选
3 单选
key：
唯一表示符
name：渲染名称
data：复选，选项
value：结果。
choice：复选框是否展开
操作回调，会返回整个
新结果是   data
 <Screen
    data={[
        {
            type: 0,
            key: 'reset',
            name: '重置',
            data: [],
            value: '',
        },//重置按钮
        {
            type: 1,
            key: 'money',
            name: '预估金额',
            data: [],
            value: '',
        },//排序（没有选中）
        // {
        //     type: 1,
        //     key: 'money',
        //     name: '预估金额',
        //     data: [],
        //     value: 'positive',
        // },//排序（向下箭头为蓝色）
        // {
        //     type: 1,
        //     key: 'money',
        //     name: '预估金额',
        //     data: [],
        //     value: 'reverse',
        // },//排序（向上箭头为蓝色）
        // {
        //     type: 2,
        //     key: 'intention',
        //     name: '入驻意向',
        //     data: ['购买', '租赁'],
        //     value: '购买',
        //     choice: false,
        // },//筛选（选中了购买）
        // {
        //     type: 2,
        //     key: 'intention',
        //     name: '入驻意向',
        //     data: ['购买', '租赁'],
        //     value: '购买,租赁',
        //     choice: false,
        // },//筛选（选中了购买和租赁）
        {
            type: 2,
            key: 'intention',
            name: '入驻意向',
            data: ['购买', '租赁'],
            value: '',
            choice: false,
        },//筛选（默认没有选中）
        // {
        //     type: 2,
        //     key: 'intention',
        //     name: '入驻意向',
        //     data: ['购买', '租赁'],
        //     value: '',
        //     choice: true,
        // },//筛选，展开筛选，但是没有选中的状态
    ]}
/>



 */
