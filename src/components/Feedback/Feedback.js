import React, { PureComponent } from 'react'
import styles from './Feedback.module.css'

import warningImg from './warning.png'
import timeImg from './time.png'
import errorImg from './error.png'
import successImg from './success.png'

export default class Feedback extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            icon: '',
            message: '',
        }
    }
    showFeedback(icon, message, time = 3000, back) {
        let that = this
        this.setState({
            icon,
            message,
            show: true,
        })
        setTimeout(() => {
            that.setState({
                icon: '',
                message: '',
                show: false,
            })
            if (back) {
                back()
            }
        }, time)
    }
    warning(message, time = 3000, back) {
        let that = this
        this.setState({
            icon: warningImg,
            message,
            show: true,
        })
        setTimeout(() => {
            that.setState({
                icon: '',
                message: '',
                show: false,
            })
            if (back) {
                back()
            }
        }, time)
    }
    time(message, time = 3000, back) {
        let that = this
        this.setState({
            icon: timeImg,
            message,
            show: true,
        })
        setTimeout(() => {
            that.setState({
                icon: '',
                message: '',
                show: false,
            })
            if (back) {
                back()
            }
        }, time)
    }
    error(message, time = 3000, back) {
        let that = this
        this.setState({
            icon: errorImg,
            message,
            show: true,
        })
        setTimeout(() => {
            that.setState({
                icon: '',
                message: '',
                show: false,
            })
            if (back) {
                back()
            }
        }, time)
    }
    success(message, time = 3000, back) {
        let that = this
        this.setState({
            icon: successImg,
            message,
            show: true,
        })
        setTimeout(() => {
            that.setState({
                icon: '',
                message: '',
                show: false,
            })
            if (back) {
                back()
            }
        }, time)
    }
    render() {
        let { show, icon, message } = this.state
        if (show) {
            return (
                <div className={styles.mask}>
                    <div className={styles.FeedbackBox}>
                        {icon ? <img src={icon} alt="" srcSet="" /> : null}
                        <p>{message}</p>
                    </div>
                </div>
            )
        } else {
            return null
        }
    }
}

// this.feedback.showFeedback(图片,'警告')
// this.feedback.warning('警告')
// this.feedback.time('时间未到')
// this.feedback.error('错误')
// this.feedback.success('成功')

// 带消失回调
// this.feedback.showFeedback(图片,'警告')
// this.feedback.warning('警告',3000,back)
// this.feedback.time('时间未到',3000,back)
// this.feedback.error('错误',3000,back)
// this.feedback.success('成功',3000,back)

// <Feedback
//     ref={feedback => {
//         this.feedback = feedback
//     }}
// />
