import { Injectable } from '@angular/core';
import *  as  raw_data from './attack_matrix.json';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data: Array<any>;
  constructor() {
    this.data = raw_data['default']['objects'];
  }

  getData() {
    return this.data;
  }
  setData(object) {
    this.data = object;
  }
}
