import { Component, OnInit, Input } from '@angular/core';
import {PlayerCharacter} from "../../models/PlayerCharacter";

@Component({
  selector: 'app-player-slot',
  templateUrl: './player-slot.component.html',
  styleUrls: ['./player-slot.component.scss']
})
export class PlayerSlotComponent implements OnInit {

  @Input() player: PlayerCharacter;


  constructor() { }

  ngOnInit() {
  }

  //Set dynamic classes

  setClasses() {
    let classes = {
      player: true,
      "is-current-turn": this.player.currentTurn
    }

    return classes;
  }

}
