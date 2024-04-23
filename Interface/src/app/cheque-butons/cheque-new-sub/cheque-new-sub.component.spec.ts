import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChequeNewSubComponent } from './cheque-new-sub.component';

describe('ChequeNewSubComponent', () => {
  let component: ChequeNewSubComponent;
  let fixture: ComponentFixture<ChequeNewSubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChequeNewSubComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChequeNewSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
