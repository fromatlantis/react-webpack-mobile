import React, { PureComponent } from 'react'
import styles from './LogoBox.module.css'
import logoadd from './logoadd.png'

export default class LogoBox extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            uri: '',
        }
    }
    componentDidMount() {
        let { value } = this.props
        this.setState({
            uri: value,
        })
    }
    seturl(uri) {
        this.setState({ uri })
    }
    //父组件传值
    parentValue = value => {
        this.setState({
            uri: value,
        })
    }
    addImg() {
        let that = this
        window.tukit.selectPictures({
            success: data => {
                // 成功操作
                that.setState({
                    uri: data.filename,
                })
                if (that.props.onChange) {
                    that.props.onChange(data.filename)
                }
            },
            cancel: function() {
                // 取消操作
            },
        })

        // that.setState({
        //     uri: 'http://imgk.zol.com.cn/dcbbs/9659/a9658161_s.jpg',
        // })
        // if (that.props.onChange) {
        //     that.props.onChange('http://imgk.zol.com.cn/dcbbs/9659/a9658161_s.jpg')
        // }
    }
    render() {
        let { title, must, about } = this.props
        let { uri } = this.state
        return (
            <div className={styles.box}>
                <p className={styles.title}>
                    {title}
                    {must ? <span style={{ color: 'red' }}>*</span> : null}
                </p>
                <div>
                    {uri ? (
                        <img
                            src={uri}
                            className={styles.Img}
                            alt=""
                            srcSet=""
                            onClick={() => this.addImg()}
                        />
                    ) : (
                        <div className={styles.add} onClick={() => this.addImg()}>
                            <img src={logoadd} alt="" srcSet="" />
                        </div>
                    )}

                    <p className={styles.about}>{about}</p>
                </div>
            </div>
        )
    }
}

/**
 * 
 * 
 


LogoBox
<LogoBox
    ref={img => (this.logo = img)}
    title="企业Logo"
    about="仅支持jpg、jpeg、png格式，大小不超过5M"
    value={logo}
    onChange={logo => this.setState({ logo })}
/>





 */
