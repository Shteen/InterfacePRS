import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RrBalancesComponent } from './rr-balances.component';

describe('RrBalancesComponent', () => {
  let component: RrBalancesComponent;
  let fixture: ComponentFixture<RrBalancesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RrBalancesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RrBalancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
