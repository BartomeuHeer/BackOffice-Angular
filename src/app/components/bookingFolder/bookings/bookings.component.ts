import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ColDef,CellClickedEvent } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { Booking } from 'src/app/interfaces/booking.interface';
import { BookingService } from 'src/app/services/booking.service';


@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {

  bookings!: Booking[];
  constructor(private bookingSrv: BookingService,private router: Router) { }

  rowData$!: any;

  colDef: ColDef[] = [
    {field: '_id'},
    {field: 'dayOfCreation'},
    {field: 'price'}
  ];

  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };
  onCellClicked( e: CellClickedEvent): void {
    this.router.navigate(['/bookings/', e.data._id]);
  }
  ngOnInit(): void {
    this.bookingSrv.getAll().subscribe(
      resp => {
        if(resp.status == 200){
          this.bookings = resp.body!
          this.rowData$ = this.bookings.map(({ _id, dayOfCreation, price }) => ({ _id, dayOfCreation, price }))
        }
      }
    );
  } 
}
