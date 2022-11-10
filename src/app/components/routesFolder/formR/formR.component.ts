import { Component, OnInit,Output,EventEmitter,Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Route } from '@angular/router';

@Component({
  selector: 'app-formR',
  templateUrl: './formR.component.html',
  styleUrls: ['./formR.component.css']
})
export class FormComponentR implements OnInit {
  @Input() route!: Route
  @Output() create = new EventEmitter<Route>();
  routeForm = new FormGroup({
    name: new FormControl('', Validators.required),
    creator: new FormControl('',Validators.required),
    dateOfEntry: new FormControl('', Validators.required) 
  })

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.route=<Route>this.routeForm.value
    this.create.emit(this.route)
  }
}
