import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RrDeleteComponent } from './rr-delete.component';

describe('RrDeleteComponent', () => {
  let component: RrDeleteComponent;
  let fixture: ComponentFixture<RrDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RrDeleteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RrDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
