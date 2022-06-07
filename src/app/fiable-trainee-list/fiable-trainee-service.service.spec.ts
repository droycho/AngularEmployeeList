import { TestBed } from '@angular/core/testing';

import { FiableTraineeServiceService } from './fiable-trainee-service.service';

describe('FiableTraineeServiceService', () => {
  let service: FiableTraineeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FiableTraineeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
