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
  users!: User[];
  routes!: Route[];

  constructor(private bookingSrv: BookingService, private usrSrv: UsersService, private routeSrv: RouteService, private route: ActivatedRoute, private router: Router ) { }

  bookingForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('', [Validators.required, Validators.min(6)]) 
  })

  ngOnInit(): void {
    const data: any = this.route.snapshot.data;
    if (data.bookingData.status == 200) {
      this.booking = data.bookingData.body.booking;
      this.getUsers();
      this.getRoutes();
    }
  }

  getRoutes(): void{
    this.routeSrv.getAll().subscribe(
      res =>{
        if(res.status == 200){
          this.routes = res.body!;
        }
      }
    )
  }

  getUsers(): void{
    this.usrSrv.getUsers().subscribe(
      res => {
        if(res.status == 200 ){
          this.users = res.body!;
        }
      }
    )
  }

}
