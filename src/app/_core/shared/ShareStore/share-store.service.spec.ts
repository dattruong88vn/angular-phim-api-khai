import { TestBed } from '@angular/core/testing';

import { ShareStoreService } from './share-store.service';

describe('ShareStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShareStoreService = TestBed.get(ShareStoreService);
    expect(service).toBeTruthy();
  });
});
