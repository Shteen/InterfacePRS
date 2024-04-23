import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RrBalanceAddBalanceComponent } from './rr-balance-add-balance.component';

describe('RrBalanceAddBalanceComponent', () => {
  let component: RrBalanceAddBalanceComponent;
  let fixture: ComponentFixture<RrBalanceAddBalanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RrBalanceAddBalanceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RrBalanceAddBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
