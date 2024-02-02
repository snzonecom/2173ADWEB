import { Component } from '@angular/core';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']
})
export class PartnersComponent {
  
  // image size binding
  imageW: number = 100;
  imageH: number = 100;

  // *ngfor example 
  company = [
    { name: 'Microsoft', sponsor: 'Platinum', site: 'https://www.microsoft.com/en-ph', imageUrl: 'https://pngimg.com/uploads/microsoft/microsoft_PNG9.png'},
    { name: 'Apple Inc.', sponsor: 'Gold', site: 'https://www.apple.com/ph/', imageUrl: 'https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-logo-icons-31.png'},
    { name: 'Amazon', sponsor: 'Silver', site: 'https://www.amazon.com/', imageUrl: 'https://cdn.icon-icons.com/icons2/2429/PNG/512/amazon_logo_icon_147320.png'},
    { name: 'Google Inc.', sponsor: 'Bronze', site: 'https://about.google/?utm_source=google-PH&utm_medium=referral&utm_campaign=hp-footer&fg=1', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png'}
  ];

}
