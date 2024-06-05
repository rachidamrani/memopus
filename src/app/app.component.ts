import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginFormComponent } from './components/login-form/login-form.component';

import { TagComponent } from './components/tag/tag.component';
import { CardComponent } from './components/card/card.component.js';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NavbarComponent, LoginFormComponent, CardComponent,TagComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'memopus';
  tags = ["Echec", "English", "Formation", "Geographie", "HTML", "Vocabulaire"];
}