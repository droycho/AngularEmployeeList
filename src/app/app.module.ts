import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FiableTraineeListComponent } from './fiable-trainee-list/fiable-trainee-list.component';
import { NewTraineeFormComponent } from './fiable-trainee-list/new-trainee-form/new-trainee-form.component';
import { FiableTraineeServiceService } from './fiable-trainee-list/fiable-trainee-service.service';

@NgModule({
  declarations: [
    AppComponent,
    FiableTraineeListComponent,
    NewTraineeFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [
    FiableTraineeServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
