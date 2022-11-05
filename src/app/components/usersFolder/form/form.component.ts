import { Component, OnInit,Output,EventEmitter,Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { User } from '../../../interfaces/user.interface';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input() user!: User
  @Output() addUser = new EventEmitter<User>();
  userForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('', [Validators.required, Validators.min(6)]) 
  })
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.user=<User>this.userForm.value
    this.addUser.emit(this.user)
  }
}
