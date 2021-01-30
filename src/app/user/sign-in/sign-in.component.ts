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
  listuser: User[];
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

    this.user = new User();
    this.LoginForm = new FormGroup({    
      email: new FormControl('', [Validators.required,
        Validators.pattern('[a-zA-Z0-9]+.[a-zA-Z0-9]+@[a-zA-Z0-9]+.[a-zA-Z0-9]{2,4}')]),
      pwd : new FormControl('',[Validators.required,
        Validators.pattern('[a-zA-Z0-9]{5,10}')]),
    })
    
  }

  login(){
    this.userService
    .login(this.LoginForm.value.email,this.LoginForm.value.pwd)
    .subscribe((data: User[]) => this.listuser = data);
    setTimeout(() => {
      if (this.listuser.length!=0){
        var connecteduser = this.listuser[0];
        console.log("class"+connecteduser);
        localStorage.setItem("connecteduser", JSON.stringify(connecteduser));
        window.location.reload();
        window.location.href="http://localhost:4200/home";  
      }
      else {
        this.service.error('Sorry, please check your fields !', 'Error',{
          timeOut: 3000,
          progressBar: true,
          progressAnimation: 'increasing'
            });
      }
    }, 500);


  }

  get email(){
    return this.LoginForm.get('email');
  }
  get pwd() {
    return this.LoginForm.get('pwd');
  }


}

/*
    this.LoginForm = new FormGroup({
      username: new FormControl('',[Validators.required, Validators.minLength(4)]),
      pwd : new FormControl('',[Validators.required,
        Validators.pattern('[a-zA-Z0-9]{5,10}')])
    },

    */
