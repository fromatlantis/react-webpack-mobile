import React, { PureComponent } from 'react'
import styles from './Tags.module.css'
import upImg from './up.png'
import downImg from './down.png'

export default class Tags extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
        }
    }
    //父组件改值
    parentSetValue = value => {
        this.setState({ value })
    }
    showTags(data) {
        let item = []
        let len = 0

        if (data.length > 7) {
            if (this.state.show) {
                len = data.length
            } else {
                len = 7
            }
        } else {
            len = data.length
        }
        for (let i = 0; i < len; i++) {
            item.push(
                <p className={styles.tag} key={i + 1}>
                    {data[i]}
                </p>,
            )
        }
        if (data.length > 7) {
            if (this.state.show) {
                item.push(
                    <p
                        className={styles.setshow}
                        key={0}
                        onClick={() => this.setState({ show: false })}>
                        向上收起
                        <img src={upImg} alt="" srcSet="" />
                    </p>,
                )
            } else {
                item.push(
                    <p
                        className={styles.setshow}
                        key={0}
                        onClick={() => this.setState({ show: true })}>
                        向下展开
                        <img src={downImg} alt="" srcSet="" />
                    </p>,
                )
            }
        }
        return item
    }
    render() {
        let { title, data } = this.props
        return (
            <div className={styles.Box}>
                <p className={styles.title}>{title}</p>
                <div className={styles.tagsBox}>{this.showTags(data)}</div>
            </div>
        )
    }
}
