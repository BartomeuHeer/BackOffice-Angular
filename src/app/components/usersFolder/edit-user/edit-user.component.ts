
import { Component, OnInit,Output,EventEmitter,Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { User } from '../../../interfaces/user.interface';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/services/user.service';
import { _DisposeViewRepeaterStrategy } from '@angular/cdk/collections';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  @Input() user!: User
  @Output() editUser = new EventEmitter<User>();
  _id: string | null;
  userForm = /* FormGroup; */
  new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('', [Validators.required, Validators.min(6)]),
    birthday: new FormControl('', [Validators.required, Validators.min(10)]) 
  })
  constructor(private usrSrv:UsersService, private router: Router, private aRouter:ActivatedRoute) {
    this._id = this.aRouter.snapshot.paramMap.get('_id'); 
  }

  ngOnInit(): void {
  }
  onSubmit(){
    this.user=<User><unknown>this.userForm.value
    this.user._id= this._id!;
    this.usrSrv.updateUser(this.user).subscribe(
      response =>  { 
        if(response.status == 200){
          console.log(response.status);
          this.router.navigate(['/users/'+this._id]);
          /* this.users = this.users.filter(usr => usr._id != response.body!._id) */
      }
    });
    this.editUser.emit(this.user)
  }
}
