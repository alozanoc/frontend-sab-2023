import { inject, Injectable } from '@angular/core';
import { LocalStorageSubject } from '../../utils/LocalStorageSubject';
import { Router } from '@angular/router';

interface User {
  name: string,
  username: string,
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  currentUser = new LocalStorageSubject<User | null>('AUTH_USER', null);

  router = inject(Router);


  async login(username: string, password: string) {
    console.log('Doing login')
    if (password === '1234') {
      this.currentUser.next({
        username: username,
        name: username
      })
      await this.router.navigate(['/intranet']);
      return true;
    } else {
      return false;
    }
  }

  async logout() {
    this.currentUser.next(null)
    await this.router.navigate(['/auth/login']);
  }
}
