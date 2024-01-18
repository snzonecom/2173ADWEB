import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
//Using ngIf to toggle text display
showText: boolean = true;
toggleText() {
    this.showText = !this.showText;
  }


//Image interpolation/binding
imageUrl:string="assets/logo.png"; 
imageW: number = 110;
imageH: number = 100;

//Using *ngIf
isLogIn:boolean=true; 
isLogOut:boolean=false; 

// *ngfor example 

staff = [ 
{ firstName: 'Shane', lastName: 'Paras', email: 'snparas@gmail.com', role: 'Admin' },
{ firstName: 'Dayna', lastName: 'Micaela', email: 'daynabellz@gmail.com', role: 'Admin' },
{ firstName: 'Ezra', lastName: 'Castro', email: 'ezrawr@gmail.com', role: 'User' },   
{ firstName: 'Ernie', lastName: 'Manalansan', email: 'itsernie@gmail.com', role: 'User' }, 
{ firstName: 'Jaira', lastName: 'Nunag', email: 'mhiemajai@gmail.com', role: 'User' },
{ firstName: 'Pat', lastName: 'Quiatchon', email: 'patticheu@gmail.com', role: 'User' }  
];

// Another *ngfor example 
products = [
  { imageUrl: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg', name: 'Fancy Product 1', price: '$40.00 - $80.00' },
  { imageUrl: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg', name: 'Fancy Product 2', price: '$50.00 - $90.00' },
  { imageUrl: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg', name: 'Fancy Product 3', price: '$60.00 - $100.00' },
  // Add more product items as needed
];

}
