import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-standards',
  templateUrl: './standards.component.html',
  styleUrls: ['./standards.component.css']
})
export class StandardsComponent implements OnInit {
  total;
  constructor(public data: DataService, private router: Router) {
    this.total = this.data.lifter.squat + this.data.lifter.bench + this.data.lifter.deadlift;
  }
  ngOnInit() {
  }
  
  round5(x){
    return Math.ceil(x/5)*5;
  }
  JSON = JSON;
}
