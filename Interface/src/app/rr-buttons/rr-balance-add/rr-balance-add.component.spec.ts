import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RrBalanceAddComponent } from './rr-balance-add.component';

describe('RrBalanceAddComponent', () => {
  let component: RrBalanceAddComponent;
  let fixture: ComponentFixture<RrBalanceAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RrBalanceAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RrBalanceAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
