import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Users} from '../app.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input() users: Users;
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onRemove = new EventEmitter<number>();

  removeUser() {
    this.onRemove.emit(this.users.id);
  }

  constructor() { }

  ngOnInit() {
  }

}
