import { Component, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Route } from 'src/app/interfaces/route.interface';
import { User } from 'src/app/interfaces/user.interface';
import { RouteService } from 'src/app/services/route.service';

@Component({
  selector: 'app-formroutes',
  templateUrl: './formroutes.component.html',
  styleUrls: ['./formroutes.component.css']
})
export class FormroutesComponent implements OnInit {
  user!: User;
  message!: String;
  subscription!: Subscription;
  route!: Route;

  constructor(private routeSrv: RouteService, private router: Router) { }
  

 
  routeForm = new FormGroup({
    name: new FormControl('', Validators.required),
    creator: new FormControl('', Validators.required),
    startPoint: new FormControl('', Validators.required),
    endPoint: new FormControl('', Validators.required),
    stopPoint: new FormControl(),
    dateOfBeggining: new FormControl('', [Validators.required, Validators.min(10)]) 
  })
  

  ngOnInit(): void {
  }
  

  onSubmit(){
    
    const RouteParams: Route = <Route><unknown>this.routeForm.value;
    this.routeSrv.addOne(RouteParams).subscribe(
      response => {
        if(response.status == 200){
          //this.routeSrv.newUserLogged(response.body!);
          this.router.navigate(['/routes']);
        }
      }); 
  }
}
