import { Component } from '@angular/core';

import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';

import { enLocale, trLocale } from '../../i18n';

@Component({
    selector   : 'sample',
    templateUrl: './sample.component.html',
    styleUrls  : ['./sample.component.scss']
})
export class SampleComponent
{
    /**
     * Constructor
     *
     * @param {FuseTranslationLoaderService} _fuseTranslationLoaderService
     */
    constructor(
        private _fuseTranslationLoaderService: FuseTranslationLoaderService
    )
    {
        this._fuseTranslationLoaderService.loadTranslations(enLocale, trLocale);
    }
}
