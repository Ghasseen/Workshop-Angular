import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {
  listUsers: User[];
  user: User;
  registerForm: FormGroup;
  id:number;

  constructor(private userService: UserService, 
              private serviceT: ToastrService,
              private service:ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.user = new User();
    this.registerForm = new FormGroup({
      username: new FormControl('',[Validators.required, Validators.minLength(4)]),
      email: new FormControl('', [Validators.required,
        Validators.pattern('[a-zA-Z0-9]+.[a-zA-Z0-9]+@[a-zA-Z0-9]+.[a-zA-Z0-9]{2,4}')]),
      pwd : new FormControl('',[Validators.required,
        Validators.pattern('[a-zA-Z0-9]{5,10}')]),
      phone : new FormControl('',[Validators.required,Validators.pattern('[0-9]{8}')]),
      date: new FormControl('',Validators.required),
      gender: new FormControl('',Validators.required)
    })
    

    this.user = new User();
    this.id = this.service.snapshot.params['id'];
    this.userService.getUser(this.id).subscribe(
      data=>{
        console.log(data)
        this.user = data;
      }, error => console.log(error));

  }

  updateUser(){
    this.userService.updateUser(this.user.id,this.user).
    subscribe(data => console.log(data), error => console.log(error));
      this.user = new User();

      this.serviceT.info('User has been updated successfully !', 'Info',{
        timeOut: 3000,
        progressBar: true,
        progressAnimation: 'increasing'
      });

    localStorage.clear();
    this.reloadPage();
    window.location.href="http://localhost:4200/login";

    }

    reloadPage() {
      window.location.reload();
    }


    
    get username(){
      return this.registerForm.get('username');
    }
    get email(){
      return this.registerForm.get('email');
    }
    get pwd() {
      return this.registerForm.get('pwd');
    }
    get phone() {
      return this.registerForm.get('phone');
    }
    get date() {
      return this.registerForm.get('date');
    }
    get gender(){
      return this.registerForm.get('gender');
    }

    reset(){
      this.registerForm.reset();
    }



  }














