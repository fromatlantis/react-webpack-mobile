import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { TabBar } from 'antd-mobile'
import { FlatList, Header, Container, Content, Forms, InputBox } from '../../components'

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
            inputbox: '',
            label: '',
            singleElection: '',
            andUnion: '',
            datePickerBox: '',
            logoBox: '',
        },
    }
    render() {
        let { data, result } = this.state
        return (
            <Container>
                <Header title="李小生" />
                <Content>
                    <Forms data={data} result={result} ref={forms => (this.forms = forms)} />
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
