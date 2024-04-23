import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoPendingPreviewComponent } from './po-pending-preview.component';

describe('PoPendingPreviewComponent', () => {
  let component: PoPendingPreviewComponent;
  let fixture: ComponentFixture<PoPendingPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PoPendingPreviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PoPendingPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
