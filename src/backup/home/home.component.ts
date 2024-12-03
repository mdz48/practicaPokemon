import { Component, OnInit } from '@angular/core';
import { ICharacter } from '../../app/models/icharacter';
import { CharactersService } from '../../app/services/characters.service';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../../app/app.component';
import { NavbarComponent } from '../../app/components/navbar/navbar.component';
import { CardComponent } from '../../app/components/card/card.component';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { filter, from, map } from 'rxjs';
import { RfcPipe } from '../../app/pipes/rfc.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NavbarComponent, CardComponent, ButtonModule, DialogModule, RfcPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
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

    this.obj$.subscribe({
      next: data => console.log(data), //Existoso
      error: err => console.log(err), //Hubo error
      complete: () => console.log('Complente') //Cuando ya fue completado


    })
  }

  visible: boolean = false;

  showDialog() {
    this.visible = true;
  }

  obj$ = from([1, 2, 3, 4, 5, 6]).pipe(
    map(num => num * 2),
    filter(num => num === 10)
  )

  rfc = 'HOLaa'
}
