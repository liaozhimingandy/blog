import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    base: '/blog/',
    title: "My Blogs",
    description: "A Blog Site",
    lang: 'zh-Hans',
    locales: {'root': { label: '中文', lang: 'zc_CN'}},
    head: [['link', { rel: 'icon', href: 'https://www.alsoapp.com/favicon.svg' }]],
    cleanUrls: true,
    lastUpdated: true,
    titleTemplate: 'alsoapp.com',
    markdown: {
        lineNumbers: false // 是否显示行数，默认false
        },
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        logo: 'https://www.alsoapp.com/favicon.svg',
        nav: [
            {text: '首页', link: '/'},
            {text: 'Git', link: '/git/git'},
            {
                text: "关于",
                items: []
            }
        ],
        sidebar: {
            'git':[
                {text: "Git", link: "/git/git"},
                {text: "贡献", link: "/git/contributing"}
            ],
        },
        // 右侧边栏配置，默认值是"In hac pagina"
        outline: {label: "本页目录"},
        // 最后更新时间提示
        lastUpdated: {text: "最后更新于"}, // string
        // 顶部导航最后边社交链接配置
        socialLinks: [
            {icon: 'github', link: 'https://github.com/vuejs/vitepress'}
        ],
        // 站点页脚配置
        footer: {
              message: 'Released under the Apache-2.0 License.',
              copyright: 'Copyright © 2024 ANDY',
            },
        // 编辑链接
        editLink: {
          pattern: "https://github.com/liaozhimingandy/blog/blob/main/docs/:path", // 自己项目仓库地址
          text: "在 github 上编辑此页",
        },

    }
})
