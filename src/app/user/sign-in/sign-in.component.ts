import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  user: User;
  LoginForm: FormGroup;
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
   
  constructor(private userService : UserService, 
              private service: ToastrService,) { }

  ngOnInit(): void {
    this.service.info('If you are new, please Sign Up !', 'Info',{
      timeOut: 3000,
      progressBar: true,
      progressAnimation: 'increasing'
    });
  }

  reloadPage() {
    window.location.reload();
  }


}

/*
    this.LoginForm = new FormGroup({
      username: new FormControl('',[Validators.required, Validators.minLength(4)]),
      pwd : new FormControl('',[Validators.required,
        Validators.pattern('[a-zA-Z0-9]{5,10}')])
    },

    */
