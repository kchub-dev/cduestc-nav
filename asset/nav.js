let nav = {
  name: "KC导航",
  description: "",
  list: [],
  ele: document.querySelectorAll(".navlist"),
}

nav.list[0] = [{
  name: "教育服务", icon: "fa-solid fa-chalkboard-user", item: [
    { text: "学习通", icon: "iconfont icon-chaoxing", link: "http://i.chaoxing.com/" },
    { text: "学信网", icon: "iconfont icon-xuexinwang", link:"https://my.chsi.com.cn/archive/index.action" },
    { text: "中国大学MOOC", icon: "fa-solid fa-book-open", link: "https://icourse163.org/home.htm" },
    { text: "蓝桥云课", icon: "iconfont icon-lanqiao", link: "https://www.lanqiao.cn/user/?tab=2#:~:text=%E6%88%91%E7%9A%84%E8%AF%BE%E7%A8%8B" },
  ]
}, {
  name: "科成生活", icon: "fa-solid fa-school", item: [
    { text: "官方网站",desc:"校园官网",icon: "iconfont icon-xuexiao1",link:"https://www.cduestc.cn/"},
    { text: "教务系统", desc: "课程&成绩", icon: "fa-regular fa-calendar-days", link: "https://www.cduestc.cn/eams/loginExt.action" },
    { text: "缴费大厅", desc: "学费电费", icon: "fa-solid fa-sack-dollar", js: "dialog.showMsg(this.textContent)" },
    { text: "育才工程", desc: "科成&百叶积分", icon: "fa-solid fa-location-dot", link:"https://api.cduestc.fun/?ding" },
    { text: "教务处", desc: "教务公告", icon: "fa-solid fa-book-bookmark", link:"https://www.cduestc.cn/jiaowuchu/init_3110100/index" },
    { text: "图书查询", desc: "双校区图书馆", icon: "fa-solid fa-book", link: "https://book.cduestc.fun/" },
    { text: "科成Wiki", desc: "校园生活指南", icon:"iconfont icon-wiki",link: "https://wiki.cooo.site/" },
    { text: "取快递", desc: "淘宝身份码", icon: "iconfont icon-taobao", js: "dialog.showMsg(this.textContent)" },
    { text: "支付宝校园派", desc: "日常优惠", icon: "iconfont icon-alipay", link: "https://api.cduestc.fun/?alischool" },
    { text: "试卷云打印", desc: "正阳二楼", icon: "fa-solid fa-print", js: "dialog.showMsg(this.textContent)" },
    { text: "地图导航测试", desc: "高德跳转测试", icon:"iconfont icon-gaode", link:"https://api.cduestc.fun/map/?gaode=蜜雪冰城"}
  ]
}, {
  name: "考试学习", icon: "fa-solid fa-pen-ruler", item: [
    { text: "名来的网课", desc: "期末保命复习视频", icon: "fa-solid fa-hard-drive", link: "https://drive.mzdyl.xyz/%E5%AD%A6%E4%B9%A0%E8%B5%84%E6%96%99" },
    { text: "安娜的档案", desc: "世界最大互联网图书馆", icon: "fa-solid fa-book-atlas", link: "https://zh.annas-archive.org/" },
    { text: "zlibrary", desc: "免费电子书下载", icon: "fa-solid fa-book-atlas", link: "https://zh.z-library.sk/" },
    { text: "力扣", desc:"编程竞赛刷题", icon: "fa-solid fa-code", link: "https://leetcode.cn/" },
    { text: "计算机二级", icon: "iconfont icon-a-diannaojisuanjishouji", desc: "每年两次考试", link:"https://ncre.neea.edu.cn/"},
    { text: "计算机自学", icon:"iconfont icon-kexue", desc:"满满干货", link:"https://csdiy.wiki/"}
  ]
}, {
  name: "交流社群", icon: "fa-solid fa-circle-nodes", item: [

    { text: "实验室纳新", desc: "火热纳新 就等你来", icon:"iconfont icon-shiyanshi", link: "https://docs.qq.com/sheet/DSkFiRmpzcVJHSklM?tab=BB08J2" },
    { text: "各兴趣群", desc: "游戏娱乐 小众爱好", icon: "fa-solid fa-gamepad", link: "https://docs.qq.com/sheet/DSkFiRmpzcVJHSklM?tab=ov58e9" },
    { text: "百叶频道", desc: "QQ交流分享频道", icon: "iconfont icon-QQpindao",link:"https://pd.qq.com/s/aafg49sgq?businessType=9"},
    { text: "科成MC", desc: "Minecraft交流", icon: "iconfont icon-minecraft", link: "https://craft.cduestc.fun" },
    { text: "飞跃手册（制作中）", desc: "毕业经验分享", link: "#" },
    { text: "校园墙", icon: "fa-brands fa-weixin", link: "https://wiki.cooo.site/life/forum#校园墙" },
  ]
},]

nav.list[1] = [{
  name: "第三方导航", icon: "fa-solid fa-signs-post", desc:"展示工具和项目，请自行辨别", item: [
    { text: "学吧导航", desc: "学习 设计 书籍", link: "https://www.xue8nav.com/" },
    { text: "掘金酱", desc: "开发者", link: "https://e.juejin.cn/" },
    { text: "别摸鱼", desc: "AI 新媒体", link: "https://biemoyu.com/" },
    { text: "下次一定", desc: "影视 工具 装机", link: "https://www.iiice.cn/" },
    { text: "蜗牛导航", desc: "开发 设计", link: "https://s.eallion.com/" },
    { text: "鱼皮编程导航", desc:"一个开发者论坛",link:"https://www.codefather.cn/"},
    { text: "AI工具导航", desc: "对话 图片 视频 AI", link: "https://ai-bot.cn/" },
    { text: "HelloGithub", desc:"Github项目推荐", link:"https://hellogithub.com/"},
  ]
}, {
  name: "AI工具", icon: "iconfont icon-damoxing",
  item: [
    { text: "文心一言", desc: "百度", link: "https://yiyan.baidu.com/" },
    { text: "通义千问", desc: "阿里", link: "https://tongyi.aliyun.com/qianwen/" },
    { text: "豆包", desc: "字节", link: "https://www.doubao.com/chat/" },
    { text: "DeepSeek", desc:"深度求索",link: "https://chat.deepseek.com/" },
    { text: "SCNet", desc: "DeepSeek", link: "https://chat.scnet.cn/" },
    { text: "纳米AI", desc: "360(聚合)", link: "https://bot.n.cn/" },
    { text: "Kimi.ai", desc: "月之暗面", link: "https://kimi.moonshot.cn/" },
    { text: "智谱清言", desc: "ChatGLM", link: "https://chatglm.cn/" },
    { text: "元宝", desc: "腾讯", link: "https://yuanbao.tencent.com/" },
    { text: "星火", desc: "讯飞", link: "https://xinghuo.xfyun.cn/desk" },
    { text: "天工", desc: "昆仑", link: "https://search.tiangong.cn/" },
    { text: "商量", desc: "商汤", link: "https://chat.sensetime.com/" },
    { text: "ChatGPT", desc: "OpenAI", link: "https://chatgpt.com/" },
    { text: "ChatGPT", desc: "国内镜像", link: "https://www.ycl.cool/tool/ai/" },
    { text: "Gemini", desc: "Google", link: "https://gemini.google.com/app" },
    { text: "Copilot", desc: "Microsoft", link: "https://copilot.microsoft.com/" },
    { text: "Coze", desc: "字节", link: "https://www.coze.com/home" },
    { text: "Poe", desc: "Quora", link: "https://poe.com/" },
    { text: "硅基流动", desc:"提供大模型API", icon:"", link:"https://cloud.siliconflow.cn/i/GFPvrhhR"}
  ]
}, {
  name: "校友推荐", icon: "fa-solid fa-inbox",
  desc: `<a onclick="dialog.showMsg('联系方式')"><i class="fa-solid fa-pen-to-square"></i> 我要投稿</a>`,
  item: [
    { text: "打字背单词", desc: "Qwerty Learner", link: "https://qwerty.kaiyi.cool/" },
    { text: "公众号编辑", desc: "镜像自doocs/md", icon: "fa-brands fa-markdown", link: "https://md.cduestc.fun" },
    { text: "电脑入门", desc: "你缺失的那门计算机课", icon: "fa-solid fa-book-bookmark", link: "https://www.criwits.top/missing/" },
    { text: "电脑帮助", desc: "南大IT侠手册", link: "https://www.yuque.com/itxia" },
    { text: "芯片榜", desc: "极客湾SoCPK", link: "https://www.socpk.com/" },
    { text: "Yesicon", desc: "前端图标库", link: "https://yesicon.app/" },
    { text: "开发速查", desc: "Quick Reference", icon: "fa-solid fa-swatchbook", link: "https://quickref.cn/" },
  ]
}, {
  name: "在线工具", icon: "fa-solid fa-toolbox", item: [
    { text: "每日热榜", desc:"了解每日热点",link:"https://hot.imsyy.top/"},
    { text: "菜鸟工具", desc: "运行代码", link: "https://c.runoob.com/" },
    { text: "可画Canva", desc:"在线设计", link:"http://canva.cn/"},
    { text: "在线PS", desc: "稿定设计", link: "https://ps.gaoding.com/" },
    { text: "帮小忙", desc: "QQ浏览器", link: "https://tool.browser.qq.com/" },
    { text: "IT Tools", desc: "开发者小工具", link: "https://it-tools.tech/" },
    { text: "MikuTools", desc: "小工具集合", link: "http://tools.miku.ac/" },
    { text: "Itdog", desc:"网站&IP连通性测试", link:"https://itdog.cn"},
    { text: "IP信息", desc:"查看地域&ISP",link:"https://ipinfo.io/"},
    { text: "IPV6测试", desc:"测试是否有IPV6", link:"https://test-ipv6.com/"},
    { text: "测网速", desc: "中科大测速", link: "https://test.ustc.edu.cn/" },
    { text: "USTC反代", desc: "教育网出口测试", link: "http://revproxy.ustc.edu.cn:8000/" },
    { text: "IP检查", desc: "Sukka", link: "https://ip.skk.moe/" },
    { text: "MyIP", desc: "IP工具箱", link: "https://ipcheck.ing/" },
    { text: "画流程图", desc: "Draw.io", link: "https://draw.io/" },
    { text: "电路仿真", desc: "CircuitJS1", link: "http://www.falstad.com/circuit/circuitjs.html" },
    { text: "在线DOS", desc: "MASM汇编", link: "https://dosasm.github.io/dosrun/" },
    { text: "HDL仿真", desc: "EDA playground", link: "https://edaplayground.com/" },
    { text: "RISC-V仿真", desc: "emulsiV", link: "https://eseo-tech.github.io/emulsiV/" },
    { text: "汇编转换", desc: "Compiler Explorer", link: "https://godbolt.org/" },
  ]
}, {
  name: "软件下载", icon: "fa-solid fa-cube", item: [
    { text: "Win软件", desc: "联想应用商店", icon: "fa-brands fa-microsoft", link: "https://lestore.lenovo.com/" },
    { text: "应用推荐", desc: "果核剥壳", link: "https://www.ghxi.com/" },
    { text: "微软商店解析", desc: "Generation Project", icon: "fa-solid fa-bag-shopping", link: "https://store.rg-adguard.net/" },
    { text: "Win镜像", desc: "UUPDump", icon: "fa-brands fa-windows", link: "https://www.uupdump.cn/" },
    { text: "开源镜像", desc: "NJU Mirror", link: "https://mirror.nju.edu.cn/" },
    { text: "Mac软件", desc: "Digit77破解", icon: "fa-brands fa-apple", link: "https://www.digit77.com/" },
    { text: "JB激活", desc: "JetBra.in", icon: "iconfont icon-apple-mask-icon", link: "https://3.jetbra.in/" },
  ]
}, {
  name: "友链", icon: "fa-solid fa-link",
  desc: `<a onclick="dialog.showMsg('联系方式')"><i class="fa-solid fa-user-plus"></i> 添加友链</a>`,
  item: [
    { text: "纸鹿摸鱼处", desc: "原作者博客", link: "https://blog.zhilu.cyou/" },
    { text: "浅巷墨黎", desc: "科成星球开发者", link:"https://qxml.ltd/"},
    { text: "科成星球", desc:"电子科技大学成都学院WIKI", link: "https://www.cduestc.fun/" },
    { text: "科成MC", desc:"Minecraft同好会", link: "https://craft.cduestc.fun" },
    { text: "科成星球开发组", desc:"非官方组织", link: "https://github.com/kchub-dev/"},
  ]
},]

nav.list.forEach((list, i) => {
  nav.ele[i].innerHTML = list.map(group => `
    <div class="card">
    <div class="between">
    <h4><i class="${group.icon}"></i><span>${group.name}</span></h4>
    ${group.desc ? `<p class="dim">${group.desc}</p>` : ``}
    </div>
    <div class="list">
    ${group.item.map(item => `
      <a data-sub="${item.desc || ""}"
      ${item.js ? `onclick="${item.js}"` : `href="${item.link}"`}
    >${item.icon ? `<i class="${item.icon}"></i>` : ``}<span>${item.text}</span></a>
    `).join(`\n`)}
    </div>
    </div>`).join(`\n`)
})
