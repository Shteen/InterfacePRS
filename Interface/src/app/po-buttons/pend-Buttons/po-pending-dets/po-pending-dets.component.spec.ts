import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoPendingDetsComponent } from './po-pending-dets.component';

describe('PoPendingDetsComponent', () => {
  let component: PoPendingDetsComponent;
  let fixture: ComponentFixture<PoPendingDetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PoPendingDetsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PoPendingDetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
