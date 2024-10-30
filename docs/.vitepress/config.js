

module.exports = {
    title: "Horilla Docs",
    lastUpdated: true,
    optimizeDeps: {
        include: ['vitepress/theme']
    },
    server: {
        watch: {
            usePolling: true
        }
    }
    ,
    themeConfig: {
        outline: {
            level: [2, 3], // Include both `##` and `###` headings in the right-side ToC
            label: 'On this page' // Optional: Customize label text
        },
        carbonAds: {
            link: "blah"
        },
        search: {
            provider: 'local'
        },
        logo: '/logo-icon.png',

        nav: [
            {
                link: 'https://horilla.com',
                text: 'Home'

            },
            {
                link: 'https://github.com/horilla-opensource/horilla',
                text: '<span class="git-icon"><span>'

            },
            {
                text: 'v2.0',
                items: [
                    { text: 'v3.0', link: '/v3.0/' }, // latest version
                    { text: 'v2.0', link: '/v2.0/' },
                ]
            }
        ],
        sidebar: [
            {
                collapsed: true,
                text: "Installation & Setup", items: [
                    { text: "Getting Started", link: "/" },
                    { text: "Install Python", link: "/#python-installation" },
                    { text: "Install Horilla", link: "/#horilla-installation" },
                    { text: "Road Map", link: "/#roadmap" },
                    
                ]
            },


            {
                text: 'Generics and Methods',

                // collapsible: true, // Optional: Adds a collapsible feature for groups
                collapsed: true,

                items: [
                    {
                        text: 'List view', link: '/v2.0/doc/generic/hlv',
                    },
                    { text: 'Card view', link: '/v2.0/doc/generic/hcv' },
                    { text: 'Detailed view', link: '/v2.0/doc/generic/hdv' },
                    { text: 'Tab view', link: '/v2.0/doc/generic/htv' },
                    { text: 'Nav view', link: '/v2.0/doc/generic/hnv' },
                    { text: 'Form view', link: '/v2.0/doc/generic/hfv' },
                    { text: 'Methods' },
                ]
            },

            {
                text: 'Sidebars',

                // collapsible: true, // Optional: Adds a collapsible feature for groups
                collapsed: true,

                items: [
                    { text: 'Configuration' },
                    { text: 'Submenus' },
                    { text: 'Accessibility' },
                ]
            },
            {
                text: 'Horilla API',
                // collapsible: true,
                collapsed: true,
                items: [
                    { text: 'Getting Started', link: "/v2.0/index" },
                    { text: 'Authentication' },
                    { text: 'Employee Management' },
                    { text: 'Base API' },
                    { text: 'Employee API' },
                    { text: 'Attendance API' },
                    { text: 'Leave API' },
                ]
            },
            {
                text: 'Integerations',
                collapsed: true,
                items: [
                    { text: 'Whatsapp <span style="color: #e29436;">(beta)</span>', link: '/api/getting-started' },
                    {
                        text: 'Biometrics', link: '/api/getting-started',
                        items: [
                            { text: "ZK Tech", link: "#" },
                            { text: "Anvis", link: "#" },
                            { text: "Matrix", link: "#" },
                            { text: "Supreme", link: "#" },
                        ]

                    },
                    { text: 'AWS S3 Integration', link: '/api/getting-started' },
                    { text: 'DB Backup', link: '/api/getting-started' },
                ]
            },
            {
                text: 'Environ Configuration',
            },
            {
                text: 'Deployment',
                items: [
                    { text: 'Ubuntu', link: '/v2.0/doc/deployment/ubuntu' },
                    { text: 'AWS Linux', link: '/api/authentication' },
                    { text: 'Mac OS', link: '/api/employee-management' },
                    { text: 'Windows', link: '/api/recruitment' },
                    { text: 'Docker', link: '/api/recruitment' },
                ]
            },
            {
                text: 'i18n',
            },
            {
                text: 'Email Configurations',
                // collapsible: true,
                collapsed: true,
                items: [
                    { text: 'Zimbra', link: '/api/getting-started' },
                    { text: 'SES', link: '/api/authentication' },
                    { text: 'Gmail', link: '/api/employee-management' },
                    { text: 'Outlook', link: '/api/recruitment' },
                ]
            },
            {
                text: 'Databases',
                // collapsible: true,
                collapsed: true,
                items: [
                    { text: 'Postgres', link: '/api/getting-started' },
                    { text: 'Sqlite3', link: '/api/employee-management' },
                ]
            },
        ],
    },
}
