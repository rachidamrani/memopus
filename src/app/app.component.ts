import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { CardComponent } from './components/card/card.component.js';
import { CardService } from './services/card.service.js';
import { TagComponent } from './components/tag/tag.component';
import { map } from 'rxjs';
import { Card } from './types/Card.js';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NavbarComponent, LoginFormComponent, CardComponent,TagComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'memopus';
  cards: Card[] = [];

  // cardsApp = this.cardService.cards;
  tags = ["Echec", "English", "Formation", "Geographie", "HTML", "Vocabulaire"];

  constructor(private cardService: CardService) {}

  ngOnInit() {
    this.cardService.fetchCards().subscribe(cards => {
      this.cards = cards;
    })
  }
}

