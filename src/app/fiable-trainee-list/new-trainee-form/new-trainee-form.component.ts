import { Component, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { EventEmitter } from '@angular/core';
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
  @Input('traineeList')
    tlist!: Trainee[];
  @Output()
    submitted = new EventEmitter();

  constructor() {
    this.newTrainee = new Trainee(0, "No Name", 0, "No Job", 0);
   }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.employeeID.value != '' || 
    this.eName.value != '' ||
    this.salary.value != '' ||
    this.designation.value != '' ||
    this.credits.value != ''){
      if(this.employeeID.value != '')
        this.newTrainee.setEmployeeID(this.employeeID.value);
      else 
        this.newTrainee.setEmployeeID(Math.floor(Math.random() * (9999)));
      if(this.eName.value != '')
        this.newTrainee.setEName(this.eName.value);
      if(this.salary.value != '')
        this.newTrainee.setSalary(this.salary.value);
      if(this.designation.value != '')
        this.newTrainee.setDesignation(this.designation.value);
      if(this.credits.value != '')
        this.newTrainee.setCredits(this.credits.value);
      this.tlist.push(this.newTrainee);
    }
    this.submitted.emit('submitted');
  }
}
