import { Component } from '@angular/core';

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
export class AppComponent {
  users: Users[] = [
    {name: 'Иван', surname: 'Иванов', city: 'Москва', id: 3333},
    {name: 'Ольга', surname: 'Николаева', city: 'Минск', id: 4444},
    {name: 'Олег', surname: 'Михайлов', city: 'Москва', id: 5555},
    {name: 'Джон', surname: 'Смит', city: 'Нью-Йорк', id: 6666},
    {name: 'Николай', surname: 'Сидоров', city: 'Минск', id: 7777},
  ];
  updateUserList(users: Users) {
      this.users.unshift(users);
      console.log('User', users);
  }

  removeUser(id: number) {
    console.log('remove id', id);
    this.users = this.users.filter(elem => elem.id !== id);
  }
}
