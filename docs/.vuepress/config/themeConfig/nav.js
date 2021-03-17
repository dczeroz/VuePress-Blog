// nav
module.exports = [
  { text: '首页', link: '/' },
  {
    text: '理论笔记',
    link: '/theory-note/',
    items: [
      {
        text: '学习笔记',
        items: [
          { text: '《操作系统》笔记', link: '/note/operating-system/' }
        ],
      
      },
    ]
  },
  {
    text: '技术',
    link: '/technology/',
    items: [
      {text: '《Java》疑难杂症',link: '/Java/'}
    ]
  },
  {
    text: '面试',
    link: '/interview/'
  },
  {
    text: '关于我',
    link: '/about/'
  },
]
