import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

export interface Users {
  name: string;
  surname: string;
  city: string;
  id?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {}
  users: Users[] = [];

  updateUserList(users: Users) {
      this.users.unshift(users);
      console.log('User', users);
  }

  removeUser(id: number) {
    console.log('remove id', id);
    this.users = this.users.filter(elem => elem.id !== id);
  }
  ngOnInit(){
    this.http.get<Users[]>('http://localhost:8000/users')
      .subscribe(users => {
        console.log('response', users);
        this.users = users;
      });
  }
}
