import { Component, OnInit } from '@angular/core';
import {PlayerCharacter} from "../../models/PlayerCharacter";
import {PlayerCharacterService} from "../../services/player-character.service";

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {

  players:PlayerCharacter[];

  constructor(private playerCharacterService:PlayerCharacterService) { }

  ngOnInit() {
    this.players = this.playerCharacterService.getPlayers();
  }


}
