import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Response } from '../types/Response.js';
import { map } from 'rxjs';
import { Card } from '../types/Card.js';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  constructor(private http: HttpClient) {}

  fetchCards() {
    return this.http.get<Card[]>("http://localhost:3000/cards")
  }
}


