import { TestBed } from '@angular/core/testing';

import { ItemsWService } from './items-w.service';

describe('ItemsWService', () => {
  let service: ItemsWService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemsWService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
