import { Injectable } from '@angular/core';
import { Trainee } from './trainee';

@Injectable({
  providedIn: 'root'
})
export class FiableTraineeServiceService {
  private idCounter: number = 0;
  constructor() { }
  getTrainees(): Trainee[]{
    return  [
      new Trainee(this.idCounter++, "TestOne", 9001, "Over/Over", 6), //over;over
      new Trainee(this.idCounter++, "TestTwo", 9001, "Over/Equal", 5), //over; equal
      new Trainee(this.idCounter++, "TestThree", 9001, "Over/Under", 4), //over; under
      new Trainee(this.idCounter++, "TestFour", 9000, "Equal/Over", 6), //equal; over
      new Trainee(this.idCounter++, "TestFive", 9000, "Equal/Equal", 5), //equal; equal
      new Trainee(this.idCounter++, "TestSix", 9000, "Equal/Under", 4), //equal;under
      new Trainee(this.idCounter++, "TestSeven", 8999, "Under/Over", 6), //under;over
      new Trainee(this.idCounter++, "TestEight", 8999, "Under/Equal", 5), //under equal
      new Trainee(this.idCounter++, "TestNine", 8999, "Under/Under", 4) //under;under
    ];
  
  }
}
