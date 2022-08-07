import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefectivedetailsComponent } from './defectivedetails.component';

describe('DefectivedetailsComponent', () => {
  let component: DefectivedetailsComponent;
  let fixture: ComponentFixture<DefectivedetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefectivedetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefectivedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
