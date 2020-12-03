import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Rdv } from 'src/app/model/rdv';
import { RdvService } from 'src/app/shared/rdv.service';

@Component({
  selector: 'app-add-rdv',
  templateUrl: './add-rdv.component.html',
  styleUrls: ['./add-rdv.component.css']
})
export class AddRdvComponent implements OnInit {
  rdvForm:FormGroup;
  rdv: Rdv;
  listrdv: Rdv[];
  @Output() saveEvent = new EventEmitter<Rdv>();
  constructor(private rdvService:RdvService,
              private service: ToastrService ) { }

  ngOnInit(): void {
    this.rdv = new Rdv();
  }

  addRdv(){
      this.saveEvent.emit(this.rdv);
      this.rdvService.addURdv(this.rdv).subscribe(
        () => this.listrdv = [this.rdv, ...this.listrdv]
      );
      this.service.success('Appointment saved !', 'Success',{
      timeOut: 3000,
      progressBar: true,
      progressAnimation: 'increasing'
      });
  }


}
