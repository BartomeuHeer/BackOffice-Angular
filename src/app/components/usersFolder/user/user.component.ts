import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { User } from '../../../interfaces/user.interface';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() user!: User
  @Output() deleteUser = new EventEmitter<User>();
  @Output() editUser=new EventEmitter<User>();
  constructor() { }

  ngOnInit(): void {
  }
  delete():void{
    this.deleteUser.emit(this.user)
  }
  edit():void{
    this.editUser.emit(this.user);
  }
}
