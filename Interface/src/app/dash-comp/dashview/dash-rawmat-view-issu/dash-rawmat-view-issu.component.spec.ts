import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashRawmatViewIssuComponent } from './dash-rawmat-view-issu.component';

describe('DashRawmatViewIssuComponent', () => {
  let component: DashRawmatViewIssuComponent;
  let fixture: ComponentFixture<DashRawmatViewIssuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashRawmatViewIssuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashRawmatViewIssuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
