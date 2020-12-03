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

  user: User[];
  LoginForm: FormGroup;
  membre:number;
   
  constructor(private userService : UserService, 
              private service: ToastrService,) { }

  ngOnInit(): void {
    this.service.info('If you are new, please Sign Up !', 'Info',{
      timeOut: 3000,
      progressBar: true,
      progressAnimation: 'increasing'
    });
  }

  login(){
    this.userService
    .login(this.LoginForm.value.email,this.LoginForm.value.password)
    .subscribe((data: User[]) => this.user = data);
    setTimeout(() => {
      if (this.user.length!=0){
        var connecteduser = this.user[0];
        localStorage.setItem("connecteduser", JSON.stringify(connecteduser));
        var storeduser = JSON.parse(localStorage.getItem("connecteduser"));
        window.location.reload();
        window.location.href="http://localhost:4200/home";
      }
      else {
        this.service.error('Please check your fields !', 'Error',{
          timeOut: 3000,
          progressBar: true,
          progressAnimation: 'increasing'
            });
      }
    }, 500);


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
