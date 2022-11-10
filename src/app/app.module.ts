import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './components/usersFolder/user/user.component';
import { UsersComponent } from './components/usersFolder/users/users.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { MaterialModule } from './material.module';
import { FormComponent } from './components/usersFolder/form/form.component';
import { AgGridModule } from 'ag-grid-angular';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { RoutesComponent } from './components/routesFolder/routes/routes.component';
import { BookingsComponent } from './components/bookingFolder/bookings/bookings.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { BookingComponent } from './components/bookingFolder/booking/booking.component';
import { BookingFormComponent } from './components/bookingFolder/booking-form/booking-form.component';
import { FormroutesComponent } from './components/routesFolder/formroutes/formroutes.component';
import { RouteComponent } from './components/routesFolder/route/route.component';

import { AddUserComponent } from './components/usersFolder/add-user/add-user.component';
import { UserProfileComponent } from './components/usersFolder/user-profile/user-profile.component';
import { EditUserComponent } from './components/usersFolder/edit-user/edit-user.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UsersComponent,
    FormComponent,
    ConfirmationDialogComponent,
    MainPageComponent,
    RoutesComponent,
    BookingsComponent,
    LogInComponent,
    NavbarComponent,
    PageNotFoundComponent,
    BookingComponent,
    BookingFormComponent,

    FormroutesComponent,
    RouteComponent,

    AddUserComponent,
    UserProfileComponent,
    EditUserComponent,


    
  ],
  imports: [
    MatTableModule,
    MatInputModule,
    MatNativeDateModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    AgGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
