import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICharacter } from '../../models/icharacter';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
@Input() character: ICharacter = {
  id: 0,
  name: '',
  image: '',
  ki: '',
  maxKi: '',
  race: '',
  affiliation: ''
};

@Output() id = new EventEmitter<number>();
}
