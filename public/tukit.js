~(function() {
    if (!window.tukit) {
        window.tukit = {}
    }
    const onReady = (callback,config,message) => {
        try {
            if (message.data === 'iamready') {
                if (typeof tukit.user === 'string') {
                    tukit.user = JSON.parse(tukit.user)
                }
                callback()
                config && !config.header && renderHeaderRight()
            } else if (message.data === 'iamlocal') {
                callback()
            }
        } catch (e) {
            alert(e)
        }
    }
    Object.assign(window.tukit, {
        veresion: '1.0.2',
        _CBS: {},
        _EMIT: (funName, options = {}) => {
            options['funName'] = funName
            tukit._CBS[funName] = options //需要将回调方法保存起来，JSON.stringify会丢失方法
            if (window.ReactNativeWebView && window.ReactNativeWebView.postMessage) {
                window.ReactNativeWebView.postMessage(JSON.stringify(options))
            } else {
                // 本地调试
                window.postMessage('iamlocal', '*')
            }
        },
        _CLOSE: () => {
            tukit._EMIT('close')
        },
        _MORE: () => {
            tukit._EMIT('more')
        },
        ready: (callback, config) => {
            config && tukit._EMIT('config', config)
            window.onmessage = message => {
                onReady(callback,config,message)
            }
            // 兼容安卓
            document.addEventListener('message', message => {
                onReady(callback,config,message)
            });
        },
        getUserInfo: options => {
            tukit._EMIT('getUserInfo', options)
        },
        QRCode: (options) => { //扫描二维码
            tukit._EMIT('QRCode', options)
        },
        getGeolocation: (options) => { //获取地理位置
            tukit._EMIT('getGeolocation', options)
        },
        getSystemInfo: (options) => { //获取系统信息
            tukit._EMIT('getSystemInfo', options)
        },
        WXShare: (options) => { //微信分享（请使用Share代替，已经废弃）
        },
        QQShare: (options) => { //QQ分享（请使用Share代替，已经废弃）
        },
        Share: (options) => { //分享
            tukit._EMIT('Share', options)
        },
        selectPictures: (options) => { //选择图片
            tukit._EMIT('selectPictures', options)
        },
        phonecall: (options) => { //拨打电话
            tukit._EMIT('phonecall', options)
        },
        textWithoutEncoding: (options) => { //发送短信
            tukit._EMIT('textWithoutEncoding', options)
        },
        email: (options) => { //发送邮件
            tukit._EMIT('email', options)
        },
        web: (options) => { //打开页面
            tukit._EMIT('web', options)
        },
    })
    const renderHeaderRight = () => {
        // 右上角
        const { headerHeight, safeArea } = window.tukit
        const headerRight = document.createElement('div')
        headerRight.style.cssText = `
            position:fixed;top:0px;
            padding-top:${safeArea.topInset}px;
            right:10px;
            height:${headerHeight}px;
            display:flex;
            align-items:center;
            z-index:99999;
            box-sizing: border-box;`
        headerRight.innerHTML = `
            <div style="background:rgba(255,255,255,.75);height:33px;border-radius:19px;display:flex;align-items:center;border:1px solid rgba(111,111,111,.1);box-sizing: border-box;">
                <div onclick="tukit._MORE()" style="padding:0 0 0 12px;display:flex;align-items:center;">
                    <img src="https://www.hzpark.com/image/more.png" style="height:19px;"/>
                </div>
                <img src="https://www.hzpark.com/image/divider.png" style="height:16px;margin:0 3px;"/>
                <div onclick="tukit._CLOSE()" style="padding:0 12px 0 0;display:flex;align-items:center;">
                    <img src="https://www.hzpark.com/image/close.png" style="height:19px;"/>
                </div>
            </div>`
        document.body.appendChild(headerRight)
    }

    // google analytics
    try {
        const s = document.createElement('script')
        s.type = 'text/javascript'
        s.src = `https://www.googletagmanager.com/gtag/js?id=UA-136875451-1`
        s.onload = () => {
            window.dataLayer = window.dataLayer || []
            function gtag() {
                dataLayer.push(arguments)
            }
            gtag('js', new Date())

            gtag('config', 'UA-136875451-1')
        }
        document.body.appendChild(s)
    } catch (e) {
        alert(e.message)
    }
})(window)
