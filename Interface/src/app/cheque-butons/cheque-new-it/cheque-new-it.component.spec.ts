import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChequeNewItComponent } from './cheque-new-it.component';

describe('ChequeNewItComponent', () => {
  let component: ChequeNewItComponent;
  let fixture: ComponentFixture<ChequeNewItComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChequeNewItComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChequeNewItComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
