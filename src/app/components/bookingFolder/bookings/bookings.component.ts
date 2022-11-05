import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { Booking } from 'src/app/interfaces/booking.interface';
import { BookingService } from 'src/app/services/booking.service';


@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {

  bookings!: Booking[];

  constructor(private bookingSrv: BookingService) { }

  /* rowData: any[] = this.bookings.filter(x => 
    x.user && x.dayOfCreation);

  colDef: ColDef[] = [
    {field: '_id'},
    {field: 'USER'},
    {field: 'PRICE'}
  ] */

  ngOnInit(): void {
    /* this.bookingSrv.getAll().subscribe(
      response => {
        if(response.status == 200){
          this.bookings = response.body!;
        }
      }
    ) */

  }

}
