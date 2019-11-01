import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { TabBar } from 'antd-mobile'
import { FlatList, Header, Container, Content, Forms, InputBox, Picture } from '../../components'
import styles from './Eliminate.module.css'

class Eliminate extends Component {
    state = {
        data: [],
        len: 10,
        ok: false,
        i: 'lxs',
        j: 'lxs',
        num: 0,
        money: 10,
    }
    exchange(indedx, jndedx) {
        let { i, j, data, ok } = this.state
        if (i == 'lxs') {
            this.setState({
                i: indedx,
                j: jndedx,
            })
        } else {
            indedx -= 0
            jndedx -= 0
            i -= 0
            j -= 0
            if (i == indedx + 1 || i == indedx - 1 || j == jndedx + 1 || j == jndedx - 1) {
                let item = data[i][j]
                data[i][j] = data[indedx][jndedx]
                data[indedx][jndedx] = item
                this.setState({
                    data,
                    ok: !ok,
                    i: 'lxs',
                    j: 'lxs',
                    money: this.state.money - 1,
                })
                let that = this
                setTimeout(() => {
                    that.eliminate()
                }, 300)
            } else {
                this.setState({
                    i: indedx,
                    j: jndedx,
                })
            }
        }
    }
    componentDidMount() {
        let { len } = this.state
        let data = []
        for (let i = 0; i < len; i++) {
            let item = []
            for (let j = 0; j < len; j++) {
                let index = Math.floor(Math.random() * 4) - 0 + 1
                item.push(index)
            }
            data.push(item)
        }
        this.setState({
            data,
            num: 0,
            money: 10,
        })
    }
    showitem() {
        let { i, j, data, ok } = this.state
        if (i == 'lxs') {
            return null
        } else {
            if (data[i][j] == 4) {
                return <div className={styles.item1} key={i + j * 99} />
            } else if (data[i][j] == 1) {
                return <div className={styles.item2} key={i + j * 99} />
            } else if (data[i][j] == 2) {
                return <div className={styles.item3} key={i + j * 99} />
            } else if (data[i][j] == 3) {
                return <div className={styles.item4} key={i + j * 99} />
            } else {
                return <div className={styles.item5} key={i + j * 99} />
            }
        }
    }
    showItem() {
        let { data } = this.state
        let itemBox = []
        for (let i in data) {
            let item = []
            for (let j in data[i]) {
                if (data[i][j] == 4) {
                    item.push(
                        <div
                            onClick={() => this.exchange(i, j)}
                            className={styles.item1}
                            key={i + j * 99}
                        />,
                    )
                } else if (data[i][j] == 1) {
                    item.push(
                        <div
                            onClick={() => this.exchange(i, j)}
                            className={styles.item2}
                            key={i + j * 99}
                        />,
                    )
                } else if (data[i][j] == 2) {
                    item.push(
                        <div
                            onClick={() => this.exchange(i, j)}
                            className={styles.item3}
                            key={i + j * 99}
                        />,
                    )
                } else if (data[i][j] == 3) {
                    item.push(
                        <div
                            onClick={() => this.exchange(i, j)}
                            className={styles.item4}
                            key={i + j * 99}
                        />,
                    )
                } else {
                    item.push(<div className={styles.item5} key={i + j * 99} />)
                }
            }
            itemBox.push(
                <div key={i} className={styles.itemBox}>
                    {item}
                </div>,
            )
        }
        return itemBox
    }
    del(i, j) {
        let { data } = this.state
        data[i][j] = ''
        this.setState({
            data,
            ok: !this.state.ok,
            num: this.state.num + 1,
        })
    }
    eliminate() {
        let { len, data } = this.state
        len = len
        let b = false
        for (let i = 0; i < len; i++) {
            for (let j = 0; j < len; j++) {
                if (
                    data[i + 3] &&
                    data[i][j] == data[i + 1][j] &&
                    data[i + 1][j] == data[i + 2][j] &&
                    data[i + 2][j] == data[i + 3][j]
                ) {
                    this.del(i, j)
                    this.del(i + 1, j)
                    this.del(i + 2, j)
                    this.del(i + 3, j)
                    b = true
                }

                if (
                    data[i][j + 3] &&
                    data[i][j] == data[i][j + 1] &&
                    data[i][j] == data[i][j + 2] &&
                    data[i][j] == data[i][j + 3]
                ) {
                    this.del(i, j)
                    this.del(i, j + 1)
                    this.del(i, j + 2)
                    this.del(i, j + 3)
                    b = true
                }
            }
        }
        let that = this
        console.log('object')
        if (b) {
            setTimeout(() => {
                that.decline()
            }, 300)
        }
    }
    decline() {
        let { data, ok } = this.state
        for (let i in data) {
            let newdata = []
            for (let j in data[i]) {
                if (data[i][j]) {
                    newdata.push(data[i][j])
                }
            }
            let len = 10 - newdata.length
            for (let j = 0; j < len; j++) {
                newdata.push('')
            }
            data[i] = newdata
        }
        this.setState({
            data,
            ok: !ok,
        })
        let that = this
        that.added()
    }
    added() {
        let { data, ok } = this.state
        let that = this
        setTimeout(() => {
            for (let i in data) {
                for (let j in data[i]) {
                    if (!data[i][j]) {
                        data[i][j] = Math.floor(Math.random() * 4) - 0 + 1
                    }
                }
            }
            that.setState({
                data,
                ok: !ok,
            })
            setTimeout(() => {
                that.eliminate()
            }, 300)
        }, 300)
    }
    render() {
        let { data, money, num } = this.state
        return (
            <Container>
                <Header title="消消乐" />
                {money ? null : (
                    <div>
                        <p>您的最终得分是{num}</p>
                        <p onClick={() => this.componentDidMount()}>点击重来</p>
                    </div>
                )}
                <Content>
                    <div className={styles.box}>{this.showItem()}</div>
                    {this.showitem()}
                    <p>剩余{money}步</p>
                    <p>{num}分</p>
                    <p className={styles.line} onClick={() => this.eliminate()}>
                        eliminate
                    </p>
                    <p className={styles.line} onClick={() => this.decline()}>
                        decline
                    </p>
                    <p className={styles.line} onClick={() => this.added()}>
                        added
                    </p>
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
)(Eliminate)
