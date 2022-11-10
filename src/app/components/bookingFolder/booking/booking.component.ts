import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Booking } from 'src/app/interfaces/booking.interface';
import { BookingService } from 'src/app/services/booking.service';
import { ConfirmationDialogComponent } from '../../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  booking!: Booking;
  constructor(private bookingSrv: BookingService, private route: ActivatedRoute, public dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {

    const data: any = this.route.snapshot.data;
    if (data.bookingData.status == 200) {
      this.booking = data.bookingData.body.booking;
      console.log(data);
    }

  }

  delete(): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '500px',
      data: { _id: this.booking._id }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.bookingSrv.deleteOne(this.booking._id).subscribe(
          response => {
            if (response.status == 200) {
              this.router.navigate(['/bookings/']);
            }
          });
      }
    });

  }
}
