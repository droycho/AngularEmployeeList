import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-fiable-trainee-form',
  templateUrl: './fiable-trainee-form.component.html',
  styleUrls: ['./fiable-trainee-form.component.css']
})
export class FiableTraineeFormComponent implements OnInit {

  employeeID= new FormControl('');
  eName= new FormControl('');
  salary= new FormControl('');
  designation= new FormControl('');
  credits= new FormControl('');
  constructor() { }

  ngOnInit(): void {
  }

}
