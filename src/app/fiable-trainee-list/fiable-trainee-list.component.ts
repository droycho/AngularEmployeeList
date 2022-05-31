import { Component, OnInit } from '@angular/core';
import { Trainee } from './trainee';

@Component({
  selector: 'app-fiable-trainee-list',
  templateUrl: './fiable-trainee-list.component.html',
  styleUrls: ['./fiable-trainee-list.component.css']
})
export class FiableTraineeListComponent implements OnInit {
  idCounter: number = 0;
  toggle:boolean =true;
  btnVal: string = "Add Trainee";
  traineeList: Trainee[] = [
    new Trainee(this.idCounter++, "DJ", 90000, "Engineer", 12),
    new Trainee(this.idCounter++, "Jake", 30000, "Broker", 12),
    new Trainee(this.idCounter++, "John", 40000, "Mason", 3),
    new Trainee(this.idCounter++, "Kelly", 1000000, "Doctor", 12),
    new Trainee(this.idCounter++, "Russell", 30000, "Mechanic", 8),
    new Trainee(this.idCounter++, "Kim", 8999, "Designer", 12),
    new Trainee(this.idCounter++, "Dylan", 9000, "Engineer", 12),
    new Trainee(this.idCounter++, "Paul", 9001, "Cop", 6),
    new Trainee(this.idCounter++, "Aladdin", 10000, "Thief", 5),
    new Trainee(this.idCounter++, "Jaffar", 30000, "Wizard", 4),
  ];

  constructor() { 
  }

  ngOnInit(): void {
  }

  btnClicked() {
    this.toggle = !this.toggle;
    if(this.btnVal == "Add Trainee"){
      this.btnVal = "Cancel";
    }
    else{
      this.btnVal = "Add Trainee";
    }
  }

  newSubmission(event: any){
    console.log(event);
    this.btnClicked();
  }

}
