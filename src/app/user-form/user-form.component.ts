import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Users} from '../app.component';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  @Output() thenAdd: EventEmitter<Users> = new EventEmitter<Users>();
  name: string;
  surname: string;
  city: string;
  id: number;


  private initialUser: Users = {
    name: '',
    surname: '',
    city: '',
    id: null
  };

  user: Users = this.initialUser;


  constructor(private http: HttpClient) {}
  ngOnInit() {
  }

  addNewUser() {
      if (this.user.name.trim() && this.user.surname.trim() && this.user.city.trim()) {
        this.thenAdd.emit(this.user);
        console.log('New user', this.user);
        this.http.post('http://localhost:8000/users', this.user)
          .subscribe(user => {
            console.log('user', user);
            this.user = this.initialUser;
          });
      }
  }

}
