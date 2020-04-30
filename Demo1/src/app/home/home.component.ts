import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

const weightClassesKg = {
  Male: [59, 66, 74, 83, 93, 105, 120],
  Female: [47, 52, 57, 63, 72, 84]
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  squatReps: number = 1;
  benchReps: number = 1;
  deadliftReps: number = 1;

  constructor(public data: DataService, private router: Router) {
    
   }

  ngOnInit() {
  }
  
  submitResults(){
    this.data.lifter.squat=this.data.getMax(this.data.lifter.squat, this.squatReps);
    this.data.lifter.bench=this.data.getMax(this.data.lifter.bench, this.benchReps);
    this.data.lifter.deadlift=this.data.getMax(this.data.lifter.deadlift, this.deadliftReps);
    if (this.data.lifter.preferredUnit === "lbs"){

    }
    if (this.data.lifter.gender === "Male"){
      for (const wClass of weightClassesKg.Male){
        if (this.data.lifter.bodyweight <= wClass){
          this.data.lifter.weightClass = wClass;
          break;
        }
      }
      if (this.data.lifter.bodyweight > weightClassesKg.Male[weightClassesKg.Male.length]){
        this.data.lifter.weightClass = weightClassesKg.Male[weightClassesKg.Male.length] + "+";
      }
    }else{
      for (const wClass of weightClassesKg.Female){
        if (this.data.lifter.bodyweight <= wClass){
          this.data.lifter.weightClass = wClass;
          break;
        }
      }
      if (this.data.lifter.bodyweight > weightClassesKg.Male[weightClassesKg.Female.length]){
        this.data.lifter.weightClass = weightClassesKg.Male[weightClassesKg.Female.length] + "+";
      }
    }
  
  this.router.navigate(["standards"]);
  }
}
