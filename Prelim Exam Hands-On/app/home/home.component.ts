import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // Implementation of Style Binding - 'Learn More' text
  linkFontWeight = '600';
  linkNoLine = 'none';

  // Implementation of String Interpolation
  placeOne = 'Philippines';
  placeTwo = 'France';
  placeThree = 'Seoul';
  placeFour = 'Singapore';

  // Implementation of Property Binding
  phDesc:string = 'The Philippines is an archipelagic sovereign state in Southeast Asia, with over 7,100 islands dotted over its territory.';
  franceDesc:string = 'France, in Western Europe, encompasses medieval cities, alpine villages and Mediterranean beaches.';
  seoulDesc:string = 'Seoul, the capital of South Korea, is a huge metropolis where modern, high-tech and pop culture meet.';
  sgDesc:string = 'Singapore is a sunny, tropical island in Southeast Asia, off the southern tip of the Malay Peninsula.';
}
