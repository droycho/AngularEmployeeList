import { Component, OnInit } from '@angular/core';
import { Trainee } from './trainee';
import { FiableTraineeServiceService } from './fiable-trainee-service.service';

@Component({
  selector: 'app-fiable-trainee-list',
  templateUrl: './fiable-trainee-list.component.html',
  styleUrls: ['./fiable-trainee-list.component.css']
})
export class FiableTraineeListComponent implements OnInit {
  toggle:boolean =true;
  btnVal: string = "Add Employee";
  traineeList: Trainee[];

  constructor(traineeService: FiableTraineeServiceService) { 
    this.traineeList = traineeService.getTrainees();
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
