import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemswButtonsAddComponent } from './itemsw-buttons-add.component';

describe('ItemswButtonsAddComponent', () => {
  let component: ItemswButtonsAddComponent;
  let fixture: ComponentFixture<ItemswButtonsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemswButtonsAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItemswButtonsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
