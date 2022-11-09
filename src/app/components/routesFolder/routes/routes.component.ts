import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ColDef,CellClickedEvent } from 'ag-grid-community';
import { Route } from 'src/app/interfaces/route.interface';
import { RouteService } from 'src/app/services/route.service';
import { ConfirmationDialogComponent } from '../../confirmation-dialog/confirmation-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.css']
})
export class RoutesComponent implements OnInit {
  route!: Route[];
  constructor(private routeSrv: RouteService,private router: Router,public dialog: MatDialog) { }

  rowData$!: any;

  colDef: ColDef[] = [
    {field: '_id'},
    {field: 'creator'},
    {field: 'name'},
    {field: 'dateOfEntry'}
  ];
  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };
  onCellClicked( e: CellClickedEvent): void {
    this.router.navigate(['/routes/', e.data._id]);
  }
  ngOnInit(): void {
    this.routeSrv.getAllRoutes().subscribe(
      resp => {
        if(resp.status == 200){
          this.route = resp.body!
          this.rowData$ = this.route.map(({ _id,creator,name,dateOfEntry }) => ({ _id,creator,name,dateOfEntry }))
        }
      }
    );

    this.routeSrv.create(this.route).subscribe(
      response => {
        if(response.status == 200){
          this.route.push(response.body!);
        }}
    )
  };

    this.routeSrv.getOne().subscribe(
      resp =>{
        if(resp.status == 200){
          this.route = resp.body!
          this.rowData$ = this.route.map(({ _id,creator,name,dateOfEntry }) => ({ _id,creator,name,dateOfEntry }))
        }
      }
    );

    this.routeSrv.deleteOne(route: Route): void {
      const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
        width: '500px',
        data: {name: this.route}
      })

      dialogRef.afterClosed().subscribe(result => {
        if(result){
          this.routeSrv.deleteOne(route._id).subscribe(
            response =>  { 
              if(response.status == 200){
                this.route = this.route.filter(rou => rou._id != response.body!._id)
            }
          })
    };
}
