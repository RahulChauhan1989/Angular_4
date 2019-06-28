import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteredEmployeeComponent } from './registered-employee.component';

describe('RegisteredEmployeeComponent', () => {
  let component: RegisteredEmployeeComponent;
  let fixture: ComponentFixture<RegisteredEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisteredEmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisteredEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
