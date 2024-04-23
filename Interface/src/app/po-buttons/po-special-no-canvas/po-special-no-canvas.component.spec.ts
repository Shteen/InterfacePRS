import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoSpecialNoCanvasComponent } from './po-special-no-canvas.component';

describe('PoSpecialNoCanvasComponent', () => {
  let component: PoSpecialNoCanvasComponent;
  let fixture: ComponentFixture<PoSpecialNoCanvasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PoSpecialNoCanvasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PoSpecialNoCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
