import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TsDelItemComponent } from './ts-del-item.component';

describe('TsDelItemComponent', () => {
  let component: TsDelItemComponent;
  let fixture: ComponentFixture<TsDelItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TsDelItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TsDelItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
