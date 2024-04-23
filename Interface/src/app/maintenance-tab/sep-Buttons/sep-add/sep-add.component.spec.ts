import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SepAddComponent } from './sep-add.component';

describe('SepAddComponent', () => {
  let component: SepAddComponent;
  let fixture: ComponentFixture<SepAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SepAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SepAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
