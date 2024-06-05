import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginFormComponent } from './components/login-form/login-form.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NavbarComponent, LoginFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'memopus';
}
