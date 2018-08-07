import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-reversal',
  templateUrl: './string-reversal.component.html',
  styleUrls: ['./string-reversal.component.scss']
})
export class StringReversalComponent implements OnInit {
  sectionTitle = 'String Reversal';
  reversedString = '\\____/';
  constructor() { }

  ngOnInit() {
  }

  reverse(inputString: string) {
    console.log(inputString);
    if (inputString === null || inputString === '') {
      this.reversedString = 'No input provided';
      console.log(this.reversedString);
    } else {
      const tempArray = inputString.split('');
      console.log(tempArray);
      tempArray.reverse();
      console.log(tempArray);
      this.reversedString = tempArray.join('');
      console.log(this.reversedString);
    }
  }
}
