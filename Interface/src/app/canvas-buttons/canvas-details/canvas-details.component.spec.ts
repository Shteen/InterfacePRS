import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasDetailsComponent } from './canvas-details.component';

describe('CanvasDetailsComponent', () => {
  let component: CanvasDetailsComponent;
  let fixture: ComponentFixture<CanvasDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CanvasDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CanvasDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
