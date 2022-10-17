import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { tap } from 'rxjs';
import { User } from '../../interfaces/user.interface';
import { UsersService } from '../../services/user.service';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users!: User[];
  constructor(private userSrv: UsersService,public dialog: MatDialog) { }


  ngOnInit(): void {
    this.userSrv.getUsers()
    .pipe(
      tap((users: User[]) => this.users = users)
    )
    .subscribe();

    
  }
  deleteOneUser(user: User): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '500px',
      data: {name: user.name}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.userSrv.delete(user.name).subscribe(
          data =>  { if(data.name == user.name){
            this.users = this.users.filter(usr => usr.name != data.name)
          }}
        );
      }
    });

      
  }

  userAdd(user: User): void{
      this.userSrv.addUser(user).subscribe(
        data => {if(data.name == user.name){
          this.users.push(data);
        }}
      )
  }
  

}
