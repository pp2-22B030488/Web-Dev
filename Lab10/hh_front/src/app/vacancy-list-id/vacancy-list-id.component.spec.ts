import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacancyListIdComponent } from './vacancy-list-id.component';

describe('VacancyListIdComponent', () => {
  let component: VacancyListIdComponent;
  let fixture: ComponentFixture<VacancyListIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VacancyListIdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VacancyListIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
