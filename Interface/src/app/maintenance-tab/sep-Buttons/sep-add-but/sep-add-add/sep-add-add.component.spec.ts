import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SepAddAddComponent } from './sep-add-add.component';

describe('SepAddAddComponent', () => {
  let component: SepAddAddComponent;
  let fixture: ComponentFixture<SepAddAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SepAddAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SepAddAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
