import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoPendComponent } from './po-pend.component';

describe('PoPendComponent', () => {
  let component: PoPendComponent;
  let fixture: ComponentFixture<PoPendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PoPendComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PoPendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
