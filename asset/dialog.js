let dialog = {
    ele: document.getElementById('dialog'),
    title: document.getElementById('dialogTitle'),
    content: document.getElementById('dialogContent'),
}

dialog.msgs = {
    联系方式: { content: 'QQ群: 1028963516 (留言任意管理员)' },
    育才工程: { content: '自动跳转钉钉', icon: 'fa-solid fa-location-dot fa-space', code: 'https://wzxy.xiyou.edu.cn/h5/mobile/basicinfo/index/login/index' },
    第二课堂: { icon: 'fa-solid fa-book-bookmark fa-space', code: 'https://win.9xueqi.com/' },
    青年大学习: { content: '需要微信登录，所以得在微信内打开或者使用微信扫一扫。', icon: 'fa-solid fa-medal fa-space', code: 'https://h5.sxgqt.org.cn/#/statisticsNews' },
    逸夫楼地图: { content: '学长做的，但是要旋转屏幕方向才能使用。', code: 'https://8.u.h5mc.com/c/7oor/ygju/index.html' },
    西邮财务处: { icon: 'fa-solid fa-money-bills', content: '支付宝扫码，查询/领取来自西邮财务处的奖学金/退费。', code: 'http://wx.weiweixiao.net/index.php/Wap/ModFfgl/index/token/eoQ1mDMc7BGAAAAWPgst-A.html' },
    缴费大厅: { icon: 'fa-solid fa-sack-dollar', content: '支付宝扫码，支持充值公寓电费，电表只能被一个用户绑定。<br>(<strong><a href="https://cwc.xupt.edu.cn/info/1013/1371.htm">公寓电费充值指南</a></strong>) ', code: 'http://wx.weiweixiao.net/index.php/Wap/Index/columns.html?token=FuMutmzL5xGAAAAWPwAVGQ&id=4kFwzj3H6xGAAAAWPwAVGQ' },
    取快递: { icon: 'iconfont icon-taobao', content: '淘宝扫码或直接访问', code: 'https://pages-fast.m.taobao.com/wow/z/uniapp/1011717/last-mile-fe/end-collect-platform/school' },
    试卷云打印: { icon: 'fa-solid fa-print', content: '微信小程序搜索“萌蚤云印”，选择打印店后点击下方“资料”，可以查看此店热门资源。<br>祝大家期末不挂科。' },
}

dialog.showMsg = (name) => {
    let item = dialog.msgs[name]
    if (!item)
        return console.warn(`dialog.msgs.${name}不存在`)
    dialog.title.innerHTML = `<i class="${item.icon || item.code && "fa-solid fa-qrcode" || "fa-solid fa-comment-dots"} fa-space"></i><span>${name}</span>`
    dialog.content.innerHTML = `${item.content || ''}${item.code ?
        `(<strong><a onclick="dialog.phone('${item.code}')">点击直接打开</a></strong>)` : ''}`
    if (item.code) try { new QRCode(dialog.content, item.code) }
        catch (e) { dialog.content.innerHTML += '<br>二维码插件加载失败，请通过页脚联系方式提醒我换源。' }
    dialog.show()
}

dialog.phone = link => {
    open(link, '_blank', 'height=720px,width=360px,left=720px')
}

dialog.show = () => {
    dialog.ele.classList.remove('hidden')
}

dialog.close = () => {
    dialog.ele.classList.add('hidden')
    dialog.title.innerHTML = ''
    dialog.content.innerHTML = ''
}
