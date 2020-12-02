import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  listUsers: User[];
  user: User;
  registerForm: FormGroup;


  constructor(private userService: UserService, 
              private service: ToastrService,) { }

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
  }

  save() {
    if(this.registerForm.valid){
      this.userService.addUser(this.user).subscribe(
        () => this.listUsers = [this.user, ...this.listUsers]
      );
      this.service.success('Welcome to MediLab <3 ', 'Success',{
      timeOut: 3000,
      progressBar: true,
      progressAnimation: 'increasing'
      });}
    else{
      this.service.error('Please check your fields !', 'Error',{
        timeOut: 3000,
        progressBar: true,
        progressAnimation: 'increasing'
          });
      }
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


         /*
    console.log(this.registerForm.value);
    console.log(this.user);
    this.user = <User> this.registerForm.value;
    console.log(this.user);
    Object.assign(this.user, this.registerForm.value);
    console.log(this.user);
    */  


    /*
      //onSubmit(f: NgForm){
        const loginObserver = {
          next: x => console.log('User logged in'),
          error: err => console.log(err)
        };
        this.authService.login(f.value).subscribe(loginObserver);

      }
    */
}
