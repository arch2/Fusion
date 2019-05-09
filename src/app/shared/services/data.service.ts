import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators'
import { DB } from '../models/DB';
import { DataItem } from '../models/DataItem';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<DataItem[]> {
    return this.getWholeDB()
      .pipe(
        map(
          x => x.DataItem.filter(
            di => di.category == "Username"
          )
        )
      );
  }
  getWholeDB(): Observable<DB> {
    return this.http.get<DB>('assets/jDB.json');
  }
}
