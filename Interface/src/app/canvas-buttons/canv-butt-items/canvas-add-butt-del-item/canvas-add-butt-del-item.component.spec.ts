import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasAddButtDelItemComponent } from './canvas-add-butt-del-item.component';

describe('CanvasAddButtDelItemComponent', () => {
  let component: CanvasAddButtDelItemComponent;
  let fixture: ComponentFixture<CanvasAddButtDelItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CanvasAddButtDelItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CanvasAddButtDelItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
