import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationSecondComponent } from './registration-second.component';

describe('RegistrationSecondComponent', () => {
  let component: RegistrationSecondComponent;
  let fixture: ComponentFixture<RegistrationSecondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationSecondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
