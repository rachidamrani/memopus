import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { CardComponent } from './components/card/card.component.js';
import { CardService } from './services/card.service.js';
import { map } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    NavbarComponent,
    LoginFormComponent,
    CardComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit{
  title = 'memopus';
  cardsApp = this.cardService.cards;

  constructor(private cardService: CardService) {}

  ngOnInit() {
    this.cardService.getCards().subscribe();
  }
}
