import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasSubmitComponent } from './canvas-submit.component';

describe('CanvasSubmitComponent', () => {
  let component: CanvasSubmitComponent;
  let fixture: ComponentFixture<CanvasSubmitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CanvasSubmitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CanvasSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
