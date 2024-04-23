import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsWMaintenanceComponent } from './items-w-maintenance.component';

describe('ItemsWMaintenanceComponent', () => {
  let component: ItemsWMaintenanceComponent;
  let fixture: ComponentFixture<ItemsWMaintenanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemsWMaintenanceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItemsWMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
