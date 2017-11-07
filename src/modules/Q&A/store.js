export const webViewTitle = '报表秀秀'

export const about = {
  question: '报表秀秀是什么?',
  // detail.vue中渲染的内容
  answer: [
    {
      title: '点赞、评论、打赏，强大的沟通协作能力',
      img: require('./imgs/example1.png')
    },
    {
      title: '支持涂鸦与备注，直观的可视化分析',
      img: require('./imgs/example2.png')
    },
    {
      title: ' 内置行业数据，自动行业对标',
      img: require('./imgs/example3.png')
    },
    {
      title: '支持图片上传、填报与EXCEL导入、连接ERP多种应用场景',
      img: require('./imgs/example4.png')
    }
  ]
}

export const questions = [
  {
    question: '1. 报表秀秀应用场景有哪些，目前有哪些功能已经上线？',
    answer: [
      {
        title: '报表秀秀应用场景有哪些，目前有哪些功能已经上线？',
        content: [
          '报表秀秀支持以下应用场景，其中部分上线。',
          '1. 通过和金蝶ERP连接，直接形成报表。目前和金蝶K/3 Wise打通，应用时通过安装云之家连接助手，实现和ERP的连接。',
          '2. 通过上传图片方式，可以是PPT或EXCEL截图，形成报表，该功能已经上线。',
          '3. 通过在移动端填报方式，形成特定主题的报表。支持从下至上的统计汇总功能，该功能尚未上线。'
        ]
      }
    ]
  },
  {
    question: '2. 报表秀秀和金蝶ERP的K/3 Wise打通，具体应用方式是怎样的？',
    answer: [
      {
        title: '连接ERP',
        content: '报表秀秀和金蝶ERP的K/3 Wise打通，具体应用方式如下'
      },
      {
        content: '1. 扫码登陆云之家 Web 端'
      },
      {
        content: '2. 点击上方「工作台」中的「查看更多应用」',
        img: require('./imgs/erp/erp1.png')
      },
      {
        content: '3. 找到「报表秀秀」，并点击进入',
        img: require('./imgs/erp/erp2.png')
      },
      {
        content: '4. 如果您是 K/3 WISE 的用户，请点击数据源页签，并下载「云之家连接助手」。将连接助手安装到 ERP 服务器。（如果您是非 K/3 WISE 的用户，请见本教程的第6点。）',
        img: require('./imgs/erp/erp3.png')
      },
      {
        content: '5. 完成数据同步，点击右上角的「替换报表数据源」，并且选择你需要的数据源。',
        img: require('./imgs/erp/erp4.png')
      },
      {
        content: '6. 如果您是非 K/3 WISE 的用户，点击右上角的「替换报表数据源」，下载 Excel 模板。并在模板内，填充数据。最后上传并提交 Excel 表格。',
        img: require('./imgs/erp/erp5.png')
      },
      {
        content: '7. 现在你可以在 Web 端看到漂亮的报表，或在移动端定时收到 ERP 的数据啦~',
        img: require('./imgs/erp/erp6.png')
      }
    ]
  },
  {
    question: '3. 报表秀秀通过上传图片方式形成报表, 具体应用方式是怎样的？',
    answer: [
      {
        title: ' 上传图片形成报表',
        content: [
          '企业或部门可以选择上传图片方式形成报表。',
          '例如在玖赢科技，通过营销收款日报表来跟进收款完成情况。每日上传「 收款目标与实际完成率 」的柱状图，形成营销收款日报表。'
        ],
        img: require('./imgs/erp/guidepic.jpg')
      },
      {
        content: [
          '1.报表名称：营销收款日报表',
          '2.报表备注：收款日报表数据截止到当天晚上12点。每天早上9:00发出前一天日报表',
          '3.选择图片：收款目标与实际完成率的柱状图，全国各区域收款明细图',
          '4.谁可以看：接收营销收款日报表的小伙伴们',
          '5.附件：营销收款日报表明细与汇总表'
        ]
      }
    ]
  }
]
