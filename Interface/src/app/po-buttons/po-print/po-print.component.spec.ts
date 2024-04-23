import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoPrintComponent } from './po-print.component';

describe('PoPrintComponent', () => {
  let component: PoPrintComponent;
  let fixture: ComponentFixture<PoPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PoPrintComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PoPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
