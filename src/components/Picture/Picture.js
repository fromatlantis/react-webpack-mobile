import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import styles from './Picture.module.css'
import logoadd from './logoadd.png'
import { id } from 'postcss-selector-parser'

class Picture extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {},
            uris: [
                // 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=434620136,424427949&fm=26&gp=0.jpg',
                // 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2115054162,1112954537&fm=26&gp=0.jpg',
                // 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3476833193,2209982244&fm=26&gp=0.jpg',
                // 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=465598662,4026916364&fm=26&gp=0.jpg',
                // 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4009962951,2135768552&fm=26&gp=0.jpg',
                // 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2722157898,2700618609&fm=26&gp=0.jpg',
                // 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3605800553,1683296319&fm=26&gp=0.jpg',
                // 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1915011011,2156126360&fm=26&gp=0.jpg',
                // 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2777233881,1106483217&fm=26&gp=0.jpg',
                // 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1217994855,193273259&fm=26&gp=0.jpg',
                // 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2002915800,1792756943&fm=26&gp=0.jpg',
            ],
        }
    }
    componentDidMount() {
        let PictureSee = localStorage.getItem('PictureSee')
        let { value = [] } = this.props
        if (PictureSee) {
            let uris = JSON.parse(localStorage.getItem('PictureSee') || '')
            this.setState({
                uris,
            })
            if (this.props.onChange) {
                this.props.onChange(uris)
            }
            setTimeout(() => {
                localStorage.setItem('PictureSee', '')
            }, 0)
        } else {
            this.setState({
                uris: value,
            })
            if (this.props.onChange) {
                this.props.onChange(value)
            }
        }
    }
    toSee(index) {
        let that = this
        let { uris } = this.state
        let { see } = this.props
        localStorage.setItem('PictureSee', JSON.stringify(uris))
        setTimeout(() => {
            see = see + ''
            that.props.push('/picturesee/' + see + '/' + index)
        }, 0)
    }
    showUris() {
        let { uris } = this.state
        let item = []
        let len = uris.length
        if (len == 1) {
            for (let i in uris) {
                item.push(
                    <img
                        key={i}
                        onClick={() => this.toSee(i)}
                        src={uris[i]}
                        className={`${styles.uriBox} ${styles.one}`}
                        alt=""
                        srcSet=""
                    />,
                )
            }
        } else if (len == 2 || len == 4) {
            for (let i in uris) {
                item.push(
                    <img
                        key={i}
                        onClick={() => this.toSee(i)}
                        src={uris[i]}
                        className={`${styles.uriBox} ${styles.two}`}
                        alt=""
                        srcSet=""
                    />,
                )
            }
        } else if (len > 9) {
            uris = uris.slice(0, 9)
            len = uris.length
            for (let i = 0; i < 8; i++) {
                item.push(
                    <img
                        key={i}
                        onClick={() => this.toSee(i)}
                        src={uris[i]}
                        className={styles.uriBox}
                        alt=""
                        srcSet=""
                    />,
                )
            }
            item.push(
                <div className={styles.uriBox} key={9} onClick={() => this.toSee(8)}>
                    <img src={uris[8]} className={styles.uri} alt="" srcSet="" />
                    <div className={styles.moreBox}>
                        <p className={styles.moreT}>+{this.state.uris.length - 9}</p>
                    </div>
                </div>,
            )

            let index = 3 - (len % 3)
            if (index >= 3) {
                index = 0
            }
            for (let i = 0; i < index; i++) {
                item.push(<div key={i + 998} className={styles.uriBox} />)
            }
        } else {
            for (let i in uris) {
                item.push(
                    <img
                        key={i}
                        src={uris[i]}
                        onClick={() => this.toSee(i)}
                        className={styles.uriBox}
                        alt=""
                        srcSet=""
                    />,
                )
            }
            let index = 3 - (len % 3)
            if (index >= 3) {
                index = 0
            }
            for (let i = 0; i < index; i++) {
                item.push(<div key={i + 998} className={styles.uriBox} />)
            }
        }

        return item
    }
    addUri() {
        let that = this
        let { uris } = this.state
        window.tukit.selectPictures({
            success: data => {
                // 成功操作
                uris.push(data.filename)
                that.setState({
                    uris,
                })
                if (that.props.onChange) {
                    that.props.onChange(uris)
                }
            },
            cancel: function() {
                // 取消操作
            },
        })

        uris.push(
            'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2115054162,1112954537&fm=26&gp=0.jpg',
        )
        that.setState({
            uris,
        })
        if (this.props.onChange) {
            this.props.onChange(uris)
        }
    }
    addBox() {
        let item = []
        let { uris } = this.state
        let { maxLangth = 13 } = this.props
        let len = uris.length
        if (maxLangth > len) {
            item.push(
                <div className={styles.add} key={615} onClick={() => this.addUri()}>
                    <img src={logoadd} alt="" srcSet="" />
                </div>,
            )
        }
        for (let i = 0; i < len; i++) {
            item.push(
                <img
                    key={i}
                    onClick={() => this.toSee(i)}
                    src={uris[i]}
                    className={styles.uriBox}
                    alt=""
                    srcSet=""
                />,
            )
        }
        if (maxLangth > len) {
            len++
        }
        let index = 3 - (len % 3)
        if (index >= 3) {
            index = index - 3
        }

        for (let i = 0; i < index; i++) {
            item.push(<div key={i + 998} className={styles.uriBox} />)
        }
        return item
    }
    render() {
        let { title, must, see } = this.props
        if (see) {
            return (
                <div className={styles.Box}>
                    <p className={styles.title}>
                        {title}
                        {must ? <span style={{ color: 'red' }}>*</span> : null}
                    </p>
                    <div className={styles.urisBox}>{this.showUris()}</div>
                </div>
            )
        }
        return (
            <div className={styles.Box}>
                <p className={styles.title}>
                    {title}
                    {must ? <span style={{ color: 'red' }}>*</span> : null}
                </p>
                <div className={styles.urisBox}>{this.addBox()}</div>
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
)(Picture)

/**
 * 
 * 
 * 
 * 
 

<Picture
    title="title"
    must
    maxLangth={12}
    see
    value={[
        'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=434620136,424427949&fm=26&gp=0.jpg',
        'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2115054162,1112954537&fm=26&gp=0.jpg',
        'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3476833193,2209982244&fm=26&gp=0.jpg',
        'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=465598662,4026916364&fm=26&gp=0.jpg',
        'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4009962951,2135768552&fm=26&gp=0.jpg',
        'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2722157898,2700618609&fm=26&gp=0.jpg',
        'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3605800553,1683296319&fm=26&gp=0.jpg',
        'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1915011011,2156126360&fm=26&gp=0.jpg',
        'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2777233881,1106483217&fm=26&gp=0.jpg',
        'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1217994855,193273259&fm=26&gp=0.jpg',
        'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2002915800,1792756943&fm=26&gp=0.jpg',
    ]}
/>

title //标题
must // 必填
maxLangth // 最大图片数量，默认13
see // true 是产看。 false不然就是编辑页面
data // 回显数据

 * 
 * 
 * 
 */
