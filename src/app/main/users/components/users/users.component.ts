import { Component, OnInit } from '@angular/core';
import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';
import { enLocale, trLocale } from 'app/i18n';
import { DataService } from 'app/shared/services';
import { DataItem } from 'app/shared/models/DataItem';
import { fuseAnimations } from '@fuse/animations';

@Component({
  selector        : 'app-users',
  templateUrl     : './users.component.html',
  styleUrls       : ['./users.component.scss'],
  animations      : fuseAnimations
})
export class UsersComponent implements OnInit {
  users                         : DataItem[];
  categories                    : any[] = [];
  courses                       : any[] = [];
  coursesFilteredByCategory     : any[] = [];
  filteredCourses               : any[] = [];
  currentCategory               : string = '';
  searchTerm                    : string = '';
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
    // this.dataService.getWholeDB()
    //   .subscribe(
    //     x => {
    //           this.courses = this.filteredCourses = this.coursesFilteredByCategory = x.DataItem;
    //       let cats         = Array.from(new Set(x.DataItem.map(x => x.category)));
    //       console.log(cats);
    //       this.categories = cats;
    //     }
    //   );
    this.dataService.getGeneralCategories()
      .subscribe(
        categories => { this.categories = categories }
      );
    this.dataService.getGeneral()
      .subscribe(
        generalItems => { this.courses = this.filteredCourses = this.coursesFilteredByCategory = generalItems }
      )
  }

  /**
   * Filter courses by category
   */
  filterCoursesByCategory(): void {
    // Filter
    if (this.currentCategory === 'all') {
      this.coursesFilteredByCategory = this.courses;
      this.filteredCourses           = this.courses;
    }
    else {
      this.coursesFilteredByCategory = this.courses.filter((course) => {
        return course.Category == this.currentCategory;
      });

      this.filteredCourses = [...this.coursesFilteredByCategory];

    }

    // Re-filter by search term
    this.filterCoursesByTerm();
  }

  /**
   * Filter courses by term
   */
  filterCoursesByTerm(): void {
    const searchTerm = this.searchTerm.toLowerCase();

    // Search
    if (searchTerm === '') {
      this.filteredCourses = this.coursesFilteredByCategory;
    }
    else {
      this.filteredCourses = this.coursesFilteredByCategory.filter((course) => {
        return course.Name.toLowerCase().includes(searchTerm) || course.Site.toLowerCase().includes(searchTerm);
      });
    }
  }
}