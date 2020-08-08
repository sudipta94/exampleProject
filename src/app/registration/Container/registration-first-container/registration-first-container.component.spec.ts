import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationFirstContainerComponent } from './registration-first-container.component';

describe('RegistrationFirstContainerComponent', () => {
  let component: RegistrationFirstContainerComponent;
  let fixture: ComponentFixture<RegistrationFirstContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationFirstContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationFirstContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
