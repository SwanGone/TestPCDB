import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PlayerCharacterService {

  constructor(private http:HttpClient) { }

  getPlayers() {
    return [
      {
        id:1,
        name:"Waywocket",
        currentTurn:false
      },
      {
        id:2,
        name:"Denim",
        currentTurn:true
      },
      {
        id:3,
        name:"Strahd",
        currentTurn:false
      }
    ]
  }
}
