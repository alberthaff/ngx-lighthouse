const users = require('./users.js');

let versioning = require('./lib/versioning.js'); // TODO: License??

module.exports = {
    title: 'Buoy',
    description: 'A Lighthouse-client for Angular. Build your SPAs on top of Laravel!',
    head: [
        ['link', {
            rel: 'icon',
            href: '/favicon.png'
        }],
        ['link', {
            rel: 'stylesheet',
            type: 'text/css',
            href: 'https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,800,800i,900,900i'
        }]
    ],
    plugins: [
        [
            '@vuepress/clean-urls',
            {
                normalSuffix: '',
                indexSuffix: '/',
            }
        ]
    ],
    themeConfig: {
        logo: '/img/logo_white.svg',
        editLinks: true,
        lastUpdated: 'Last Updated',
        repo: 'haffdata/buoy',      // GitHub repository
        npmPackage: '@buoy/client', // Main NPM package
        docsDir: 'docs/',           // docs folder inside repository
        /*versions: {
            latest: versioning.versions.latest,
            selected: versioning.versions.latest,
            all: versioning.versions.all
        },*/
        search: true,
        nav: [
            {
                text: 'Features',   // TODO
                link: '/features.md'
            },
            {
                text: 'Demo',       // TODO
                items: [
                    {
                        text: 'Buoy demo',
                        link: '/demo.md'
                    },
                    {
                        text: 'Demo GraphQL-endpoint',
                        link: 'https://demo.ngx-buoy.com'
                    }
                ]
            },
            {
                text: 'Users',
                link: '/users.md'
            },
            {
                text: 'Resources',  // TODO
                link: '/resources.md'
            },
            {
                text: `Docs`,
                items: versioning.linksFor('getting-started/installation.md') // TODO create custom component
            }
        ],
        sidebar: versioning.sidebars,
        users: users
    }
};
