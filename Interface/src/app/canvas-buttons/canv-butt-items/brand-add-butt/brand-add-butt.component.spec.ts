import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandAddButtComponent } from './brand-add-butt.component';

describe('BrandAddButtComponent', () => {
  let component: BrandAddButtComponent;
  let fixture: ComponentFixture<BrandAddButtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrandAddButtComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BrandAddButtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
