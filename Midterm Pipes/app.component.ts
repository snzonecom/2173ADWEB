import { Component } from '@angular/core';
import {Observable, interval, map} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Midterm-1';
  presentDate = new Date(); 
  time$: Observable<Date>;

  constructor() {
    this.time$  = interval(1000).pipe(
      map(() => new Date())
    );
  }

  data: object = {
    name : "Shane Paras", age:21, food:'Coffee',
    languages:[
      {lname: 'JS', level:'Wizard'},
      {lname: 'PHP', level:'Average'},
      {lname: 'Flutter', level:'Beginner'}

    ]
  }

  // CURRENCY
  price : number = 20000; ngMoneyInit() {

  }

  //ARRAY
  Fruits = [' Apple ', ' Orange', ' Grape', ' Mango', ' Kiwi', ' Santol'];
  ngFruitInit(){

  }

  decimalNum1: number = 8.4578647168;
  decimalNum2: number = 2.786469;
  ngDecimalInit(){}
}
