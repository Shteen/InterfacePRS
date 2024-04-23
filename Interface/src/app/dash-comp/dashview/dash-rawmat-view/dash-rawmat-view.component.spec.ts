import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashRawmatViewComponent } from './dash-rawmat-view.component';

describe('DashRawmatViewComponent', () => {
  let component: DashRawmatViewComponent;
  let fixture: ComponentFixture<DashRawmatViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashRawmatViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashRawmatViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
