import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoSpecialReplenishComponent } from './po-special-replenish.component';

describe('PoSpecialReplenishComponent', () => {
  let component: PoSpecialReplenishComponent;
  let fixture: ComponentFixture<PoSpecialReplenishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PoSpecialReplenishComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PoSpecialReplenishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
