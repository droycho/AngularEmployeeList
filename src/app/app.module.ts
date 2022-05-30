import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FiableTraineeListComponent } from './fiable-trainee-list/fiable-trainee-list.component';
import { FiableTraineeFormComponent } from './fiable-trainee-form/fiable-trainee-form.component';

@NgModule({
  declarations: [
    AppComponent,
    FiableTraineeListComponent,
    FiableTraineeFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
