import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name: string = 'Angular 6';
  title: string = 'Angualar buy Git';

  constructor() {
  }
}
