import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'FrontAngular';

  showNavBar: Boolean = false;
  constructor(private router: Router){

    router.events.forEach((event) => {
      if(event instanceof NavigationStart){
        this.showNavBar = event.url !== "/login"
      }
    });
  }

  ngOnInit(){

  }
}
