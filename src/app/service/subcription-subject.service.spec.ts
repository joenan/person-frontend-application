import { TestBed } from '@angular/core/testing';

import { SubcriptionSubjectService } from './subcription-subject.service';

describe('SubcriptionSubjectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SubcriptionSubjectService = TestBed.get(SubcriptionSubjectService);
    expect(service).toBeTruthy();
  });
});
