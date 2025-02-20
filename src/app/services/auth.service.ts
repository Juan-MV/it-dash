import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  isLoggedIn(): boolean {
    return !!localStorage.getItem('authToken');
  }

  login(token: string): void {
    localStorage.setItem('authToken', token);
  }

  logout(): void {
    localStorage.removeItem('authToken');
  }
}
