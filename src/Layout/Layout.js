import React, { Component } from 'react'
import axios from 'axios'
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
            // axios全局设置
            axios.defaults.baseURL = window.tukit.baseUrl ? `${window.tukit.baseUrl}` : '/'
            axios.defaults.headers['Auth-Token'] =
                window.tukit.token || '186b2110-9737-425e-8dc4-bacbcfe631ec'
            // // 真机-本地
            // axios.defaults.baseURL = '/'
            // axios.defaults.headers['Auth-Token'] = '186b2110-9737-425e-8dc4-bacbcfe631ec'
            // ！！！重要下面代码一定要放在最后
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
