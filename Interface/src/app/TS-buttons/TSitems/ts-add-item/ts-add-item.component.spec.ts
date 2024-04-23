import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TsAddItemComponent } from './ts-add-item.component';

describe('TsAddItemComponent', () => {
  let component: TsAddItemComponent;
  let fixture: ComponentFixture<TsAddItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TsAddItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TsAddItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
