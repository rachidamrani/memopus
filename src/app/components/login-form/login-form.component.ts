import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { AlertComponent } from '../alert/alert.component';
import { map } from 'rxjs';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [FormsModule, AlertComponent],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
  email: string = "";
  password: string = "";

  isAuthenticated: boolean = false;
  alertMessage: string = "";

  constructor(private loginService: LoginService, private router: Router) { }

  login(formData: NgForm) {
    const { email, password } = formData.value;

    this.loginService.loginUser(email, password)
      .pipe(
        map(response => response.users[0])
      )
      .subscribe(user => {
        if (user.login == email && user.pwd == password) {
          this.isAuthenticated = true;
          this.alertMessage = "Vous êtes bien connectés ! Vous serez redirigé vers la page d'accueil.";
          setTimeout(() => {
            this.router.navigate(['']);
          }, 2000)
        } else {
          console.log("failed!")
        }
      });
  }
}
