/*****************************************************
图片统一放在imgs文件夹下，配置时只需改图片名，不要加路径
在线demo:
http://192.168.22.144/app-guide/index.html?type=fqa&appId=xiuxiu
****************************************************/

/**
 * 这是云之家头部标题
 */
export const title = '报表秀秀'

/* 轻应用id */
export const appid = 'xiuxiu'

// 不用管
export const type = 'fqa'

// 轻应用名字
export const appName = '应用市场'

// 交流群的头像链接
export const groupHead = 'https://www.yunzhijia.com/image/59e05fe0e4b0a34ecabbef71_ext/59e06907e4b0873449bcdd0d'

// 交流群的二维码
export const QRCode = 'QR.png'

export const about = {
  banner: 'banner.jpg',
  question: '什么是应用市场？',
  answer: [
    {
      title: '关于应用市场',
      content: '云之家应用市场，为广大云之家用户提供涵盖协作、财务、人事、CRM\
            、金融服务等各类应用，帮助企业轻松实现移动办公。同时，基于云之家开放平台，\
            企业可通过自建应用连接业务系统，将内部的信息系统延伸到移动端，快速实现信息移动化。'
    },
    {
      title: '查看全部应用',
      content: '在应用市场添加应用后，可以通过【常用应用】卡片使用 应用',
      img: '1@2x.png'
    },
    {
      title: '如何添加管理应用',
      content: '非管理员用户可通过【已开通】可添加企业已开通应用； 管理员用户可在【已开通】中点击应用进入管理页面',
      img: '2@2x.png'
    },
    {
      title: '修改应用开通范围',
      content: '应用开通范围新增按用户角色开通，实现更灵活的应用开通模式',
      img: '3@2x.png'
    }
  ]
}

/*
这个属于纯文本的模板，比较复杂的参考questions2的模板
*/
export const questions = [
  {
    question: '如何从应用市场添加应用？',
    answer: '用户可通过应用市场浏览或搜索获得所需应用，企业服务类的应用需管理员授权开通可进行使用，同时非管理员也可以申请开通自己需要使用的应用。'
  },
  {
    question: '添加应用后如何使用应用？',
    answer: '添加应用后，可通过“常用应用”卡片上使用应用，可通过卡片的“全部”使用未展示在常用应用上的应用。'
  },
  {
    question: '如何设置应用只对某部分特定员工可见？',
    answer: '管理员在开通应用时，可将应用按部门、成员或角色开通，设置开通范围后只有在可见范围内的用户可查看和使用该应用；在使用过程中，亦可随时修改应用可见范围。'
  }
]

/*
带有换行文本和图片的模板
*/
export const questions2 = [
  {
    question: '报表秀秀应用场景有哪些，目前有哪些功能已经上线？',
    /* 换行文本如下 */
    answer: [
      '报表秀秀支持以下应用场景，其中部分上线。',
      '1. 通过和金蝶ERP连接，直接形成报表。目前和金蝶K/3 Wise打通，应用时通过安装云之家连接助手，实现和ERP的连接。',
      '2. 通过上传图片方式，可以是PPT或EXCEL截图，形成报表，该功能已经上线。',
      '3. 通过在移动端填报方式，形成特定主题的报表。支持从下至上的统计汇总功能，该功能尚未上线。'
    ]
  },
  {
    question: '报表秀秀和金蝶ERP的K/3 Wise打通，具体应用方式是怎样的？',
    answer: [
      {
        title: '连接ERP',
        content: '报表秀秀和金蝶ERP的K/3 Wise打通，具体应用方式如下'
      },
      {
        content: [
          '1. 扫码登陆云之家 Web 端',
          '2. 点击上方「工作台」中的「查看更多应用」'
        ],
        img: 'erp1.png'
      },
      {
        content: '3. 找到「报表秀秀」，并点击进入',
        img: 'erp2.png'
      },
      {
        content: '4. 如果您是 K/3 WISE 的用户，请点击数据源页签，并下载「云之家连接助手」。将连接助手安装到 ERP 服务器。（如果您是非 K/3 WISE 的用户，请见本教程的第6点。）',
        img: 'erp3.png'
      },
      {
        content: '5. 完成数据同步，点击右上角的「替换报表数据源」，并且选择你需要的数据源。',
        img: 'erp4.png'
      },
      {
        content: '6. 如果您是非 K/3 WISE 的用户，点击右上角的「替换报表数据源」，下载 Excel 模板。并在模板内，填充数据。最后上传并提交 Excel 表格。',
        img: 'erp5.png'
      },
      {
        content: '7. 现在你可以在 Web 端看到漂亮的报表，或在移动端定时收到 ERP 的数据啦~',
        img: 'erp6.png'
      }
    ]
  }
]

/**
 * 定义分类，这是带分类的
 */
export const data = [
  {
    category: '这是分类一',
    questions: questions
  },
  {
    category: '这是分类二',
    questions: questions2
  }
]

/**
 * 这是不带分类的
 */

/*
export const data = [
  {
    questions: questions
  }
]
*/
