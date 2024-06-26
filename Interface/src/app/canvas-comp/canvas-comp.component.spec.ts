import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasCompComponent } from './canvas-comp.component';

describe('CanvasCompComponent', () => {
  let component: CanvasCompComponent;
  let fixture: ComponentFixture<CanvasCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CanvasCompComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CanvasCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
