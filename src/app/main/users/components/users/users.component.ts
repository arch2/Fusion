import { Component, OnInit } from '@angular/core';
import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';
import { enLocale, trLocale } from 'app/i18n';
import { DataService } from 'app/shared/services';
import { DataItem } from 'app/shared/models/DataItem';

@Component({
  selector        : 'app-users',
  templateUrl     : './users.component.html',
  styleUrls       : ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users                         : DataItem[];
  categories                    : any[];
  courses                       : any[];
  coursesFilteredByCategory     : any[];
  filteredCourses               : any[];
  currentCategory               : string;
  searchTerm                    : string;
  constructor(private _fuseTranslationLoaderService: FuseTranslationLoaderService, private dataService: DataService) {
    this._fuseTranslationLoaderService.loadTranslations(enLocale, trLocale);
  }

  ngOnInit() {
    // this.dataService.getUsers()
    //   .subscribe(
    //     x => {
    //       this.users = x;
    //     }
    //   );
    this.dataService.getWholeDB()
      .subscribe(
        x => {
          this.courses    = x.DataItem;
          this.categories = x.DataItem.map(x => x.category);
        }
      );
  }
}