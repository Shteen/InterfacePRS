import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RrEditComponent } from './rr-edit.component';

describe('RrEditComponent', () => {
  let component: RrEditComponent;
  let fixture: ComponentFixture<RrEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RrEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RrEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
