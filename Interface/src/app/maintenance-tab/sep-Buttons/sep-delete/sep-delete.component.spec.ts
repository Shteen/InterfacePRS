import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SepDeleteComponent } from './sep-delete.component';

describe('SepDeleteComponent', () => {
  let component: SepDeleteComponent;
  let fixture: ComponentFixture<SepDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SepDeleteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SepDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
