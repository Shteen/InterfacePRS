import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoPendingCancelComponent } from './po-pending-cancel.component';

describe('PoPendingCancelComponent', () => {
  let component: PoPendingCancelComponent;
  let fixture: ComponentFixture<PoPendingCancelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PoPendingCancelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PoPendingCancelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
