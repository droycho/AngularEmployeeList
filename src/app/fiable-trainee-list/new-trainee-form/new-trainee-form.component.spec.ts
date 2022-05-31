import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTraineeFormComponent } from './new-trainee-form.component';

describe('NewTraineeFormComponent', () => {
  let component: NewTraineeFormComponent;
  let fixture: ComponentFixture<NewTraineeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewTraineeFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTraineeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
