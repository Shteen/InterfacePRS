import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoPendingPrintComponent } from './po-pending-print.component';

describe('PoPendingPrintComponent', () => {
  let component: PoPendingPrintComponent;
  let fixture: ComponentFixture<PoPendingPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PoPendingPrintComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PoPendingPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
