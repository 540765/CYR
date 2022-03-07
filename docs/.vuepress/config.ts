const { path } = require('@vuepress/utils')
import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
  // module.exports = {
  // host: 'localhost', // ip
  lang: 'zh-CN',
  port: 9779, //端口号
  title: 'IUUI', // 设置网站标题
  description: 'IUUI',
  base: '/', //默认路径
  debug: true,
  head: [
    // 设置 favor.ico，docs/.vuepress/public 下
    [
      'link', { rel: 'icon', href: '/images/favicon.ico' }
    ],
  ],
  themeConfig: {// 主题设置
    /**
     * 下面很多都要你自己配置
     */
    nextLinks: true,//下一页
    prevLinks: true,//上一页
    search: true,//搜索框
    editLink: false,//全局编辑此页
    // displayAllHeaders: true,//
    logo: '/images/favicon.ico',// 注意图片放在 public 文件夹下
    navbar: [
      {// 右上导航航条 docs/.vuepress/README.md
        text: '首页',
        link: '/'
      },
      {
        text: '前端',
        children: [
          { text: '《html》', link: '/web/html/01-html.md' },
          { text: '《JavaScript教程》', link: '/web/JavaScript/入门导论.md' },
          { text: '《CSS》', link: '/web/css/01-css.md' },
        ]
      },
      {
        text: '笔记',
        children: [
          {
            text: 'vue2',
            link: '/web/vue/01.md',
          },
          {
            text: 'Flutter',
            link: '/web/Flutter/01.md',
          },
          {
            text: 'WebPack',
            link: '/web/webpack/webpack.md',
          }
        ],
      },
      {
        text: '其它',
        children: [
          {
            text: '教程', link: '/course/README.md'
          },
          {
            text: '面试', link: '/guide/interview/interview.md'
          },
          {
            text: '随笔', link: '/guide/随笔/reflection.md'
          },
          {
            text: '故事', link: '/guide/故事/story.md'
          },
        ]
      }
    ],
    // 侧边栏数组
    // 所有页面会使用相同的侧边栏
    sidebarDepth: 2,
    sidebar: {
      '/web/vue/': [
        {
          text: 'VUE2.x',
          children: [
            '01.md',
            '02vue指令.md',
            '03全局API.md',
          ],
        },
      ],
      '/web/Flutter/': [
        {
          text: 'Flutter',
          children: [
            '01.md',
            '02.Dart语法.md',
          ],
        },
      ],
      '/web/html/': [
        {
          text: 'HTML',
          children: [
            '/web/html/01-html.md',
          ],
        },
      ],
      '/web/JavaScript/': [
        {
          text: '《JavaScript教程》',
          children: [
            '入门导论.md',
            '数据类型与运算符.md',
            '语法基础.md',
            '内置对象.md',
          ]
        }
      ],
      '/course/': [
        {
          text: '教程',
          children: [
            'README.md',
            'elementui在表格中插入图片.md',
            'vscode常用插件.md',
          ],
        }
      ],
      '/guide/interview/':[
        {
          text:'面试',
          children:[
            'interview.md',
            'JSinterview.md',
            'VUEinterview.md'
          ]
        }
      ],
      // fallback 侧边栏被最后定义
      '/': [''], //不能放在数组第一个，否则会导致右侧栏无法使用 
    },

    //
  },
  plugins: [
    ['@vuepress/back-to-top'],
    [
      '@vuepress/plugin-register-components',
      {
        componentsDir: path.resolve(__dirname, './components')
      }
    ],
    [
        '@vuepress/plugin-search',
        {
            locales: {
                '/': {
                    placeholder: '搜索',
                },
            },
        },
    ]
  ],
}
)