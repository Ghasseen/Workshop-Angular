import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private authService: UserService) { }

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
