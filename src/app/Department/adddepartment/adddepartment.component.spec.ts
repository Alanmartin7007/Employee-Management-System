import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddepartmentComponent } from './adddepartment.component';

describe('AdddepartmentComponent', () => {
  let component: AdddepartmentComponent;
  let fixture: ComponentFixture<AdddepartmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdddepartmentComponent]
    });
    fixture = TestBed.createComponent(AdddepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
