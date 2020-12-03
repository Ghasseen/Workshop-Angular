import { Component, OnInit } from '@angular/core';
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
  router: any;
  constructor(private rdvs:RdvService,
              private service: ToastrService) { }

  ngOnInit(): void {
    this.rdv = new Rdv();
    this.rdvs.getrdvs().subscribe(
      (data:Rdv[]) => this.listrdv = data );
  }

  delete(id) {
    this.rdvs.deleteRdv(id).subscribe(
      () => this.listrdv = this.listrdv
      .filter(rdv => rdv.idr != id));
      this.service.warning('Appointment has been deleted successfully !', 'Success',{
        timeOut: 3000,
        progressBar: true,
        progressAnimation: 'increasing'
        });
  }

  update(id){
    this.router.navigate(['updaterdv', id]);
  }

}


