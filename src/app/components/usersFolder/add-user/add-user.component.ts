import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/user.service';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private userSrv: UsersService, private router: Router) { }

  ngOnInit(): void {
  }
  userAdd(user: User): void{
    this.userSrv.addUser(user).subscribe(
      response => {
        if(response.status == 200){
          console.log("bien :)")
          this.router.navigate(['/users']);
          //this.users.push(response.body!);
      }}
    )
}
}
