import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from '../../node_modules/rxjs/Observable';

@Injectable()
export class ApiService {

  private _apiUrl = 'https://nupurs-api-demo1.azurewebsites.net/api/binarysearch';

  constructor(private _http: HttpClient) { }

  binarySearch(x: number): Observable<number> {
    const url = `${this._apiUrl}/${x}`;

    return this._http.get<number>(url);
  }

}
