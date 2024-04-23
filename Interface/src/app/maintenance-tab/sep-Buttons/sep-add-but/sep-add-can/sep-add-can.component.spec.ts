import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SepAddCanComponent } from './sep-add-can.component';

describe('SepAddCanComponent', () => {
  let component: SepAddCanComponent;
  let fixture: ComponentFixture<SepAddCanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SepAddCanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SepAddCanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
