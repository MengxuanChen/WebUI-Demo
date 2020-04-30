import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";
@Component({
  selector: 'app-add-apt',
  templateUrl: './add-apt.component.html',
  styleUrls: ['./add-apt.component.css']
})
export class AddAptComponent implements OnInit {
  val1: string;
  constructor(private dataService:DataService) { }

  ngOnInit() {
  }
}
