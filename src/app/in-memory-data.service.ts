import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {

    const photos =
    [
      {
          "name": "chambre.webp",
          "description": "You room / Votre chambre"
      },
      {
          "name": "chambre_2.webp",
          "description": "You room / Votre chambre"
      },
      {
          "name": "cuisine.webp",
          "description": "The kitchen / La cuisine"
      },
      {
          "name": "salle_de_bain.webp",
          "description": "The bathroom / La salle de bain"
      },
      {
          "name": "salon.webp",
          "description": "Living room- we share this space with you"
      }
  ];

  return {photos};


  }


}
