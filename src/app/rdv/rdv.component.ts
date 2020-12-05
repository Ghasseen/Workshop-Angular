import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Rdv } from '../model/rdv';
import { RdvService } from '../shared/rdv.service';

@Component({
  selector: 'app-rdv',
  templateUrl: './rdv.component.html',
  styleUrls: ['./rdv.component.css']
})
export class RdvComponent implements OnInit {
  listrdv: Rdv[];
  rdv:Rdv;
  id:number;
  cnt:number;

  username: string;
  email: string;
  pwd: string;
  phone: number;
  birth: Date;
  gender: string;
  storeduser:Array<any>;

  constructor(private rdvs:RdvService,
              private service: ToastrService,
              private router: Router) { }

  ngOnInit(): void {
    this.rdv = new Rdv();
    this.rdvs.getrdvs().subscribe(
      (data:Rdv[]) => this.listrdv = data );

      this.storeduser = JSON.parse(localStorage.getItem("connecteduser"));
    if ((typeof this.storeduser !== 'undefined' && this.storeduser !== null)) {
        this.cnt = 1;

        var test = localStorage.getItem('connecteduser');
        interface us {
        ids:number
        username: string;
        email: string;
        pwd: string;
        phone: number;
        birth: Date;
        gender: string;

      }
      let obj: us = JSON.parse(test);
      this.id=obj.ids;
      this.username=obj.username;
      this.email=obj.email;
      this.pwd=obj.pwd;
      this.phone=obj.phone;
      this.birth=obj.birth;
      this.gender=obj.gender;
      } else {
        this.cnt = 0;
      }
      console.log(localStorage)
  }

  delete(id) {
    this.rdvs.deleteRdv(id).subscribe(
      () => this.listrdv = this.listrdv
      .filter(rdv => rdv.id != id));

      this.service.warning('Your ppointment has been deleted successfully !', 'Success',{
        timeOut: 4000,
        progressBar: true,
        progressAnimation: 'increasing'
        });
  }

  update(id){
    this.router.navigate(['update-rdv', id]);
  }

}


