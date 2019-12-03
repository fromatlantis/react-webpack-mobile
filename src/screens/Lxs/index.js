import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { TabBar } from 'antd-mobile'
import {
    FlatList,
    Header,
    Container,
    Content,
    Forms,
    InputBox,
    Picture,
    Jurisdiction,
    Ranges,
} from '../../components'

class Home extends Component {
    state = {
        selectedTab: 'blueTab',
        hidden: false,
        data: [
            {
                title: '输入框',
                assembly: 'InputBox',
                index: 'inputbox',
                props: {
                    title: 'title',
                    placeholder: '请填写title',
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
            // {
            //     title: '图片上传',
            //     assembly: 'LogoBox',
            //     index: 'logoBox',
            //     props: {
            //         must: true,
            //         title: '企业Logo',
            //         about: '仅支持jpg、jpeg、png格式，大小不超过5M',
            //     },
            // },
            {
                assembly: 'Picture',
                index: 'picture',
                props: {
                    title: '图片上传（新）',
                    // must: true,
                    maxLangth: 12,
                    see: false,
                },
            },
        ],
        rangesData: [
            'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=434620136,424427949&fm=26&gp=0.jpg',
            'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2115054162,1112954537&fm=26&gp=0.jpg',
            'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3476833193,2209982244&fm=26&gp=0.jpg',
            'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=465598662,4026916364&fm=26&gp=0.jpg',
            'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4009962951,2135768552&fm=26&gp=0.jpg',
            'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2722157898,2700618609&fm=26&gp=0.jpg',
            'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3605800553,1683296319&fm=26&gp=0.jpg',
            'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1915011011,2156126360&fm=26&gp=0.jpg',
            'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2777233881,1106483217&fm=26&gp=0.jpg',
            // 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1217994855,193273259&fm=26&gp=0.jpg',
            // 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2002915800,1792756943&fm=26&gp=0.jpg',
        ],
        result: {
            inputbox: '',
            label: '',
            singleElection: '',
            andUnion: '',
            datePickerBox: '',
            // logoBox: 'https://www.baidu.com/img/bd_logo1.png',
            picture: '',
        },
    }
    // componentDidMount() {
    //     document.title = '李小生'
    // }
    render() {
        let { data, result, rangesData } = this.state
        const row = (item, index) => {
            return <img src={item} alt="" style={{ width: '100%', height: 50 }} />
        }
        return (
            <Container>
                <Header title="李小生" />
                <Content>
                    {/* <Picture
                        title="title"
                        must
                        maxLangth={12}
                        // see
                        value={[
                            'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=434620136,424427949&fm=26&gp=0.jpg',
                            'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2115054162,1112954537&fm=26&gp=0.jpg',
                            'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3476833193,2209982244&fm=26&gp=0.jpg',
                            'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=465598662,4026916364&fm=26&gp=0.jpg',
                            'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4009962951,2135768552&fm=26&gp=0.jpg',
                            'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2722157898,2700618609&fm=26&gp=0.jpg',
                            'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3605800553,1683296319&fm=26&gp=0.jpg',
                            'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1915011011,2156126360&fm=26&gp=0.jpg',
                            'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2777233881,1106483217&fm=26&gp=0.jpg',
                            'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1217994855,193273259&fm=26&gp=0.jpg',
                            'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2002915800,1792756943&fm=26&gp=0.jpg',
                        ]}
                    /> */}
                    <p onClick={() => console.log(this.forms.getFormsState())}>
                        检测Forms,并获取数据
                    </p>
                    {/* <Ranges rangesData={rangesData} renderRow={row} len={5} /> */}

                    <Jurisdiction data="收费管理">
                        <Forms data={data} result={result} ref={forms => (this.forms = forms)} />
                    </Jurisdiction>
                </Content>
            </Container>
        )
    }
}
const mapStateToProps = state => {
    return {
        router: state.router,
        user: state.authUser.user,
    }
}
const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            push: push,
        },
        dispatch,
    )
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Home)
