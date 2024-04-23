import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemswButtonsPrintComponent } from './itemsw-buttons-print.component';

describe('ItemswButtonsPrintComponent', () => {
  let component: ItemswButtonsPrintComponent;
  let fixture: ComponentFixture<ItemswButtonsPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemswButtonsPrintComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItemswButtonsPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
