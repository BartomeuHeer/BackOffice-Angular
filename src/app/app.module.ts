import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { UsersComponent } from './components/users/users.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { MaterialModule } from './material.module';
import { FormComponent } from './components/form/form.component';

import { ReactiveFormsModule } from '@angular/forms';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { RoutesComponent } from './components/routes/routes.component';
import { BookingsComponent } from './components/bookings/bookings.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UsersComponent,
    FormComponent,
    ConfirmationDialogComponent,
    MainPageComponent,
    RoutesComponent,
    BookingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
