import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

//Image binding
imageUrl:string="assets/profile-pic.JPG"; 
imageW: number = 350;
imageH: number = 350;

// *ngfor example 

staff = [ 
  { firstName: 'Shane', lastName: 'Paras', email: 'snparas@gmail.com', role: 'Admin' },
  { firstName: 'Dayna', lastName: 'Micaela', email: 'daynabellz@gmail.com', role: 'Admin' },
  { firstName: 'Ezra', lastName: 'Castro', email: 'ezrawr@gmail.com', role: 'User' },   
  { firstName: 'Ernie', lastName: 'Manalansan', email: 'itsernie@gmail.com', role: 'User' }, 
  { firstName: 'Jaira', lastName: 'Nunag', email: 'mhiemajai@gmail.com', role: 'User' },
  { firstName: 'Pat', lastName: 'Quiatchon', email: 'patticheu@gmail.com', role: 'User' }  
  ];

//Interpolation
owner_name = "Shane Paras";

}
