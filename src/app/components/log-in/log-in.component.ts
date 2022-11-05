import { Component, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LogIn } from 'src/app/interfaces/logIn.interface';
import { User } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/user.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit, OnDestroy {

  user!: User;
  message!: String;
  subscription!: Subscription;

  constructor(private userSrv: UsersService, private router: Router) { }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  
  ngOnInit(): void {
    this.subscription = this.userSrv.currentUser.subscribe(message => this.user = message)
  }

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  })

  onSubmit(){
    const logInParams: LogIn = <LogIn>this.loginForm.value;
    this.userSrv.logIn(logInParams).subscribe(
      response => {
        if(response.status == 200){
          this.userSrv.newUserLogged(response.body!);
          this.router.navigate(['/']);
        }
      }); 
  }

}
