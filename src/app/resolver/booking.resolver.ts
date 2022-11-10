import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Booking } from '../interfaces/booking.interface';
import { BookingService } from '../services/booking.service';

@Injectable({
  providedIn: 'root'
})
export class BookingResolver implements Resolve<boolean> {
  constructor(private bookingServ: BookingService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.bookingServ.getOne(route.paramMap.get('id')!)
  }
}
