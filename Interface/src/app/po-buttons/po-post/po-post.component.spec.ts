import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoPostComponent } from './po-post.component';

describe('PoPostComponent', () => {
  let component: PoPostComponent;
  let fixture: ComponentFixture<PoPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PoPostComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PoPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
