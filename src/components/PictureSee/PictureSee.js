import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { push, goBack } from 'connected-react-router'
import { FlatList, Header, Container, Content, Forms, InputBox, Picture } from '../../components'
import styles from './PictureSee.module.css'

import imgleft from '../../assets/imgleft.png'
import imgright from '../../assets/imgright.png'
class PictureSee extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {},
            uris: [],
            index: 0,
            see: 'true',
        }
    }
    componentDidMount() {
        let uris = JSON.parse(localStorage.getItem('PictureSee'))
        let index = this.props.match.params.index
        let see = this.props.match.params.see
        if (see == 'true') {
            see = true
        } else {
            see = false
        }
        this.setState({
            uris,
            index,
            see,
        })
    }
    goBack() {
        let { uris, index } = this.state
        let that = this
        localStorage.setItem('PictureSee', JSON.stringify(uris))
        setTimeout(() => {
            that.props.goBack()
        }, 0)
    }
    setIndex(add) {
        let { uris, index } = this.state
        let len = uris.length - 1
        if (add) {
            if (index < len) {
                index++
            }
        } else {
            if (index > 0) {
                index--
            }
        }
        this.setState({
            index,
        })
    }
    del() {
        let { uris, index } = this.state
        let newuris = []
        let len = uris.length - 1
        for (let i in uris) {
            if (i != index) {
                newuris.push(uris[i])
            }
        }
        if (index == len) {
            if (index == 0) {
                this.goBack()
            } else {
                index--
            }
        }
        this.setState({
            index,
            uris: newuris,
        })
    }
    showuris() {
        let { uris, index, see } = this.state
        return (
            <div className={styles.box}>
                <img src={uris[index]} className={styles.img} alt="" srcSet="" />,
                <img
                    src={imgleft}
                    className={styles.imgleft}
                    onClick={() => this.setIndex(0)}
                    alt=""
                    srcSet=""
                />
                <img
                    src={imgright}
                    className={styles.imgright}
                    onClick={() => this.setIndex(1)}
                    alt=""
                    srcSet=""
                />
                <p className={see ? styles.indexT : styles.indext}>
                    {index - 0 + 1 + '/' + uris.length}
                </p>
                {see ? null : (
                    <div className={styles.delBox} onClick={() => this.del()}>
                        <p className={styles.delT}>删除</p>
                    </div>
                )}
            </div>
        )
    }
    render() {
        return (
            <Container>
                <Header title="图片查看" Back={() => this.goBack()} />
                <Content>{this.showuris()}</Content>
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
            goBack: goBack,
        },
        dispatch,
    )
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(PictureSee)
