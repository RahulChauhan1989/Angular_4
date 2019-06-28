import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { childcomponentComponent } from './childcomponent.component';

describe('ChildcomponentComponent', () => {
  let component: childcomponentComponent;
  let fixture: ComponentFixture<childcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ childcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(childcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
