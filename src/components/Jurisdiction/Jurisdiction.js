import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'

class Jurisdiction extends Component {
    render() {
        let { children, data, auth } = this.props
        console.log(this.props.auth)
        let b = false
        for (let i in auth) {
            if (auth[i] == data) {
                b = true
            }
        }
        if (b) {
            return <div>{children}</div>
        } else {
            return null
        }
    }
}

const mapStateToProps = state => {
    return {
        router: state.router,
        user: state.authUser.user,
        auth: state.authUser.auth,
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
)(Jurisdiction)

/**
 * 
 * 
 
data // 权限名字
<Jurisdiction data="收费管理">
    {
        页面内容
    }
</Jurisdiction>

 * 
 */
