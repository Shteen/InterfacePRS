import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemswButtonsEditComponent } from './itemsw-buttons-edit.component';

describe('ItemswButtonsEditComponent', () => {
  let component: ItemswButtonsEditComponent;
  let fixture: ComponentFixture<ItemswButtonsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemswButtonsEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItemswButtonsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
