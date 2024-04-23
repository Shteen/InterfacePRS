import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierWMaintenanceComponent } from './supplier-w-maintenance.component';

describe('SupplierWMaintenanceComponent', () => {
  let component: SupplierWMaintenanceComponent;
  let fixture: ComponentFixture<SupplierWMaintenanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupplierWMaintenanceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SupplierWMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
