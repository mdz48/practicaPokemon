import { Injectable } from '@angular/core';
import { ICharacter } from '../models/icharacter';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  private apiUrl = "https://dragonball-api.com/api";

  constructor(readonly httpClient: HttpClient) { }

  getCharacters(): Observable<ICharacter[]> {
    return this.httpClient.get<ICharacter[]>(`${this.apiUrl}/characters`);
  }

  getCharacterById(id: number): Observable<ICharacter> {
    return this.httpClient.get<ICharacter>(`${this.apiUrl}/characters/${id}`);
  }

  navigateToCharacter(id: number): string {
    return `${this.apiUrl}/characters/${id}`;
  }
}
