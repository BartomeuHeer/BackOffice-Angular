import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Booking } from '../interfaces/booking.interface';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private apiURL = 'http://localhost:5432/api/users/';
  constructor(private http: HttpClient) { }

   getAll(): Observable<HttpResponse<Booking[]>>{
      return this.http.get<Booking[]>(this.apiURL, {observe: 'response'});
  } 
  
  
  deleteOne(bookingId: string):Observable<HttpResponse<Booking>>{
    return this.http.delete<Booking>(this.apiURL+'delete/'+ bookingId, {observe: 'response'})
  }

  addOne(booking: Booking):Observable<HttpResponse<Booking>>{
    return this.http.post<Booking>(this.apiURL+'create/', booking, {observe: 'response'})
  }

  
}
