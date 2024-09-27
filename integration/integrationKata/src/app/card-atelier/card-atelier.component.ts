import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface User{
  title: string;
  age: number;
  img: string;
  citation: string;
}

@Component({
  selector: 'app-card-atelier',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './card-atelier.component.html',
  styleUrl: './card-atelier.component.scss'
})
export class CardAtelierComponent {
  card : User ={
    title:  'Hello John',
    img:  'https://via.placeholder.com/150',
    age: 25,
    citation: ''
  }

  displayInfos(){
    alert('Voici plus d\'information sur la card');
  }

}
