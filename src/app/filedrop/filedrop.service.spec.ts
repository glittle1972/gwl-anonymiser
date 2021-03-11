import { TestBed } from '@angular/core/testing';

import { FiledropService } from './filedrop.service';

describe('FiledropService', () => {
  let service: FiledropService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FiledropService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
