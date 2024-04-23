import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoApproveComponent } from './po-approve.component';

describe('PoApproveComponent', () => {
  let component: PoApproveComponent;
  let fixture: ComponentFixture<PoApproveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PoApproveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PoApproveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
