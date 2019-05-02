import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'
import { goBack } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Icon, NavBar } from 'antd-mobile'

/***
 *
 * title 字符串 必填
 * noleft 无返回 非必填
 */
class Header extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            headerPadding: window.tukit.safeArea ? window.tukit.safeArea.topInset : 20,
        }
    }
    render() {
        return (
            <NavBar
                style={{ paddingTop: `${this.state.headerPadding}px`, boxSizing: 'content-box' }}
                mode="dark"
                icon={
                    <Icon
                        type="left"
                        onClick={() => {
                            this.props.goBack()
                        }}
                    />
                }>
                {this.props.title}
            </NavBar>
        )
    }
}
Header.propTypes = {
    title: PropTypes.string.isRequired,
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
            goBack: goBack,
        },
        dispatch,
    )
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Header)
