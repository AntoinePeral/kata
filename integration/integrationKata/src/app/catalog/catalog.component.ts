import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Fruit {
  id: number;
  name: string;
  price?: number | null;
  discount?: boolean;
  description?: string;
}

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.scss'
})
export class CatalogComponent {
  productList : Fruit[] =[
    { id: 1, name: 'Pomme', price: 1.2, discount: true, description: 'Pomme croquante et juteuse, parfaite pour un en-cas.' },
    { id: 2, name: 'Banane', price: 0.5, description: 'Banane sucrée, idéale pour le petit déjeuner.' },
    { id: 3, name: 'Orange', discount: true, description: 'Orange juteuse, riche en vitamine C.' },
    { id: 4, name: 'Fraise', price: 2.5, discount: true, description: 'Fraise sucrée et parfumée, parfaite pour les desserts.' },
    { id: 5, name: 'Kiwi', price: 1.5, description: 'Kiwi acidulé, riche en antioxydants.' },
    { id: 6, name: 'Mangue', price: 2.0, discount: true, description: 'Mangue juteuse et sucrée, délicieuse en smoothie.' },
    { id: 7, name: 'Raisin', description: 'Raisin frais, idéal pour les collations.' },
    { id: 8, name: 'Ananas', price: 4.0, discount: true, description: 'Ananas exotique, parfait pour les salades de fruits.' },
    { id: 9, name: 'Cerise', price: 5.0, description: 'Cerises rouges et sucrées, parfaites pour les tartes.' },
    { id: 10, name: 'Melon', discount: true, description: 'Melon sucré et rafraîchissant, idéal pour l’été.' },
  ]

  getProductWithNoPrice() : Fruit[]{
    return this.productList.filter(product => !product.price);
  }

  getProductWithDiscount (): Fruit[]{
    return this.productList.filter(product => product.discount);
  }

  getRestOfProduct(): Fruit[]{
    return this.productList.filter(product => product.price && !product.discount);
  }

}
