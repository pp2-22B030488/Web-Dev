import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyListIdComponent } from './company-list-id.component';

describe('CompanyListIdComponent', () => {
  let component: CompanyListIdComponent;
  let fixture: ComponentFixture<CompanyListIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyListIdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompanyListIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
