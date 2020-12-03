import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {
  id:number;
  storeduser:User;
  constructor() { }

  ngOnInit(): void {
 
  }

}
