import React, { PureComponent } from 'react'
import styles from './Screen.module.css'
import { Icon, Grid } from 'antd-mobile'

export default class Screen extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            propsData: [],
            showScreenBrue: false,
            showScreen: {
                value: [],
                obj: {},
            },
            ok: false,
        }
    }
    componentDidMount() {
        this.setState({
            propsData: this.props.data,
        })
    }
    Screen(obj) {
        if (obj.choice) {
            return (
                <div
                    onClick={() => this.setScreen(obj, false)}
                    className={`${styles.item} ${styles.check} ${styles.Choice} ${
                        styles.Choiceborder
                    }  ${styles.bblue} `}>
                    <div className={`${styles.long} ${styles.blue}`}>{obj.value || obj.name}</div>
                    <div className={styles.checkIcon}>
                        <Icon type="up" size="xxs" />
                    </div>
                </div>
            )
        } else {
            if (obj.value) {
                return (
                    <div
                        onClick={() => this.setScreen(obj, true)}
                        className={`${styles.item} ${styles.check} ${styles.Choiceborder}  ${
                            styles.bblue
                        }`}>
                        <div className={`${styles.long} ${styles.blue}`}>{obj.value}</div>
                        <div className={styles.checkIcon}>
                            <Icon type="down" size="xxs" />
                        </div>
                    </div>
                )
            } else {
                return (
                    <div onClick={() => this.setScreen(obj, true)} className={`${styles.item} `}>
                        <div className={`${styles.long} `}>{obj.name}</div>
                        <div className={styles.checkIcon}>
                            <Icon type="down" size="xxs" />
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
                    className={`${styles.item}  ${styles.screen} `}
                    onClick={() => this.setSorting(obj, 'positive')}>
                    {obj.name}
                    <div className={styles.icons}>
                        <Icon type="up" size="xxs" color="#000" />
                        <Icon type="down" size="xxs" color="#000" />
                    </div>
                </div>
            )
        }
        if (obj.value == 'positive') {
            return (
                <div
                    className={`${styles.item} ${styles.Choiceborder} ${styles.screen}  ${
                        styles.blue
                    } ${styles.bblue} `}
                    onClick={() => this.setSorting(obj, 'reverse')}>
                    {obj.name}
                    <div className={styles.icons}>
                        <Icon type="up" size="xxs" color="#000" />
                        <Icon type="down" size="xxs" color="#108ee9" />
                    </div>
                </div>
            )
        } else if (obj.value == 'reverse') {
            return (
                <div
                    className={`${styles.item} ${styles.Choiceborder} ${styles.screen}  ${
                        styles.blue
                    } ${styles.bblue} `}
                    onClick={() => this.setSorting(obj, '')}>
                    {obj.name}
                    <div className={styles.icons}>
                        <Icon type="up" size="xxs" color="#108ee9" />
                        <Icon type="down" size="xxs" color="#000" />
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
                    <div className={styles.item} onClick={() => this.setReset()}>
                        {items[i].name}
                    </div>,
                )
            } else if (items[i].type == 1) {
                item.push(this.Sorting(items[i]))
            } else if (items[i].type == 2) {
                item.push(this.Screen(items[i]))
            }
        }

        return item
    }
    setScreen(obj, choice) {
        obj.choice = choice
        let { propsData } = this.state
        for (let i in propsData) {
            if (propsData[i].key == obj.key) {
                propsData[i] = obj
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
        console.log('筛选')
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

        console.log('排序')
        this.change()
    }
    setReset() {
        console.log('重置')
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
        })

        this.change()
    }
    setCheck(item, b) {
        let { showScreen } = this.state
        console.log(showScreen.value)
        console.log('复选', item, b)
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
                    <p
                        className={styles.blue}
                        onClick={() => this.setCheck(showScreen.obj.data[i], false)}>
                        <Icon type="check" size="xs" color="#108ee9" />
                        {showScreen.obj.data[i]}
                    </p>,
                )
            } else {
                item.push(
                    <p onClick={() => this.setCheck(showScreen.obj.data[i], true)}>
                        {showScreen.obj.data[i]}
                    </p>,
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
        console.log('复选重置')
        this.change()
    }
    setChecks() {
        let { showScreen, propsData, showScreenBrue } = this.state
        console.log(showScreen, propsData, showScreenBrue)
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
        let { showScreenBrue } = this.state
        return (
            <div>
                <div className={styles.box}>
                    {this.showItems()}
                    <div style={{ width: '15px', height: '15px', background: 'rgba(0,0,0,0)' }} />
                </div>
                {showScreenBrue ? <div className={styles.Shelter} /> : null}
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
2 筛选（复选，暂时不支持单选后续添加）
key：
唯一表示符
name：渲染名称
data：复选，选项
value：结果。
choice：复选框是否展开
onchange={data => console.log(data)}
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
    onchange={data => console.log(data)}
/>



 */
