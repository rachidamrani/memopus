import { Injectable } from '@angular/core';
import { User } from '../types/User';
import { HttpClient } from '@angular/common/http';
import { Response } from '../types/Response';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) { }

  loginUser(email: string, password: string) {
    return this.http.get<Response>("https://coopernet.fr/db.json")
  }
}
