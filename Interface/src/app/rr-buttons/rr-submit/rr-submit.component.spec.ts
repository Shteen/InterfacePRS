import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RrSubmitComponent } from './rr-submit.component';

describe('RrSubmitComponent', () => {
  let component: RrSubmitComponent;
  let fixture: ComponentFixture<RrSubmitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RrSubmitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RrSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
