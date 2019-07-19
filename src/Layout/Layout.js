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
            axios.defaults.baseURL = window.tukit.baseUrl
                ? `${window.tukit.baseUrl}:8804/houzai`
                : '/'
            axios.defaults.headers['Auth-Token'] =
                window.tukit.token || '2ec68990-cf5f-4ea3-a05c-801e55111828'
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
