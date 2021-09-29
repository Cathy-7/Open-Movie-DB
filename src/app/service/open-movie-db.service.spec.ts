import { TestBed } from '@angular/core/testing';

import { OpenMovieDbService } from './open-movie-db.service';

describe('OpenMovieDbService', () => {
  let service: OpenMovieDbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpenMovieDbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
