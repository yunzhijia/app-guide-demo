/*****************************************************
图片统一放在imgs文件夹下，配置时只需改图片名，不要加路径
在线demo:
http://192.168.22.144/app-guide/index.html?type=fqa&appId=xiuxiu
****************************************************/

/**
 * 这是云之家头部标题
 */
export const title = '工作汇报'

/* 轻应用id */
export const appid = '101091429'

// 不用管
export const type = 'fqa'

// 轻应用名字
export const appName = '工作汇报'

// 交流群的头像链接
export const groupHead = 'https://www.yunzhijia.com/image/59ee9635e4b0619cd6f180b1_ext/59f97c04e4b0f2a53fdbc8c4'

// 交流群的二维码
export const QRCode = 'QR.png'

export const about = {
  banner: 'banner.png',
  question: '什么是工作汇报？',
  answer: [
    {
      title: '关于工作汇报',
      content: '云之家的工作汇报，提供员工向公司领导提交工作汇报的功能，支持日报、周报、月报等日常汇报形式，并支持企业搭建自己的工作汇报模板，进行使用。'
    }
  ]
}

/*
这个属于纯文本的模板，比较复杂的参考questions2的模板
*/
export const questions = [
  {
    question: '工作汇报提交给哪些领导？',
    answer: [
      {
        title: '工作汇报提交给哪些领导？',
        content: '工作汇报提交给自己部门的负责人和自己的直接主管，负责人和直接主管可以由系统管理员在云之家的web端（https://www.yunzhijia.com/）管理中心－组织－组织与人员内进行维护。（自由选择汇报对象功能将在12月推出，敬请期待）',
        img: 'workreport.png'
      },
      {
        content: [
          '注意：',
          '1. 普通员工的负责人为自己本部门的负责人。',
          '2. 负责人的负责人为上一级部门的负责人。'
        ]
      }
    ]
  },
  {
    question: '如何查看直属下级以及间接下级员工的工作汇报？',
    answer: [
      {
        title: '如何查看直属下级以及间接下级员工的工作汇报？',
        content: '在工作汇报的团队页面，右边有一个绿色按钮，点开后，可以输入查询条件，其中的查看范围有两个选项：'
      },
      {
        content: [
          '注意：',
          '1. 仅直属下属：表示自己作为负责人的部门内的普通员工，以及自己作为直接主管所管辖的员工。',
          '2. 部门全部人员：表示除了直属下属之外，还包括自己作为负责人的部门的下级部门内的员工。'
        ],
        img: 'workreport2.png'
      }
    ]
  },
  {
    question: '下属提交了汇报为什么在团队里面看不到？',
    answer: '在工作汇报的团队页面，右边有一个绿色按钮，点开后，可以输入查询条件，这里的条件会和上次退出时保持一致，看看模板或时间是否和用户提交的汇报不一样，调整一下即可看到员工提交的汇报。'
  }
]

/*
带有换行文本和图片的模板
*/
export const questions2 = [
  {
    question: '如何自定义模板？',
    answer: '系统管理员登录云之家的web端（https://www.yunzhijia.com/），然后进入工作汇报－后台管理－模板管理，在该页面即可维护适合自己公司的汇报模板，现支持单行、多行文本，单选、多选、数字、金额等控件，后续会逐步支持明细、关联、运算等控件，以满足各个不同页面汇报的要求。'
  },
  {
    question: '如何将汇报数据导出？',
    answer: [
      {
        content: '系统管理员登录云之家的web端（https://www.yunzhijia.com/），然后进入工作汇报－后台管理－数据管理-自定义模板里面，选择需要导出的汇报类型，输入查询条件，查出需要导出的汇报，然后点击导出excel按钮即可，也可以通过导出附件按钮，来导出图片和附件信息。',
        img: 'workreport3.png'
      }
    ]
  }
]

/**
 * 定义分类，这是带分类的
 */
export const data = [
  {
    category: '常见问题',
    questions: questions
  },
  {
    category: '管理员须知',
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
