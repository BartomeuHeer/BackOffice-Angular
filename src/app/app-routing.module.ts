import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingsComponent } from './components/bookings/bookings.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RoutesComponent } from './components/routes/routes.component';
import { UserComponent } from './components/user/user.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  {path: "", component: MainPageComponent},
  {path: "users", component: UsersComponent},
  {path: "user", component: UserComponent},
  {path: "routes", component: RoutesComponent},
  {path: "bookings", component: BookingsComponent},
  {path: "login", component: LogInComponent},
  {path: "**", component: PageNotFoundComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
