import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  onGetFreeGiftClick() {
    console.log('Button clicked! Claim your FREE gift now!');

    const confirmation = confirm("Congratulations! You've claimed your free gift.");
  }

}
