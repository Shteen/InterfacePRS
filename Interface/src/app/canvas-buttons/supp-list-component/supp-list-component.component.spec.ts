import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppListComponentComponent } from './supp-list-component.component';

describe('SuppListComponentComponent', () => {
  let component: SuppListComponentComponent;
  let fixture: ComponentFixture<SuppListComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuppListComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuppListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
