import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SepMaintenanceComponent } from './sep-maintenance.component';

describe('SepMaintenanceComponent', () => {
  let component: SepMaintenanceComponent;
  let fixture: ComponentFixture<SepMaintenanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SepMaintenanceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SepMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
