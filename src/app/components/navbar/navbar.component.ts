import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isAuthenticated: boolean = false;

  constructor(private location: Location, private authService: AuthService, private router: Router) {
    this.location.onUrlChange(path => {
      if (path == "/home") {
        this.isAuthenticated = true;
      }
    });
  }

  logout() {
    this.authService.logoutUser();
    this.isAuthenticated = false;
    this.router.navigate(['/']);
  }
}
