import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TSPostComponent } from './ts-post.component';

describe('TSPostComponent', () => {
  let component: TSPostComponent;
  let fixture: ComponentFixture<TSPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TSPostComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TSPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
