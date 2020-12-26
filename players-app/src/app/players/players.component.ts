import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { PlayersService } from "../players.service";

@Component({
  selector: "app-players",
  templateUrl: "./players.component.html",
  styleUrls: ["./players.component.css"],
})
export class PlayersComponent implements OnInit {
  constructor(private playesService: PlayersService) {}
  players: Observable<any>;
  ngOnInit(): void {
    this.players = this.playesService.getPlayers();
  }
}
