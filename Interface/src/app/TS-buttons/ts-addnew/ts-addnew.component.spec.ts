import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TSAddnewComponent } from './ts-addnew.component';

describe('TSAddnewComponent', () => {
  let component: TSAddnewComponent;
  let fixture: ComponentFixture<TSAddnewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TSAddnewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TSAddnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
