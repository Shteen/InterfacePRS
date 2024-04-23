import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TsAddItemRepComponent } from './ts-add-item-rep.component';

describe('TsAddItemRepComponent', () => {
  let component: TsAddItemRepComponent;
  let fixture: ComponentFixture<TsAddItemRepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TsAddItemRepComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TsAddItemRepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
