import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Route } from '../interfaces/route.interface';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  private apiURL = 'http://localhost:5432/api/routes/';
  constructor(private http: HttpClient) { }

   getAll(): Observable<HttpResponse<Route[]>>{
      return this.http.get<Route[]>(this.apiURL, {observe: 'response'});
  } 
  
  
  deleteOne(routeID: string):Observable<HttpResponse<Route>>{
    return this.http.delete<Route>(this.apiURL+ routeID +'/deleteRoute/', {observe: 'response'})
  }
  getOne(routeId: String): Observable<HttpResponse<Route>>{
    return this.http.get<Route>(this.apiURL + routeId, {observe: 'response'});
  }

  addOne(route: Route):Observable<HttpResponse<Route>>{
    return this.http.post<Route>(this.apiURL+'create/', route, {observe: 'response'})
  }
}
