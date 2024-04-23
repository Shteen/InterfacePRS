import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RrBalanceAddAddComponent } from './rr-balance-add-add.component';

describe('RrBalanceAddAddComponent', () => {
  let component: RrBalanceAddAddComponent;
  let fixture: ComponentFixture<RrBalanceAddAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RrBalanceAddAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RrBalanceAddAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
