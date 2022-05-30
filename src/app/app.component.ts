import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'comp-1';
  toggle:boolean =true;
  btnVal: string = "Add Trainee";

  btnClicked() {
    this.toggle = !this.toggle;
    if(this.btnVal == "Add Trainee")
      this.btnVal = "Submit Trainee";
    else
      this.btnVal = "Add Trainee";
  }
}
