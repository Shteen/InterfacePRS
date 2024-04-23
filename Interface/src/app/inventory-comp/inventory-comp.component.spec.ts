import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryCompComponent } from './inventory-comp.component';

describe('InventoryCompComponent', () => {
  let component: InventoryCompComponent;
  let fixture: ComponentFixture<InventoryCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InventoryCompComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InventoryCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
