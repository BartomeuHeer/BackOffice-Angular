import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/user.service';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private userSrv: UsersService) { }

  ngOnInit(): void {
  }
  userAdd(user: User): void{
    this.userSrv.addUser(user).subscribe(
      response => {
        if(response.status == 200){
          //this.users.push(response.body!);
      }}
    )
}
}
