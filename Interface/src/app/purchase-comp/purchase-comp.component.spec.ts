import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseCompComponent } from './purchase-comp.component';

describe('PurchaseCompComponent', () => {
  let component: PurchaseCompComponent;
  let fixture: ComponentFixture<PurchaseCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PurchaseCompComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PurchaseCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
