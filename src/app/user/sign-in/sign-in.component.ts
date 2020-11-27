import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private authService : UserService) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm){
    const loginObserver = {
      next: x => console.log('User logged in'),
      error: err => console.log(err)
    };
    this.authService.login(f.value).subscribe(loginObserver);

  }

}
