import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  card = {
    img : 'https://via.placeholder.com/150',
    title: 'Produit ',
    description: 'Ceci est une courte description du produit'
  }

  displayInfos(){
    console.log('Some informations');
  }

}
