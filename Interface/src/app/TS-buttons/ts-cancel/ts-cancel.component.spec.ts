import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TSCancelComponent } from './ts-cancel.component';

describe('TSCancelComponent', () => {
  let component: TSCancelComponent;
  let fixture: ComponentFixture<TSCancelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TSCancelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TSCancelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
