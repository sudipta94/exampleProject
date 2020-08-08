import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationSecondContainerComponent } from './registration-second-container.component';

describe('RegistrationSecondContainerComponent', () => {
  let component: RegistrationSecondContainerComponent;
  let fixture: ComponentFixture<RegistrationSecondContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationSecondContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationSecondContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
