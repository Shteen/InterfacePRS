import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SepEditComponent } from './sep-edit.component';

describe('SepEditComponent', () => {
  let component: SepEditComponent;
  let fixture: ComponentFixture<SepEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SepEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SepEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
