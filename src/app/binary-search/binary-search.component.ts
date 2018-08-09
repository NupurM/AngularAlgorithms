import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-binary-search',
  templateUrl: './binary-search.component.html',
  styleUrls: ['./binary-search.component.scss']
})
export class BinarySearchComponent implements OnInit {

  sectionTitle = 'Binary Search';
  givenArray = [1, 3, 4, 5, 7, 8, 9];
  xindex: number;
  message = '////_ ////';

  constructor(private _apiService: ApiService) {
  }

  ngOnInit() {
  }

  search(x: number) {
    this._apiService.binarySearch(x)
      .subscribe(data => function () {
        this.xindex = data;
        this.message = x + ' was found at positon ' + this.xindex;
      });
  }
}
