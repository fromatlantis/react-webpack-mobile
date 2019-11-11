import React, { PureComponent } from 'react'
import styles from './Automatic.module.css'

export default class Automatic extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            BoundingClientRect: {},
            ok: false,
            clientHeight: 0,
        }
    }
    setPopup() {
        let { show } = this.state
        let clientHeight = document.body.clientHeight
        let BoundingClientRect = this.automatic.getBoundingClientRect()
        if (!show) {
            if (clientHeight > BoundingClientRect.y * 2) {
                this.setState({
                    BoundingClientRect,
                    clientHeight,
                    show: 1,
                    ok: !this.state.ok,
                })
            } else {
                this.setState({
                    BoundingClientRect,
                    clientHeight,
                    show: 2,
                    ok: !this.state.ok,
                })
            }
        }
    }
    showPopup() {
        let { BoundingClientRect, show, clientHeight } = this.state
        let { Popup } = this.props
        if (show == 1) {
            return (
                <div
                    style={{
                        position: 'fixed',
                        left: BoundingClientRect.width / 2 + BoundingClientRect.left + 'px',
                        top: BoundingClientRect.top + BoundingClientRect.height + 'px',
                        display: 'flex',
                        flexShrink: 0,
                        // width: '100px',
                        // height: '100px',
                        // backgroundColor: 'blue',
                    }}>
                    {Popup()}
                </div>
            )
        } else {
            return (
                <div
                    style={{
                        position: 'fixed',
                        left: BoundingClientRect.width / 2 + BoundingClientRect.left + 'px',
                        bottom:
                            clientHeight -
                            BoundingClientRect.top +
                            // BoundingClientRect.height +
                            'px',
                        display: 'flex',
                        flexShrink: 0,
                        // width: '100px',
                        // height: '100px',
                        // backgroundColor: 'blue',
                    }}>
                    {Popup()}
                </div>
            )
        }
    }
    showAbarrier() {
        return (
            <div
                style={{
                    position: 'fixed',
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'transparent',
                    left: 0,
                    top: 0,
                }}
                onClick={() => this.setShow(false)}
            />
        )
    }
    setShow(b) {
        this.setState({
            show: b,
            ok: !this.state.ok,
        })
    }
    render() {
        let { children, type = 'ondblclick' } = this.props
        let { show } = this.state
        if (type == 'onClick') {
            return (
                <div
                    ref={automatic => (this.automatic = automatic)}
                    onClick={() => this.setPopup()}>
                    {children}
                    {show ? this.showAbarrier() : null}
                    {show ? this.showPopup() : null}
                </div>
            )
        } else if (type == 'ondblclick') {
            return (
                <div
                    ref={automatic => (this.automatic = automatic)}
                    ondblclick={() => this.setPopup()}>
                    {children}
                    {show ? this.showAbarrier() : null}
                    {show ? this.showPopup() : null}
                </div>
            )
        }
    }
}

/**
 * 
 * 
 

let Popup = () => { //点击出现的东西
    return (
        <div
            style={{
                width: '65px',
                height: '65px',
                backgroundColor: 'red',
            }}
        />
    )
}
type // 事件名称 onClick ondblclick

<Automatic Popup={Popup} type='ondblclick'> 
    <div //展示在页面上的内容
        style={{
            width: '100px',
            height: '100px',
            backgroundColor: 'blue',
        }}
    />
</Automatic>


 */
