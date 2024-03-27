import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    base: '/blog/',
    title: "My Blogs",
    description: "A Blog Site",
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

        socialLinks: [
            {icon: 'github', link: 'https://github.com/vuejs/vitepress'}
        ]
    }
})
