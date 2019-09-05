import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { TabBar } from 'antd-mobile'
import { FlatList, Header, Container, Content, Screen } from '../../components'

class Home extends Component {
    state = {
        selectedTab: 'blueTab',
        hidden: false,
    }
    renderContent(pageText) {
        return (
            <div
                style={{
                    backgroundColor: 'white',
                    height: '100%',
                    textAlign: 'center',
                }}>
                <div style={{ paddingTop: 60 }}>
                    Clicked “{pageText}” tab， show “{pageText}” information
                </div>
                <span
                    style={{
                        display: 'block',
                        marginTop: 40,
                        marginBottom: 20,
                        color: '#108ee9',
                    }}
                    onClick={e => {
                        e.preventDefault()
                        this.setState({
                            hidden: !this.state.hidden,
                        })
                    }}>
                    Click to show/hide tab-bar
                </span>
            </div>
        )
    }
    render() {
        const { user } = this.props
        return (
            <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                    tabBarPosition="bottom"
                    hidden={this.state.hidden}
                    prerenderingSiblingsNumber={0}>
                    <TabBar.Item
                        title="Life"
                        key="Life"
                        style={{ display: 'flex' }}
                        icon={
                            <div
                                style={{
                                    width: '22px',
                                    height: '22px',
                                    background:
                                        'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat',
                                }}
                            />
                        }
                        selectedIcon={
                            <div
                                style={{
                                    width: '22px',
                                    height: '22px',
                                    background:
                                        'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat',
                                }}
                            />
                        }
                        selected={this.state.selectedTab === 'blueTab'}
                        badge={1}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'blueTab',
                            })
                        }}
                        data-seed="logId">
                        <Container>
                            <Header noBack title={user.name} />
                            <Content>
                                <Screen
                                    index={true}
                                    onchange={data => console.log(data)}
                                    data={[
                                        {
                                            type: 0,
                                            key: 'reset',
                                            name: '重置',
                                            data: [],
                                            value: '',
                                        }, //重置按钮
                                        {
                                            type: 1,
                                            key: 'money',
                                            name: '预估金额',
                                            data: [],
                                            value: '',
                                        }, //排序（没有选中）
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
                                            index: ['001', '002'],
                                            value: '',
                                            choice: false,
                                        }, //筛选（默认没有选中）
                                        {
                                            type: 3,
                                            key: 'qwe',
                                            name: '入驻意向',
                                            data: ['购买', '租赁'],
                                            value: '',
                                            choice: false,
                                        }, //筛选，展开筛选，但是没有选中的状态
                                    ]}
                                />
                                <FlatList />
                            </Content>
                        </Container>
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div
                                style={{
                                    width: '22px',
                                    height: '22px',
                                    background:
                                        'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat',
                                }}
                            />
                        }
                        selectedIcon={
                            <div
                                style={{
                                    width: '22px',
                                    height: '22px',
                                    background:
                                        'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat',
                                }}
                            />
                        }
                        title="Koubei"
                        key="Koubei"
                        badge={'new'}
                        selected={this.state.selectedTab === 'redTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'redTab',
                            })
                        }}
                        data-seed="logId1">
                        {this.renderContent('Koubei')}
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div
                                style={{
                                    width: '22px',
                                    height: '22px',
                                    background:
                                        'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat',
                                }}
                            />
                        }
                        selectedIcon={
                            <div
                                style={{
                                    width: '22px',
                                    height: '22px',
                                    background:
                                        'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat',
                                }}
                            />
                        }
                        title="Friend"
                        key="Friend"
                        dot
                        selected={this.state.selectedTab === 'greenTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'greenTab',
                            })
                        }}>
                        {this.renderContent('Friend')}
                    </TabBar.Item>
                    <TabBar.Item
                        icon={{
                            uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg',
                        }}
                        selectedIcon={{
                            uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg',
                        }}
                        title="My"
                        key="my"
                        selected={this.state.selectedTab === 'yellowTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'yellowTab',
                            })
                        }}>
                        {this.renderContent('My')}
                    </TabBar.Item>
                </TabBar>
            </div>
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
