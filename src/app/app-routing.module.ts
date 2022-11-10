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
//import { BookingResolver } from './resolver/booking.resolver';



const routes: Routes = [
  {path: "", component: MainPageComponent},
  {path: "users", component: UsersComponent},
  {path: "users/addUser", component: AddUserComponent},
  {path: "users/:_id", component: UserProfileComponent},
  {path: "users/:_id/editUser", component: EditUserComponent},
  //{path: "user", component: UserComponent},
  {path: "routes", component: RoutesComponent},
  {path: "route/:id", component: RouteComponent,resolve: {routeData: RouteResolver}},
  {path: "formroutes", component: FormroutesComponent},
  {path: "bookings", component: BookingsComponent},
  //{path: "bookings/create", component: BookingFormComponent},
  {path: "login", component: LogInComponent},
  {path: "bookings/:id", component: BookingComponent, resolve: { bookingData: BookingResolver }},
  {path: "bookings/create",component: BookingFormComponent},
  {path: "**", component: PageNotFoundComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
