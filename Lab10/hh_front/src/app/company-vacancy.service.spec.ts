import { TestBed } from '@angular/core/testing';

import { CompanyVacancyService } from './company-vacancy.service';

describe('CompanyVacancyService', () => {
  let service: CompanyVacancyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompanyVacancyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
