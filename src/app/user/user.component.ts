import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from '../model/user';
import { RdvService } from '../shared/rdv.service';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  username: string;
  email: string;
  pwd: string;
  phone: number;
  birth: Date;
  gender: string;
  id:number;
  cnt:number;
  storeduser:Array<any>;

  user:User;
  listU:User[];

  constructor(private router: Router,
              private userService:UserService,
              private rdvs: RdvService,
              private serviceT: ToastrService) { }
  
  ngOnInit(): void {
    
    this.storeduser = JSON.parse(localStorage.getItem("connecteduser"));
    if ((typeof this.storeduser !== 'undefined' && this.storeduser !== null)) {
        this.cnt = 1;
        
        var test = localStorage.getItem('connecteduser');
        interface us {
          id:number
          username: string;
          email: string;
          pwd: string;
          phone: number;
          birth: Date;
          gender: string;
      }
      let obj: us = JSON.parse(test);
      this.userService.getUser(obj.id).subscribe(
        data=>{
          console.log(data)
          this.user = data;
        }, error => console.log(error));
        this.id=obj.id;
        this.username=obj.username;
        this.email=obj.email;
        this.pwd=obj.pwd;
        this.phone=obj.phone;
        this.birth=obj.birth;
        this.gender=obj.gender;

      } else {
        this.cnt = 0;
      }

      this.user=new User();
      
  }

  update(id){
    this.router.navigate(['update-user', id]);
  }

  reloadPage() {
    window.location.reload();
  }

  delete(id) {

    if(confirm("Deleting User...")){
      this.userService.deleteUser(id).subscribe(
      () => this.listU = this.listU
      .filter(rdv => rdv.id != id));

      this.serviceT.error('User has been deleted successfully !', 'Success',{
        timeOut: 4000,
        progressBar: true,
        progressAnimation: 'increasing'
        });
        
        localStorage.clear();
        this.reloadPage();
        window.location.href="http://localhost:4200/home";
    }else{
      this.serviceT.warning('', 'User still in Data base !',{
        timeOut: 4000,
        progressBar: true,
        progressAnimation: 'increasing'
        });
    }
    
  }




}
