import { Component, OnInit } from '@angular/core';
import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';
import { enLocale, trLocale } from 'app/i18n';
import { DataService } from 'app/shared/services';

@Component({
  selector        : 'app-users',
  templateUrl     : './users.component.html',
  styleUrls       : ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  private users: any;
  constructor(private _fuseTranslationLoaderService: FuseTranslationLoaderService, private dataService: DataService) {
    this._fuseTranslationLoaderService.loadTranslations(enLocale, trLocale);
  }

  ngOnInit() {
    this.dataService.getUsers()
      .subscribe(
        x => {
          this.users = JSON.stringify(x);
        }
      );
  }
}