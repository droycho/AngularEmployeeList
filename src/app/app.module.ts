import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FiableTraineeListComponent } from './fiable-trainee-list/fiable-trainee-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FiableTraineeListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
