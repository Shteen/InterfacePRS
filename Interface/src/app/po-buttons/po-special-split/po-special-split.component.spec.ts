import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoSpecialSplitComponent } from './po-special-split.component';

describe('PoSpecialSplitComponent', () => {
  let component: PoSpecialSplitComponent;
  let fixture: ComponentFixture<PoSpecialSplitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PoSpecialSplitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PoSpecialSplitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
