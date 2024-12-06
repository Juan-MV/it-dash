import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router, private authService: AuthService) {}

  // ngOnInit(): void {
  //   // Check if the user is already logged in
  //   if (this.authService.isLoggedIn()) {
  //     // If logged in, redirect to dashboard
  //     this.router.navigate(['/dashboard']);
  //   }
  // }

  // login(): void {
  //   if (this.username === 'admin' && this.password === 'password') {
  //     this.authService.login('fake-jwt-token');
  //     this.router.navigate(['/dashboard']);
  //   } else {
  //     alert('Invalid credentials');
  //   }
  // }

  login(): void {
    if (this.username === 'admin' && this.password === 'password') {
      this.authService.login('fake-jwt-token');
      this.router.navigate(['/dashboard']);
    } else {
      alert('Invalid credentials');
    }
  }
}