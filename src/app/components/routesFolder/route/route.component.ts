import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { RouteService } from 'src/app/services/route.service';
import { Route } from '../../../interfaces/route.interface';
import { ConfirmationDialogComponent } from '../../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.css']
})
export class RouteComponent implements OnInit {

  route!: Route;
  //_id: String | null;
  constructor(private routeSrv: RouteService, private router: Router, private aRouter: ActivatedRoute, public dialog: MatDialog) {
    //this._id=this.aRouter.snapshot.paramMap.get('_id');
  }

  ngOnInit(): void {
    const data: any = this.aRouter.snapshot.data;
    if (data.routeData.status == 200) {
      this.route = data.routeData.body;
      console.log(data);
    }



  }
  deleteOne(): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '500px',
      data: { _id: this.route._id }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.routeSrv.deleteOne(this.route._id).subscribe(
          response => {
            if (response.status == 200) {
              this.router.navigate(['/routes/']);
            }
          });
      }
    });
  }
}
