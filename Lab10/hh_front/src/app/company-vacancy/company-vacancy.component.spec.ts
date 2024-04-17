import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyVacancyComponent } from './company-vacancy.component';

describe('CompanyVacancyComponent', () => {
  let component: CompanyVacancyComponent;
  let fixture: ComponentFixture<CompanyVacancyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyVacancyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompanyVacancyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
