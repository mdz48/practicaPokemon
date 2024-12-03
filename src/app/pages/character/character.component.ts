import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { ICharacter } from '../../models/icharacter';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap, toArray } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-character',
  standalone: true,
  imports: [CommonModule, ],
  templateUrl: './character.component.html',
  styleUrl: './character.component.css'
})
export class CharacterComponent implements OnInit {
  characters$: Observable<ICharacter[]> = of([]);

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.characters$ = this.getAllPokemons().pipe(
      catchError(error => {
        console.error('Error fetching characters:', error);
        return of([]); 
      })
    );
  }

  getAllPokemons(): Observable<ICharacter[]> {
    const limit = 50; // Número de Pokémon por página
    const initialOffset = 0;

    return this.pokemonService.getPokemons(initialOffset).pipe(
      mergeMap((response: any) => {
        const total = response.count;
        const pages = Math.ceil(total / limit);
        const requests = [];

        for (let i = 0; i < pages; i++) {
          requests.push(this.pokemonService.getPokemons(i * limit));
        }

        return requests;
      }),
      mergeMap(requests => requests),
      map((response: any) => response.results),
      toArray(),
      map(results => results.flat())
    );
  }
}
