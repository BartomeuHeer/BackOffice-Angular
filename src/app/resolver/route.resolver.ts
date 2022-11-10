import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { RouteService } from '../services/route.service';

@Injectable({
  providedIn: 'root'
})
export class RouteResolver implements Resolve<boolean> {
  constructor(private routeServ: RouteService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.routeServ.getOne(route.paramMap.get('id')!)
  }
}
