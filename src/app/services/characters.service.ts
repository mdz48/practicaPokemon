import { Injectable } from '@angular/core';
import { ICharacter } from '../models/icharacter';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  private apiUrl = "https://pokeapi.co/api/v2";

  constructor(readonly httpClient: HttpClient) { }

  getCharacters(): Observable<ICharacter[]> {
    return this.httpClient.get<any>(`${this.apiUrl}/pokemon`).pipe(
      map(response => response.results)
    );
  }

  getCharacterById(id: number): Observable<ICharacter> {
    return this.httpClient.get<ICharacter>(`${this.apiUrl}/pokemon/${id}`);
  }

  navigateToCharacter(id: number): string {
    return `${this.apiUrl}/pokemon/${id}`;
  }
}
