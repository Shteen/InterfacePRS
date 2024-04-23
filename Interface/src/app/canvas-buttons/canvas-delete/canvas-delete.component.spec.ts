import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasDeleteComponent } from './canvas-delete.component';

describe('CanvasDeleteComponent', () => {
  let component: CanvasDeleteComponent;
  let fixture: ComponentFixture<CanvasDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CanvasDeleteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CanvasDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
