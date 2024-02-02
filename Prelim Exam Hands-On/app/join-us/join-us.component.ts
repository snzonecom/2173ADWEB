import { Component } from '@angular/core';

@Component({
  selector: 'app-join-us',
  templateUrl: './join-us.component.html',
  styleUrls: ['./join-us.component.css']
})
export class JoinUsComponent {
  firstName: string = '';
  lastName: string = '';
  userEmail: string = '';
  userIns: string = '';

  fullName: string = '';
  email: string = '';
  group: string = '';

  onSubmit() {
    this.fullName = this.firstName + " " + this.lastName;
    this.email = this.userEmail;
    this.group = this.userIns;
  }

}
