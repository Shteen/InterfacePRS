import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChequePrintComponent } from './cheque-print.component';

describe('ChequePrintComponent', () => {
  let component: ChequePrintComponent;
  let fixture: ComponentFixture<ChequePrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChequePrintComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChequePrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
