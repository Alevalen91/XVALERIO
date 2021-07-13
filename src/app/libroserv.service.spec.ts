import { TestBed } from '@angular/core/testing';

import { LibroservService } from './libroserv.service';

describe('LibroservService', () => {
  let service: LibroservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibroservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
