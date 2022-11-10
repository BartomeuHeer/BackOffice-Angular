import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingFormComponent } from './components/bookingFolder/booking-form/booking-form.component';
import { BookingsComponent } from './components/bookingFolder/bookings/bookings.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RoutesComponent } from './components/routesFolder/routes/routes.component';
import { RouteComponent } from './components/routesFolder/route/route.component';
import { MainroutesComponent } from './components/routesFolder/mainroutes/mainroutes.component';
import { FormroutesComponent } from './components/routesFolder/formroutes/formroutes.component';
import { UserComponent } from './components/usersFolder/user/user.component';
import { UsersComponent } from './components/usersFolder/users/users.component';

const routes: Routes = [
  {path: "", component: MainPageComponent},
  {path: "users", component: UsersComponent},
  //{path: "user", component: UserComponent},
  {path: "routes", component: RoutesComponent},
  {path: "route", component: RouteComponent},
  {path: "formroutes", component: FormroutesComponent},
  {path: "mainroutes", component: MainroutesComponent},
  {path: "bookings", component: BookingsComponent},
  {path: "login", component: LogInComponent},
  {path: "bookings/:id", component: BookingFormComponent},
  {path: "**", component: PageNotFoundComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
