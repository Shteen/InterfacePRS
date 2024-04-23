import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemswButtonsDeleteComponent } from './itemsw-buttons-delete.component';

describe('ItemswButtonsDeleteComponent', () => {
  let component: ItemswButtonsDeleteComponent;
  let fixture: ComponentFixture<ItemswButtonsDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemswButtonsDeleteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItemswButtonsDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
