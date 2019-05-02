import React, { Component } from 'react'

import Main from './Main'
import { FullScreenLoading } from '../components'

export default class Layout extends Component {
    state = {
        tukit: false,
    }
    componentWillMount() {
        /**
         * 刷新页面redux数据会丢失
         * 用户信息不想放在storage
         * 如果session过期，userinfo接口不会返回401状态
         * 所以每次刷新页面需要重新获取用户信息
         */
        const config = {
            header: false,
            headerBackground: '#fff',
        }
        window.tukit.ready(() => {
            this.setState({ tukit: true })
        }, config)
    }
    render() {
        let { tukit } = this.state
        if (tukit) {
            return <Main />
        } else {
            // 获取用户信息前添加loading效果
            return <FullScreenLoading />
        }
    }
}
