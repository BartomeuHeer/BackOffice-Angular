import { NgModule } from '@angular/core';
import { ActivatedRouteSnapshot, RouterModule, RouterStateSnapshot, Routes } from '@angular/router';
import { BookingFormComponent } from './components/bookingFolder/booking-form/booking-form.component';
import { BookingComponent } from './components/bookingFolder/booking/booking.component';
import { BookingsComponent } from './components/bookingFolder/bookings/bookings.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RoutesComponent } from './components/routesFolder/routes/routes.component';

import { RouteComponent } from './components/routesFolder/route/route.component';
import { FormroutesComponent } from './components/routesFolder/formroutes/formroutes.component';

import { AddUserComponent } from './components/usersFolder/add-user/add-user.component';
import { EditUserComponent } from './components/usersFolder/edit-user/edit-user.component';
import { UserProfileComponent } from './components/usersFolder/user-profile/user-profile.component';

import { UserComponent } from './components/usersFolder/user/user.component';
import { UsersComponent } from './components/usersFolder/users/users.component';
import { BookingResolver } from './resolver/booking.resolver';
import { RouteResolver } from './resolver/route.resolver';
import { AuthGuard } from './guards/auth.guard';
//import { BookingResolver } from './resolver/booking.resolver';



const routes: Routes = [
  {path: "", component: MainPageComponent, canActivate: [AuthGuard]},
  {path: "users", component: UsersComponent,canActivate: [AuthGuard]},
  {path: "users/addUser", component: AddUserComponent,canActivate: [AuthGuard]},
  {path: "users/:_id", component: UserProfileComponent,canActivate: [AuthGuard]},
  {path: "users/:_id/editUser", component: EditUserComponent,canActivate: [AuthGuard]},
  //{path: "user", component: UserComponent},
  {path: "routes", component: RoutesComponent,canActivate: [AuthGuard]},
  {path: "route/:id", component: RouteComponent,resolve: {routeData: RouteResolver},canActivate: [AuthGuard]},
  {path: "formroutes", component: FormroutesComponent,canActivate: [AuthGuard]},
  {path: "bookings", component: BookingsComponent,canActivate: [AuthGuard]},
  //{path: "bookings/create", component: BookingFormComponent},
  {path: "login", component: LogInComponent},
  {path: "bookings/:id", component: BookingComponent, resolve: { bookingData: BookingResolver },canActivate: [AuthGuard]},
  {path: "bookings/create",component: BookingFormComponent,canActivate: [AuthGuard]},
  {path: "**", component: PageNotFoundComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
