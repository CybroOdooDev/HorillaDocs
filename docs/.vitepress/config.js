

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
                    { text: "Road Map", link: "/#roadmap" },

                ]
            },


            {
                text: 'Generics and Methods',

                // collapsible: true, // Optional: Adds a collapsible feature for groups
                collapsed: true,

                items: [
                    {
                        text: 'List view', link: '/v2.0/doc/generic/views/hlv',
                    },
                    { text: 'Card view', link: '/v2.0/doc/generic/views/hcv' },
                    { text: 'Detailed view', link: '/v2.0/doc/generic/views/hdv' },
                    { text: 'Tab view', link: '/v2.0/doc/generic/views/htv' },
                    { text: 'Nav view', link: '/v2.0/doc/generic/views/hnv' },
                    { text: 'Form view', link: '/v2.0/doc/generic/views/hfv' },
                    {
                        text: 'Methods', link: '/v2.0/doc/generic/methods/methods',
                        items: [
                            { text: "CBV Methods", link: '/v2.0/doc/generic/methods/methods' },
                        ]
                    },
                    {
                        text: 'Decorators', link: '/v2.0/doc/generic/methods/decorators',
                        items: [
                            { text: "CBV Decorators", link: '/v2.0/doc/generic/decorators/cbv_decorators' },
                            { text: "General Decorators", link: '/v2.0/doc/generic/decorators/general_decorators' },
                        ]
                    },
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
                    { text: 'Base API', link:'/v2.0/doc/api/baseapi' },
                    { text: 'Employee API' , link:'/v2.0/doc/api/employeeapi'},
                    { text: 'Attendance API', link:'/v2.0/doc/api/attendanceapi'},
                    { text: 'Leave API', link:'/v2.0/doc/api/leaveapi'},
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
                    { text: 'AWS S3 Integration', link: '/v2.0/doc/integrations/s3bucket' },
                    { text: 'DB Backup', },
                ]
            },
            {
                text: 'Deployment',
                items: [
                    {
                        text: 'Ubuntu',
                        items: [
                            {
                                text: "Service File",
                                link: '/v2.0/doc/deployment/ubuntu_service_file'
                            },
                            {
                                text: "Gunicorn and Nginx",
                                link: '/v2.0/doc/deployment/nginx_gunicorn'
                            }
                        ]
                    },
                    { text: 'AWS Linux', link: '/v2.0/doc/deployment/linux' },
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
