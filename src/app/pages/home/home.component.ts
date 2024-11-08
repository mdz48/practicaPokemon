import { Component, OnInit } from '@angular/core';
import { ICharacter } from '../../models/icharacter';
import { CharactersService } from '../../services/characters.service';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../../app.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { CardComponent } from '../../components/card/card.component';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NavbarComponent, CardComponent, ButtonModule, DialogModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  characters: ICharacter[] = [];
  selectedCharacter: any;

  constructor(readonly charactersService: CharactersService, private router: Router) { 
    this.charactersService.getCharacters().subscribe((data: any) => {
      this.characters = data.items;
    });
  }

  getCharacterIdHandler(id: number) {
    this.charactersService.getCharacterById(id).subscribe((data: any) => {
      this.selectedCharacter = data;
      this.visible = true;
    });
  }

  ngOnInit(): void {
    // this.charactersService.getCharacters().subscribe((data) => {
    //     console.log(data);
    // });
  }

  visible: boolean = false;

  showDialog() {
    this.visible = true;
  }
}
