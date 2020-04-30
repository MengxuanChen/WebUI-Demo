import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  //We will keep everything in kg for comparisons and only display as lbs
  lifter: Lifter = {
    gender: 'Male',
    bodyweight: 0,
    squat: 0,
    bench: 0,
    deadlift: 0,
    preferredUnit: 'kg',
    targetPercentile: 50,
    weightClass: 0,
  }
  constructor() { }

  /**
   * Estimates one rep max
   * @param weight 
   * @param reps 
   */
  getMax(weight: number, reps: number) {
    return reps <= 1 ? reps * weight : weight * (1 + reps / 30);
  }
}

export interface Lifter {
  gender: 'Male' | 'Female';
  bodyweight: number;
  squat: number;
  bench: number;
  deadlift: number;
  preferredUnit: 'kg' | 'lbs';
  targetPercentile: number;
  weightClass: number | string;
}