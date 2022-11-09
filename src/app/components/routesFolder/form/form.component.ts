import { Component, OnInit,Output,EventEmitter,Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Route } from '@angular/router';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
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
