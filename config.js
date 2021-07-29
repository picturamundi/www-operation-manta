module.exports = {
    
    plugins: [
        ['flexsearch'],
      ],

    head: [
        ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Teko:wght@700&display=swap' }],
        ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Cairo:wght@600&display=swap' }],
        ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Holtwood+One+SC&display=swap' }],
        ['link', { rel: "shortcut icon", href: "/images/favicon.png"}],
      ],

    title: 'TW Handbook',
    description: 'Hassan Djamous FTW!',
    
    themeConfig: {
        nav: [
            { text: 'Home', link: '/'},
            { text: 'Rulebook', link: '/rulebook/play/'},
            { text: 'History Corner', link: '/history/'},
            { text: 'Map', link: 'https://toyotawars.com/images/map.pdf'},
            ],
        sidebar: {
            '/rulebook/': [
                '',
                'play',
                'tables',
                'terms',
            ]
        }
    }
}  