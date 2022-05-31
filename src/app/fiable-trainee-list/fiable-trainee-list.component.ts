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
  btnVal: string = "Add Employee";
  traineeList: Trainee[] = [
    new Trainee(this.idCounter++, "PassOne", 9001, "HTML", 6), //over;over
    new Trainee(this.idCounter++, "FailTwo", 9001, "CSS", 5), //over; equal
    new Trainee(this.idCounter++, "FailThree", 9001, "Javascript", 4), //over; under
    new Trainee(this.idCounter++, "FailFour", 9000, "Typescript", 6), //equal; over
    new Trainee(this.idCounter++, "FailFive", 9000, "Angular", 5), //equal; equal
    new Trainee(this.idCounter++, "FailSix", 9000, "JDBC", 4), //equal;under
    new Trainee(this.idCounter++, "FailSeven", 8999, "Ruby", 6), //under;over
    new Trainee(this.idCounter++, "FailEight", 8999, "Java", 5), //under equal
    new Trainee(this.idCounter++, "FailNine", 8999, "Sprint Boot", 4) //under;under
  ];

  constructor() { 
  }

  ngOnInit(): void {
  }

  btnClicked() {
    this.toggle = !this.toggle;
    if(this.btnVal == "Add Employee"){
      this.btnVal = "Cancel";
    }
    else{
      this.btnVal = "Add Employee";
    }
  }

  newSubmission(event: any){
    this.btnClicked();
  }

}
