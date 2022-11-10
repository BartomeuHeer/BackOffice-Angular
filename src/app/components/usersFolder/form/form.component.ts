import { Component, OnInit,Output,EventEmitter,Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { User } from '../../../interfaces/user.interface';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/services/user.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input() user!: User
  @Output() addUser = new EventEmitter<User>();
  id: string | null;
  userForm = /* FormGroup; */
  new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('', [Validators.required, Validators.min(6)]),
    birthday: new FormControl('', [Validators.required, Validators.min(10)]) 
  })
  constructor(router: Router) {}

  ngOnInit(): void {
  }
  onSubmit(){
    this.user=<User><unknown>this.userForm.value
    this.addUser.emit(this.user)
  }
}
