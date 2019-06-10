import { TestBed } from '@angular/core/testing';

import { PlayerCharacterService } from './player-character.service';

describe('PlayerCharacterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlayerCharacterService = TestBed.get(PlayerCharacterService);
    expect(service).toBeTruthy();
  });
});
