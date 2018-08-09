import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from '../../node_modules/rxjs/Observable';

@Injectable()
export class ApiService {

  private _url = 'https://nupurs-api-demo1.azurewebsites.net/api/binarysearch/9';
  constructor(private _http: HttpClient) { }

  binarySearch(x: number): Observable<number> {
    return this._http.get<number>(this._url);
  }

}
