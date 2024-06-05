import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from '../types/Response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated: boolean = false;

  constructor(private http: HttpClient) { }

  loginUser(email: string, password: string) {
    return this.http.get<Response>("https://coopernet.fr/db.json")
  }

  logoutUser() {
    this.isAuthenticated = false;
  }

  getIsAuthenticated() {
    return this.isAuthenticated;
  }

  setIsAuthenticated(state: boolean) {
    this.isAuthenticated = state;
  }
}
