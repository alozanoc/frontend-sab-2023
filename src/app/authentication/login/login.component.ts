import { Component, inject } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  authenticationService = inject(AuthenticationService);
  username: string = '';
  password: string = '';
  message = '';

  async login() {
    console.log('Doing login')
    const result = await this.authenticationService.login(this.username, this.password);
    if (!result) {
      this.message = 'Usuario o contraseña incorrecto'
    }
  }

}
