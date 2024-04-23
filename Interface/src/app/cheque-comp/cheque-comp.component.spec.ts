import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChequeCompComponent } from './cheque-comp.component';

describe('ChequeCompComponent', () => {
  let component: ChequeCompComponent;
  let fixture: ComponentFixture<ChequeCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChequeCompComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChequeCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }); 

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
