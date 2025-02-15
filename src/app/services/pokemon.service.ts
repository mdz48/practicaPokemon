import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) { }

  getPokemon(name: string) {
    return this.http.get(`${this.apiUrl}/${name}`);
  }

  getPokemons(offset: number) {
    return this.http.get(`${this.apiUrl}?limit=50&offset=${offset}`);
  }

  getPokemonsData(urls: string[]) {
    const list = urls.map((url: string) => this.http.get(url));
    return forkJoin(...list);
  }
}
