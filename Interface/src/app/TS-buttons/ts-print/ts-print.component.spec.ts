import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TSPrintComponent } from './ts-print.component';

describe('TSPrintComponent', () => {
  let component: TSPrintComponent;
  let fixture: ComponentFixture<TSPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TSPrintComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TSPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
