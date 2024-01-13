import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'Lego';

  // Property Binding - Product Images Path
  // Interpolation - Product Names

  prod1Name = 'Inquisitor Transport Scythe';
  item1 = '../assets/scythe.png';

  prod2Name = 'The Justifier';
  item2 = '../assets/justifier.png';

  prod3Name = 'TIE Bomber';
  item3 = '../assets/bomber.png';

  prod4Name = 'Luke Skywalker’s Landspeeder';
  item4 = '../assets/landspeeder.png';

  prod5Name = 'Millennium Falcon';
  item5 = '../assets/millennium-falcon.png';

  prod6Name = 'Luke Skywalker’s X-Wing Fighter';
  item6 = '../assets/xwing.png';

  prod7Name = 'The Razor Crest';
  item7 = '../assets/razor.png';

  prod8Name = 'Ghost & Phantom Second Ver.';
  item8 = '../assets/ghost-phantom.png';

  prod9Name = 'Coruscant Guard Gunship';
  item9 = '../assets/coruscant.png';

  prod10Name = "Ahsoka Tano's T-6 Jedi Shuttle";
  item10 = '../assets/jedi-shuttle.png';

  prod11Name = 'The Republic Fighter Tank';
  item11 = '../assets/fighter-tank.png';

  prod12Name = "The Mandalorian's N-1 Starfighter";
  item12 = '../assets/mandalorian.png';

  // Style Binding - Discounted Price
  discounted = 'crimson';



  //EVENT BINDING - Add to Cart Count
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
