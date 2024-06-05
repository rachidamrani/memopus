import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { AlertComponent } from '../alert/alert.component';
import { map } from 'rxjs';


@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [FormsModule, AlertComponent],
  templateUrl: './login-form.component.html',
})
export class LoginFormComponent {
  email: string = "";
  password: string = "";

  authMessage: string = "";

  constructor(private authService: AuthService, private router: Router) { }

  login(formData: NgForm) {
    const { email, password } = formData.value;

    this.authService.loginUser(email, password)
      .pipe(
        map(response => response.users[0])
      )
      .subscribe(user => {
        if (user.login == email && user.pwd == password) {
          this.authService.setIsAuthenticated(true);
          this.authMessage = "Vous êtes bien connectés ! Vous serez redirigé vers la page d'accueil.";
          setTimeout(() => {
            this.router.navigate(['home']);
          }, 1000)
        } else {
          this.authMessage = "Les identifiants entrés sont erronés !";
        }
      });
  }
}
