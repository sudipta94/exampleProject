import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationFirstComponent } from './registration-first.component';

describe('RegistrationFirstComponent', () => {
  let component: RegistrationFirstComponent;
  let fixture: ComponentFixture<RegistrationFirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationFirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
