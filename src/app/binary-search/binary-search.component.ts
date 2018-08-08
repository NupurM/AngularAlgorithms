import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binary-search',
  templateUrl: './binary-search.component.html',
  styleUrls: ['./binary-search.component.scss']
})
export class BinarySearchComponent implements OnInit {

  sectionTitle = 'Binary Search';
  givenArray = [1, 3, 4, 5, 7, 8, 9];

  constructor() { }

  ngOnInit() {
  }

  search(x: number): boolean {
    console.log(x);
    return true;
  }
}
