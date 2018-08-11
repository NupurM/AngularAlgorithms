import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  title = 'Angular Algorithms';
  description = 'Algorithms written in TypeScript and displayed using the Angular Framework';

  constructor() { }
}
