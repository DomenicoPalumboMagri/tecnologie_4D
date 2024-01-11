import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'compito';
  CANTANTI = [
    {id: 1, name:'Lazza'},
    {id: 2, name:'Tedua'},
    {id: 5, name:'Gemitaiz'},
    {id: 3, name:'Capo Plazza'},
    {id: 4, name:'Nait'}
  ];
}
