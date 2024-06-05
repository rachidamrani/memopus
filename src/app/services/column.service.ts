import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Column } from '../types/Column';

@Injectable({
  providedIn: 'root',
})
export class ColumnService {
  constructor(private http: HttpClient) {}

  fetchColumns() {
    return this.http.get<Column[]>('http://localhost:3000/cards');
  }
}
