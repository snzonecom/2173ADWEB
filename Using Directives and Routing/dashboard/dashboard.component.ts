import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  staff = [ 
    { firstName: 'Shane', lastName: 'Paras', email: 'snparas@gmail.com', role: 'Admin' },
    { firstName: 'Dayna', lastName: 'Micaela', email: 'daynabellz@gmail.com', role: 'Admin' },
    { firstName: 'Ezra', lastName: 'Castro', email: 'ezrawr@gmail.com', role: 'User' },   
    { firstName: 'Ernie', lastName: 'Manalansan', email: 'itsernie@gmail.com', role: 'User' }, 
    { firstName: 'Jaira', lastName: 'Nunag', email: 'mhiemajai@gmail.com', role: 'User' },
    { firstName: 'Pat', lastName: 'Quiatchon', email: 'patticheu@gmail.com', role: 'User' }  
    ];

}
