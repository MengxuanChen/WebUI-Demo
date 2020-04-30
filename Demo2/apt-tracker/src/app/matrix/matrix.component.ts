import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";

@Component({
  selector: 'app-matrix',
  templateUrl: './matrix.component.html',
  styleUrls: ['./matrix.component.css']
})
export class MatrixComponent implements OnInit {
  localData;
  apts;
  map = {};
  constructor(private dataService: DataService) { }

  ngOnInit(){
    this.localData = this.dataService.getData();
    this.apts = this.localData;
    
    this.createMap();
    
  }
  
  createMap(){
    console.log(this.apts);
    this.apts.forEach(element => {
      if(element.kill_chain_phases){
        element.kill_chain_phases.forEach(chain => {
          let arr = this.map[chain.phase_name] || [];
          arr.push(element.name);
          this.map[chain.phase_name] =arr;
        });
      }
    });
    console.log(this.map)
  }



}
