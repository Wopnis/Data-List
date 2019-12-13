import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Users} from '../app.component';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  @Output() thenAdd: EventEmitter<Users> = new EventEmitter<Users>();
  name = '';
  surname = '';
  city = '';
  id = undefined;

  constructor() { }

  ngOnInit() {
  }

  addNewUser() {
      if (this.name.trim() && this.surname.trim() && this.city.trim()) {
        const user: Users = {
            name: this.name,
            surname: this.surname,
            city: this.city,
            id: this.id
        };
        this.thenAdd.emit(user);
        console.log('New user', user);
        this.name = this.surname = this.city = '';
        this.id = undefined;
      }
  }

}
