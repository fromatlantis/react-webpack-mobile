import React, { PureComponent } from 'react'
import styles from './Forms.module.css'
import {
    FlatList,
    Header,
    Container,
    Content,
    InputBox,
    Title,
    Label,
    SingleElection,
    AndUnion,
    DatePickerBox,
    // LogoBox,
    Feedback,
    Picture,
} from '../../components'

export default class Forms extends PureComponent {
    constructor() {
        super()
        this.state = {
            stateForms: {},
            data: [],
            ok: true,
        }
    }
    getFormsState() {
        let { data, stateForms } = this.state
        for (let i in data) {
            if (data[i].props.must) {
                if (!stateForms[data[i].index]) {
                    let placeholder = data[i].props.placeholder || '请填写' + data[i].props.title
                    this.feedback.error(placeholder)
                    return
                }
            }
        }
        console.log(this.state.stateForms)
        return this.state.stateForms
    }
    componentDidMount() {
        this.setState({
            stateForms: this.props.result,
            data: this.props.data,
        })
    }
    render() {
        return (
            <div>
                {this.showSubitem()}
                <Feedback
                    ref={feedback => {
                        this.feedback = feedback
                    }}
                />
            </div>
        )
    }
    toSetState(data, value) {
        let { stateForms } = this.state
        stateForms[data] = value
        this.setState({
            stateForms,
            ok: !this.state.ok,
        })
    }
    showSubitem() {
        let { stateForms, data } = this.state
        let item = []
        for (let i in data) {
            if (data[i].title) {
                item.push(<Title title={data[i].title} key={i * 999 + 998} />)
            }
            if (data[i].assembly == 'InputBox') {
                item.push(
                    <InputBox
                        key={i}
                        {...data[i].props}
                        value={stateForms[data[i].index]}
                        onChange={value => this.toSetState(data[i].index, value)}
                    />,
                )
            } else if (data[i].assembly == 'Label') {
                item.push(
                    <Label
                        key={i}
                        {...data[i].props}
                        value={stateForms[data[i].index]}
                        onChange={value => this.toSetState(data[i].index, value)}
                    />,
                )
            } else if (data[i].assembly == 'SingleElection') {
                item.push(
                    <SingleElection
                        key={i}
                        {...data[i].props}
                        value={stateForms[data[i].index]}
                        onChange={value => this.toSetState(data[i].index, value)}
                    />,
                )
            } else if (data[i].assembly == 'AndUnion') {
                item.push(
                    <AndUnion
                        key={i}
                        {...data[i].props}
                        value={stateForms[data[i].index]}
                        onChange={value => this.toSetState(data[i].index, value)}
                    />,
                )
            } else if (data[i].assembly == 'DatePickerBox') {
                item.push(
                    <DatePickerBox
                        key={i}
                        {...data[i].props}
                        value={stateForms[data[i].index]}
                        onChange={value => this.toSetState(data[i].index, value)}
                    />,
                )
            }
            // else if (data[i].assembly == 'LogoBox') {
            //     item.push(
            //         <LogoBox
            //             key={i}
            //             {...data[i].props}
            //             value={stateForms[data[i].index]}
            //             onChange={value => this.toSetState(data[i].index, value)}
            //         />,
            //     )
            // }
            else if (data[i].assembly == 'Picture') {
                item.push(
                    <Picture
                        key={i}
                        {...data[i].props}
                        value={stateForms[data[i].index]}
                        onChange={value => this.toSetState(data[i].index, value)}
                    />,
                )
            }
        }
        return item
    }
}

/**
 * 
 * 
 * 
 
 data: [
            {
                title: '输入框',
                assembly: 'InputBox',
                index: 'inputbox',
                props: {
                    must: true,
                    title: 'title1',
                    placeholder: 'inputbox',
                },
            },
            {
                title: '单选',
                assembly: 'SingleElection',
                index: 'singleElection',
                props: {
                    must: true,
                    show: '企业类型',
                    options: [
                        {
                            value: 'option1',
                            key: '001',
                        },
                        {
                            value: 'option2',
                            key: '002',
                        },
                        {
                            value: 'option3',
                            key: '003',
                            color: 'red',
                        },
                    ],
                    placeholder: '请选择企业类型',
                },
            },
            {
                title: '多级选择',
                assembly: 'AndUnion',
                index: 'andUnion',
                props: {
                    must: true,
                    data: [
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
                    ],
                    title: '报修地址',
                    titles: ['选择楼栋', '选择楼层', '选择房间'],
                    placeholder: '请选择地址',
                },
            },
            {
                title: '复选',
                assembly: 'Label',
                index: 'label',
                props: {
                    must: true,
                    title: '企业类型',
                    data: ['实驻企业', '虚拟企业', '李小生大公司'], //所有数据
                    placeholder: '请选择企业类型',
                },
            },
            {
                title: '日期',
                assembly: 'DatePickerBox',
                index: 'datePickerBox',
                props: {
                    must: true,
                    title: '成立日期',
                    placeholder: '请选择日期',
                },
            },
            {
                title: '图片上传',
                assembly: 'LogoBox',
                index: 'logoBox',
                props: {
                    must: true,
                    title: '企业Logo',
                    about: '仅支持jpg、jpeg、png格式，大小不超过5M',
                },
            },
        ],
        result: {
            inputbox: '1',
            label: '',
            singleElection: '001',
            andUnion: 'value004,value005',
            datePickerBox: '1993-06-15',
            logoBox: 'https://www.baidu.com/img/bd_logo1.png',
        },
    <p onClick={() => this.forms.getFormsState()}>getFormsState</p>
    <Forms data={data} result={result} ref={forms => (this.forms = forms)} />

    支持 ： 
    输入款 InputBox
    单选 SingleElection
    多级选择 AndUnion
    复选 Label
    日期 DatePickerBox
    图片上传 LogoBox
 * 
 * 
 */
