import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  sectionTitle = 'Counter';
  counter;
  constructor() { }

  ngOnInit() {
    this.counter = 0;
  }
}
