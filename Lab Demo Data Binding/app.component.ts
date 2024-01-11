import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'This string is interpolated!'; //Interpolation
  clientName = 'Shane'; //Property Binding
  appliedCSS = 'red'; //Style Binding
  notAppliedCSS = false;
  myColor = 'green';

  //EVENT BINDING
  showData($event: any) {
    console.log('Button is clicked!');
    if ($event) {
      console.log($event.target);
      console.log($event.target.value);
    }
  }

  clickCount=0
  clickMe() {
    this.clickCount++;
  }
}
