import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { tap } from 'rxjs';
import { User } from '../../../interfaces/user.interface';
import { UsersService } from '../../../services/user.service';
import { ConfirmationDialogComponent } from '../../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users!: User[];
  constructor(private userSrv: UsersService,public dialog: MatDialog) { }


  ngOnInit(): void {
    this.userSrv.getUsers().subscribe(
      resp => {
        if(resp.status == 200){
          this.users = resp.body!
        }
      }
    );

    
  }
  deleteOneUser(user: User): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '500px',
      data: {name: user.name}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.userSrv.delete(user._id).subscribe(
          response =>  { 
            if(response.status == 200){
              this.users = this.users.filter(usr => usr._id != response.body!._id)
          }
        });
      }
    });

      
  }

  userAdd(user: User): void{
      this.userSrv.addUser(user).subscribe(
        response => {
          if(response.status == 200){
            this.users.push(response.body!);
        }}
      )
  }
  

}
