import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasAddButtAddItemComponent } from './canvas-add-butt-add-item.component';

describe('CanvasAddButtAddItemComponent', () => {
  let component: CanvasAddButtAddItemComponent;
  let fixture: ComponentFixture<CanvasAddButtAddItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CanvasAddButtAddItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CanvasAddButtAddItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
