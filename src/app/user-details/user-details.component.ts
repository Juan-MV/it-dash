import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  user: any;
  isLoading = true;
  errorMessage = '';

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    const userId = this.route.snapshot.paramMap.get('id');
    if (userId) {
      this.fetchUserDetails(userId);
    }
  }

  fetchUserDetails(userId: string): void {
    this.http.get(`https://randomuser.me/api/?id=${userId}`).subscribe({
      next: (response: any) => {
        this.user = response.results[0]; // RandomUser API returns results array
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error fetching user details:', error);
        this.errorMessage =
          'Failed to load user details. Please try again later.';
        this.isLoading = false;
      },
    });
  }
}
