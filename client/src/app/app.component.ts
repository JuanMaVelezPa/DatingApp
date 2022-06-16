import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'The Dating App';
  users: any;

  constructor(private https: HttpClient) {}
  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.https.get('https://localhost:5001/api/users').subscribe({
      next: (response) => (this.users = response),
      error: (error) => console.log(error),
    });
    // Earlier version
    // this.http.get('https://localhost:5001/api/users').subscribe(
    //   (response) => {
    //     this.users = response;
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );
  }
}