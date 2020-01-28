import { TestBed } from '@angular/core/testing';

import { MailmanagerService } from './mailmanager.service';

describe('MailmanagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MailmanagerService = TestBed.get(MailmanagerService);
    expect(service).toBeTruthy();
  });
});
