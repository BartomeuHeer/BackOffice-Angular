import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Booking } from 'src/app/interfaces/booking.interface';
import { Route } from 'src/app/interfaces/route.interface';
import { User } from 'src/app/interfaces/user.interface';
import { BookingService } from 'src/app/services/booking.service';
import { RouteService } from 'src/app/services/route.service';
import { UsersService } from 'src/app/services/user.service';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css']
})
export class BookingFormComponent implements OnInit {
  selectedValue!: String;
  booking!: Booking;

  constructor(private bookingSrv: BookingService, private router: Router ) { }

  bookingForm = new FormGroup({
    route: new FormControl('', Validators.required),
    user: new FormControl('',Validators.required),
    price: new FormControl('',Validators.required),
    selectedStop: new FormControl('', Validators.required) 
  })

  ngOnInit(): void {
    
  }
  onSubmit(){
    const newBooking: Booking = <Booking><unknown>this.bookingForm.value
    this.bookingSrv.addOne(newBooking).subscribe(res=>{
      if(res.status == 200){
        this.router.navigate(['/bookings/']);
      }
    })
    
  }
}
