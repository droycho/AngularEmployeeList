import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiableTraineeListComponent } from './fiable-trainee-list.component';

describe('FiableTraineeListComponent', () => {
  let component: FiableTraineeListComponent;
  let fixture: ComponentFixture<FiableTraineeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiableTraineeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiableTraineeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
