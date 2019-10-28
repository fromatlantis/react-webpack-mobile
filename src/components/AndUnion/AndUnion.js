import React, { PureComponent } from 'react'
import styles from './AndUnion.module.css'
import trueImg from './true.png'
import closeImg from './close.png'

export default class AndUnion extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            value: '',
            data: [],
            dataItem: [],
            hadIndex: 0,
            had: [],
            showMask: false,
        }
    }
    openMask() {
        let { had, hadIndex } = this.state
        had = had.slice(0, hadIndex + 1)
        this.setState({
            showMask: true,
            had,
        })
    }
    getdataItem(all, index) {
        for (let i in all) {
            if (index.length == 1) {
                return all
            } else {
                for (let j in index) {
                    if (index[j] == all[i].value) {
                        let newindex = []
                        for (let i in index) {
                            if (i != 0) {
                                newindex.push(index[i])
                            }
                        }
                        return this.getdataItem(all[i].children, newindex)
                    }
                }
            }
        }
    }
    componentDidMount() {
        let data = this.props.data
        let dataItem = this.props.data
        let value = this.props.value
        let valueData = value.split(',')
        let hadIndex = valueData.length - 1
        let had = []
        if (hadIndex) {
            for (let i = 0; i < hadIndex; i++) {
                had.push(valueData[i])
            }
        }
        dataItem = this.getdataItem(data, valueData)
        this.setState({ data, dataItem, hadIndex, had, value })
    }
    getvalue() {
        let { value, data } = this.state
        let arrvalue = value.split(',')
        let ind = 0
        let returnvalue = []
        for (let i in data) {
            if (data[i].value == arrvalue[ind]) {
                returnvalue.push(data[i])
                if (data[i].children) {
                    ind = ind - 0 + 1
                    for (let j in data[i].children) {
                        if (data[i].children[j].value == arrvalue[ind]) {
                            returnvalue.push(data[i].children[j])
                            if (data[i].children[j].children) {
                                ind = ind - 0 + 1

                                for (let k in data[i].children[j].children) {
                                    if (data[i].children[j].children[k].value == arrvalue[ind]) {
                                        returnvalue.push(data[i].children[j].children[k])
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        return returnvalue
    }
    items() {
        let { dataItem, value } = this.state
        let arrs = value.split(',')
        let choiceItem = arrs[arrs.length - 1]
        let item = []
        for (let i in dataItem) {
            if (choiceItem == dataItem[i].value) {
                item.push(
                    <p
                        key={i}
                        className={`${styles.choiceItem} ${styles.blueChoiceItem}`}
                        onClick={() => this.setChoice(dataItem[i])}>
                        <img
                            src={trueImg}
                            alt=""
                            srcSet=""
                            style={{
                                width: '12px',
                                height: '12px',
                                marginRight: '7px',
                                position: 'relative',
                                top: '1px',
                            }}
                        />
                        {dataItem[i].value}
                    </p>,
                )
            } else {
                item.push(
                    <p
                        key={i}
                        className={styles.choiceItem}
                        onClick={() => this.setChoice(dataItem[i])}>
                        {dataItem[i].value}
                    </p>,
                )
            }
        }
        return item
    }
    setChoice(obj) {
        let that = this
        let showMask = true
        let { hadIndex, had, dataItem, data, value } = this.state
        let b = true
        for (let i in dataItem) {
            if (dataItem[i] == obj) {
                if (obj.children) {
                    dataItem = dataItem[i].children
                    had.push(obj.value)
                    hadIndex = hadIndex - 0 + 1
                } else {
                    if (value) {
                        showMask = false
                        let newhad = []
                        for (let i in had) {
                            newhad.push(had[i])
                        }
                        newhad.slice(0, newhad.length - 1)
                        newhad.push(obj.value)
                        value = newhad.join(',')
                        b = false
                    } else {
                        showMask = false
                        let newhad = []
                        for (let i in had) {
                            newhad.push(had[i])
                        }
                        newhad.push(obj.value)
                        value = newhad.join(',')
                        b = false
                    }
                }
            }
        }
        if (b) {
            value = had.join(',')
        }
        if (!showMask) {
            if (this.props.onChange) {
                setTimeout(() => {
                    that.props.onChange(that.getvalue())
                }, 0)
            }
        }
        this.setState({
            hadIndex,
            had,
            dataItem,
            showMask,
            value,
        })
    }
    setHadIndex(obj, index) {
        let { data, had, value } = this.state
        let allData = this.getData(data)
        let newData = []
        for (let i in allData) {
            for (let j in allData[i]) {
                if (allData[i][j].value == obj) {
                    newData = allData[i]
                }
            }
        }
        had = had.slice(0, index)
        let arrvalue = value.split(',')
        let newvalue = []
        for (let i in arrvalue) {
            newvalue.push(arrvalue[i])
            if (arrvalue[i] == obj) {
                break
            }
        }
        this.setState({
            dataItem: newData,
            hadIndex: index,
            had,
            value: newvalue.join(','),
        })
    }
    getData(arr) {
        let returnData = []
        returnData.push(arr)
        for (let i in arr) {
            if (arr[i].children) {
                returnData.push(arr[i].children)

                for (let j in arr[i].children) {
                    if (arr[i].children[j].children) {
                        returnData.push(arr[i].children[j].children)
                    }
                }
            }
        }
        return returnData
    }
    showTitle() {
        let items = []
        let { hadIndex, had } = this.state
        let { titles } = this.props
        for (let i in had) {
            items.push(
                <p key={i} onClick={() => this.setHadIndex(had[i], i)} className={styles.blue}>
                    {had[i]}
                </p>,
            )
        }
        if (had.length == hadIndex + 1) {
        } else {
            items.push(<p key={998}>{titles[hadIndex]}</p>)
        }
        return items
    }
    render() {
        let { title, titles, placeholder, must } = this.props
        let { value, data, hadIndex, had, showMask } = this.state
        return (
            <div className={styles.Box}>
                <div onClick={() => this.openMask()} className={styles.showvalue}>
                    <p className={styles.title}>
                        {title}
                        {must ? <span style={{ color: 'red' }}>*</span> : null}
                    </p>
                    {value ? (
                        <p className={styles.value}>{value}</p>
                    ) : (
                        <p className={styles.placeholder}>{placeholder}</p>
                    )}
                </div>
                {showMask ? (
                    <div className={styles.Mask}>
                        <div className={styles.bottom}>
                            <div className={styles.top}>
                                <div style={{ width: '58px', height: '61px' }} />
                                <p>请选择</p>
                                <div
                                    style={{ padding: '20px' }}
                                    onClick={() =>
                                        this.setState({
                                            showMask: false,
                                        })
                                    }>
                                    <img
                                        src={closeImg}
                                        alt=""
                                        srcSet=""
                                        style={{ width: '18px', height: '18px' }}
                                    />
                                </div>
                            </div>
                            <div className={styles.Already}>{this.showTitle()}</div>
                            <div className={styles.scroll}>
                                <div className={styles.ItemBox}>{this.items()}</div>
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
 
<AndUnion
                    data={[
                        { key: '001', value: 'value001' },
                        { key: '002', value: 'value002' },
                        { key: '003', value: 'value003' },
                        {
                            key: '004',
                            value: 'value004',
                            children: [
                                {
                                    key: '005',
                                    value: 'value005',
                                },
                                {
                                    key: '006',
                                    value: 'value006',
                                    children: [
                                        {
                                            key: '007',
                                            value: 'value007',
                                        },
                                        {
                                            key: '008',
                                            value: 'value008',
                                        },
                                    ],
                                },
                            ],
                        },
                    ]}
                    title="报修地址"
                    titles={['选择楼栋', '选择楼层', '选择房间']}
                    placeholder="请选择地址"
                    ref={andUnion => {
                        this.andUnion = andUnion
                    }}
                />


                this.andUnion.getvalue()
 *
 */
