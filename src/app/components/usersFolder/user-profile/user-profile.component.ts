import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { subscribeOn } from 'rxjs';
import { User } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/user.service';
import { ConfirmationDialogComponent } from '../../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user: User;
  _id: string | null;
  constructor(
    private userSrv: UsersService,
    public dialog: MatDialog,
    private router: Router,
    private aRouter: ActivatedRoute
    ) {
      this._id = this.aRouter.snapshot.paramMap.get('_id');
      console.log(this._id);
     }

  ngOnInit(): void {
    this.getUserInfo();
  }
  async getUserInfo() {
    if (this._id !==null) {
      this.userSrv.getUserById(this._id).subscribe(resp=>{
        if(resp.status==200){
          this.user=resp.body!;
        }
      })
    }

    throw new Error('Method not implemented.');
  }

  editUser(user:User):void{
    this.router.navigate(['/users/'+user._id+'/editUser'])
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
              console.log(response.status);
              this.router.navigate(['/users/']);
              /* this.users = this.users.filter(usr => usr._id != response.body!._id) */
          }
        });
      }
    });

      
  }
}
