import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  pokemons: any[] = [];

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService.getPokemons(0).subscribe(
      (data: any) => {
        console.log(data);
        this.pokemons = data.results;
      },
      (error) => {
        console.error('Error al obtener los pokemons:', error);
      }
    );
  }
}
