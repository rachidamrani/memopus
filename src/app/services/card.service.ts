import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { ICard } from '../interfaces/icard.js';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  public cards = signal<ICard[]>([])

  constructor(private http: HttpClient) {}

  getCards(): Observable<ICard[]> {
    return this.http.get<ICard[]>('https://coopernet.fr/db.json').pipe(
      tap(cards => this.cards.set(cards))
    );
  }

}


