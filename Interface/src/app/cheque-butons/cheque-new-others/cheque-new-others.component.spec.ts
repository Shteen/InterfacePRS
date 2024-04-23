import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChequeNewOthersComponent } from './cheque-new-others.component';

describe('ChequeNewOthersComponent', () => {
  let component: ChequeNewOthersComponent;
  let fixture: ComponentFixture<ChequeNewOthersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChequeNewOthersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChequeNewOthersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
