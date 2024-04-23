import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RrBalanceAddRemoveComponent } from './rr-balance-add-remove.component';

describe('RrBalanceAddRemoveComponent', () => {
  let component: RrBalanceAddRemoveComponent;
  let fixture: ComponentFixture<RrBalanceAddRemoveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RrBalanceAddRemoveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RrBalanceAddRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
