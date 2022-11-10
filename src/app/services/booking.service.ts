import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Booking } from '../interfaces/booking.interface';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private apiURL = 'http://localhost:5432/api/bookings/';
  constructor(private http: HttpClient) { }

   getAll(): Observable<HttpResponse<Booking[]>>{
      return this.http.get<Booking[]>(this.apiURL, {observe: 'response'});
  } 
  
  getOne(bookingId: String): Observable<HttpResponse<Booking>>{
    return this.http.get<Booking>(this.apiURL + bookingId, {observe: 'response'});
  }
  deleteOne(bookingId: string):Observable<HttpResponse<Booking>>{
    return this.http.delete<Booking>(this.apiURL+'cancel/'+ bookingId, {observe: 'response'})
  }

  addOne(booking: Booking):Observable<HttpResponse<Booking>>{
    return this.http.post<Booking>(this.apiURL+'create/', booking, {observe: 'response'})
  }

  
}
