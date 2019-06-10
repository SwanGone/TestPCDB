import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerSlotComponent } from './player-slot.component';

describe('PlayerSlotComponent', () => {
  let component: PlayerSlotComponent;
  let fixture: ComponentFixture<PlayerSlotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerSlotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerSlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
