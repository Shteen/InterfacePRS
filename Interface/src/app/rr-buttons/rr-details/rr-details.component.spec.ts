import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RrDetailsComponent } from './rr-details.component';

describe('RrDetailsComponent', () => {
  let component: RrDetailsComponent;
  let fixture: ComponentFixture<RrDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RrDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RrDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
