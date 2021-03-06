import React, { Component } from 'react'

import Content from './Content/Content'
import { FullScreenLoading } from '../components'

import { connect } from 'react-redux'

import { actions } from 'reduxDir/authUser'

class Main extends Component {
    componentWillMount() {
        /**
         * 刷新页面redux数据会丢失
         * 用户信息不想放在storage
         * 如果session过期，userinfo接口不会返回401状态
         * 所以每次刷新页面需要重新获取用户信息
         */
        //alert(window.tukit.token)
        this.props.userInfo()
    }
    render() {
        let { user } = this.props
        if (user && user.name) {
            return <Content auths={this.props.auths} />
        } else {
            // 获取用户信息前添加loading效果
            return <FullScreenLoading />
        }
    }
}

const mapStateToProps = state => {
    return {
        user: state.authUser.user,
        auths: state.authUser.auths,
        router: state.router,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        userInfo: () => dispatch(actions('getUserInfo')()),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Main)
