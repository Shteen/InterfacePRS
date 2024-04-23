import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoSendComponent } from './po-send.component';

describe('PoSendComponent', () => {
  let component: PoSendComponent;
  let fixture: ComponentFixture<PoSendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PoSendComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PoSendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
