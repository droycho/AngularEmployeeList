import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiableTraineeFormComponent } from './fiable-trainee-form.component';

describe('FiableTraineeFormComponent', () => {
  let component: FiableTraineeFormComponent;
  let fixture: ComponentFixture<FiableTraineeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiableTraineeFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiableTraineeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
