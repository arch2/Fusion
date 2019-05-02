import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id       : 'applications',
        title    : 'Applications',
        translate: 'NAV.APPLICATIONS',
        type     : 'group',
        children : [
            {
                id       : 'home',
                title    : 'Home',
                translate: 'NAV.HOME.TITLE',
                type     : 'item',
                icon     : 'email',
                url      : '/home',
                badge    : {
                    title    : '25',
                    translate: 'NAV.HOME.BADGE',
                    bg       : '#F44336',
                    fg       : '#FFFFFF'
                }
            },
            {
                id       : 'sample',
                title    : 'Sample',
                translate: 'NAV.SAMPLE.TITLE',
                type     : 'item',
                icon     : 'email',
                url      : '/sample',
                badge    : {
                    title    : '25',
                    translate: 'NAV.SAMPLE.BADGE',
                    bg       : '#F44336',
                    fg       : '#FFFFFF'
                }
            }
        ]
    }
];
