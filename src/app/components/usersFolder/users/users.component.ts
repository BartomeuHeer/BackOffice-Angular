import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { tap } from 'rxjs';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { User } from '../../../interfaces/user.interface';
import { UsersService } from '../../../services/user.service';
import { Router } from '@angular/router';
import { ConfirmationDialogComponent } from '../../confirmation-dialog/confirmation-dialog.component';
import { ColDef } from 'ag-grid-community/dist/lib/entities/colDef';
import { CellClickedEvent } from 'ag-grid-community';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[]= [];
  colDef: ColDef[]=[
    {field: '_id'},
    {field: 'name'},
    {field: 'email'},
    {field: 'birthday'}
  
  ]
  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };
  

  constructor(private userSrv: UsersService,public dialog: MatDialog,private router: Router) { }
  rowData$!:any;

  ngOnInit(): void {
    this.userSrv.getUsers().subscribe(
      resp => {
        if(resp.status == 200){ 
      
      this.users = resp.body!;
      this.rowData$=resp.body!.map(({_id,name,email,birthday})=>({_id,name,email,birthday}));
      console.log(this.rowData$);
        }
    })
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
  onCellClicked( e: CellClickedEvent): void {
    console.log(e.data);
    this.router.navigate(['/users/',e.data._id]);
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
