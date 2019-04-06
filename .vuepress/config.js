module.exports = {
  title: "Django 文档翻译团队",
  description: "Django 中文文档翻译团队",
  serviceWorker: true,
  lastUpdated: '最近更新', 
  markdown: {
    lineNumbers: true,
    anchor: true,
    externalLinks: true
  },
  themeConfig: {
    repo: 'bestony/djangdocs.com',
    editLinks: true,
    editLinkText: '帮助我们改善此页面！',
    serviceWorker: {
        updatePopup: { 
           message: "有新的内容了", 
           buttonText: "刷新" 
        }
    },
    nav: [
      { text: "首页", link: "/" },
      {
        text: "transifex",
        link: "https://www.transifex.com/django/django-docs/"
      },
      { text: "QQ群", link: "https://jq.qq.com/?_wv=1027&k=5sBowDu" },
      { text: "中文文档", link: "https://docs.djangoproject.com/zh-hans/2.2/" }
    ],
    sidebar: [
        ['/','首页'],
        {
          title: '翻译指南',
          collapsable: true,
          children: [
            ['/guide/how-to-join.md','如何加入翻译团队'],
            ['/guide/use-transifex-translate.md','如何使用 transifex 翻译 Django 文档'],
            ['/guide/role.md','角色权限介绍'],
            ['/guide/fix-typo.md','如何处理文档中已有的错误'],
            ['/guide/reviewer-guide.md','如何审阅已有文档'],
            ['/guide/local-preview.md','本地预览 Django 文档'],
            ['/guide/push-translation.md','推送翻译到官方库'],
            ['/guide/glossary.md','术语表'],            
          ]
        },
        {
          title: '风格指南',
          children: [ 
            ['/style/copywriting.md','中文文案排版指南'],   
            ['/style/rst.md','reStructuredText 语法说明'],   
          ]
        },
      ]
  }
};
