import { Component, OnInit } from '@angular/core';
import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';
import { trLocale, enLocale } from 'app/i18n';

@Component({
  selector        : 'app-home',
  templateUrl     : './home.component.html',
  styleUrls       : ['./home.component.scss']
})
export class HomeComponent {
  constructor(private _fuseTranslationLoaderService: FuseTranslationLoaderService) {
    this._fuseTranslationLoaderService.loadTranslations(enLocale, trLocale);
  }
}
