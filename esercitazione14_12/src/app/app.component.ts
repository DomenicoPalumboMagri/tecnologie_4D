import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'esercitazione14_12';
  stringa ="app"
  CANTANTI = [
    {id: 1, name:'pausini'},
    {id: 2, name:'giovanotti'},
    {id: 5, name:'amoroso'},
    {id: 3, name:'lazza'},
    {id: 4, name:'sfera'}
  ];
}
