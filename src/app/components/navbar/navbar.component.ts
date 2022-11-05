import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {

  user!: User;
  message!: String;
  subscription!: Subscription;
  
  constructor(private usrServ: UsersService) {}

  

  ngOnInit(): void {
    
    this.subscription = this.usrServ.currentUser.subscribe(user => this.user = user);
    console.log("User a NAvbar" + JSON.stringify(this.user));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
