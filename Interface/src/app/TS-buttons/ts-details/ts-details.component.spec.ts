import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TSDetailsComponent } from './ts-details.component';

describe('TSDetailsComponent', () => {
  let component: TSDetailsComponent;
  let fixture: ComponentFixture<TSDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TSDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TSDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
