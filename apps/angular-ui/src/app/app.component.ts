import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface User {
  name: string;
}

@Component({
  selector: 'dorner-sales-ui-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  users: User[] = [{name: 'mmu'}, {name: 'ab'}];

  constructor(private http: HttpClient) {
    this.fetch();
  }

  fetch() {
    this.http.get<User[]>('/api/users').subscribe((t) => (this.users = t))
  }

  addUser() {
    this.http.post('/api/users', {}).subscribe(() => {
      this.fetch();
    });
  }
  title = 'angular-ui';
}
