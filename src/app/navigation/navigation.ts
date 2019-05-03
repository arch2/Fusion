import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id            : 'pages',
        title         : 'Pages',
        translate     : 'NAV.PAGES',
        type          : 'group',
        children      : [
            {
                id            : 'home',
                title         : 'Home',
                translate     : 'NAV.HOME.TITLE',
                type          : 'item',
                icon          : 'dashboard',
                url           : '/home',
            },
            {
                id            : 'sample',
                title         : 'Sample',
                translate     : 'NAV.SAMPLE.TITLE',
                type          : 'item',
                icon          : 'email',
                url           : '/sample',
                badge         : {
                    title         : '25',
                    translate     : 'NAV.SAMPLE.BADGE',
                    bg            : '#F44336',
                    fg            : '#FFFFFF'
                }
            },
            {
                id            : 'categories',
                title         : 'Categories',
                translate     : 'NAV.CATEGORIES.TITLE',
                type          : 'collapsable',
                icon          : 'dashboard',
                badge         : {
                    title         : '4',
                    translate     : 'NAV.CATEGORIES.BADGE',
                    bg            : '#F44336',
                    fg            : '#FFFFFF'
                },
                children      : [
                    {
                        id            : 'users',
                        title         : 'Users',
                        translate     : 'NAV.USERS.TITLE',
                        type          : 'item',
                        icon          : 'account_box',
                        url           : '/users'
                    }
                ]
            }
        ]
    },
    {
        id            : 'applications',
        title         : 'Applications',
        translate     : 'NAV.APPLICATIONS',
        type          : 'group',
        children      : 
            [
                {
                    id            : 'lightbox',
                    title         : 'Lightbox',
                    translate     : 'NAV.LIGHTBOX.TITLE',
                    type          : 'item',
                    icon          : 'email',
                    url           : '/home',
                    badge         : {
                        title         : '25',
                        translate     : 'NAV.LIGHTBOX.BADGE',
                        bg            : '#F44336',
                        fg            : '#FFFFFF'
                    }
                },
            ]
    }
];
