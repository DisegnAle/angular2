/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CollectableService } from './collectable.service';

describe('Service: Collectable', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CollectableService]
    });
  });

  it('should ...', inject([CollectableService], (service: CollectableService) => {
    expect(service).toBeTruthy();
  }));
});
