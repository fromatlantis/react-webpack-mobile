import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { TabBar } from 'antd-mobile'
import { FlatList, Header, Container, Content, Forms, InputBox, Picture } from '../../components'
import styles from './index.module.css'

class Game extends Component {
    state = {
        data: {},
    }
    render() {
        let { data, result } = this.state
        return (
            <Container>
                <Header title="李小生" />
                <Content>
                    <div onClick={() => this.props.push('/Eliminate')} className={styles.item}>
                        <p>消消乐</p>
                    </div>
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
)(Game)
