import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Trainee } from '../trainee';

@Component({
  selector: 'app-new-trainee-form',
  templateUrl: './new-trainee-form.component.html',
  styleUrls: ['./new-trainee-form.component.css']
})
export class NewTraineeFormComponent implements OnInit {
  employeeID= new FormControl('');
  eName= new FormControl('');
  salary= new FormControl('');
  designation= new FormControl('');
  credits= new FormControl('');
  newTrainee: Trainee;
  btnTxt: string = "SUBMIT";
  @Input()
  trainee!: Trainee;
  @Input('traineeList')
  tlist!: Trainee[];
  constructor() {
    this.newTrainee = new Trainee(0, "John Doe", 0, "No Job", 0);
   }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.employeeID.value != ''){
      this.newTrainee.setEmployeeID(this.employeeID.value);
      this.newTrainee.setEName(this.eName.value);
      this.newTrainee.setSalary(this.salary.value);
      this.newTrainee.setDesignation(this.designation.value);
      this.newTrainee.setCredits(this.credits.value);
    }
    console.log("Submit new trainee: ", this.newTrainee);
    this.tlist.push(this.newTrainee);
  }
}
