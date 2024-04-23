import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RrAddComponent } from './rr-add.component';

describe('RrAddComponent', () => {
  let component: RrAddComponent;
  let fixture: ComponentFixture<RrAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RrAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RrAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
