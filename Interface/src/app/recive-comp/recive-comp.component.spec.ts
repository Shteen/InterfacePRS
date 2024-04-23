import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReciveCompComponent } from './recive-comp.component';

describe('ReciveCompComponent', () => {
  let component: ReciveCompComponent;
  let fixture: ComponentFixture<ReciveCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReciveCompComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReciveCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
