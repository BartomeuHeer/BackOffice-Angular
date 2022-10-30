import { HttpClient,HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../interfaces/user.interface'

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private apiURL = 'http://localhost:5432/api/users/';
  constructor(private http: HttpClient) { }

   getUsers(): Observable<HttpResponse<User[]>>{
      return this.http.get<User[]>(this.apiURL, {observe: 'response'});
  } 

  delete(userId:string):Observable<HttpResponse<User>>{
    return this.http.delete<User>(this.apiURL+'delete/'+ userId, {observe: 'response'})
  }

  addUser(user:User):Observable<HttpResponse<User>>{
    return this.http.post<User>(this.apiURL+'register/', user, {observe: 'response'})
  }
}
