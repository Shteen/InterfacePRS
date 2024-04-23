import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPageCompComponent } from './login-page-comp.component';

describe('LoginPageCompComponent', () => {
  let component: LoginPageCompComponent;
  let fixture: ComponentFixture<LoginPageCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginPageCompComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginPageCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
