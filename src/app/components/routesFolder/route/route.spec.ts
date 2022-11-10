import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { Route } from '../../../interfaces/route.interface';

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.css']
})
export class RouteComponent implements OnInit {
  @Input() route!: Route
  @Output() deleteRoute = new EventEmitter<Route>();
  constructor() { }

  ngOnInit(): void {
  }
  delete():void{
    this.deleteRoute.emit(this.route)
  }
}
