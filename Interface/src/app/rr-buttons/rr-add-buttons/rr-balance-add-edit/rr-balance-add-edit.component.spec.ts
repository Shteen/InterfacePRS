import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RrBalanceAddEditComponent } from './rr-balance-add-edit.component';

describe('RrBalanceAddEditComponent', () => {
  let component: RrBalanceAddEditComponent;
  let fixture: ComponentFixture<RrBalanceAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RrBalanceAddEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RrBalanceAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
