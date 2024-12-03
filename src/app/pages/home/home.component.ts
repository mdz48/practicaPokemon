import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { CharacterComponent } from '../character/character.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, CharacterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  pokemons: any[] = [];
  urls: string[] = [];

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService.getPokemons(0).subscribe(
      (data: any) => {
        this.pokemons = data.results;
        this.urls = data.results.map((pokemon: any) => pokemon.url);
        this.getPokemonsData();
      },
      (error) => {
        console.error('Error al obtener los pokemons:', error);
      }
    );
  }

  getPokemonsData() {
    this.pokemonService.getPokemonsData(this.urls).subscribe((data: any) => {
      this.pokemons = data;
      console.log(this.pokemons);
    });
  }
}
