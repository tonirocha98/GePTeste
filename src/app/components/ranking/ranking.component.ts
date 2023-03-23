import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { ArcadeScoreApiService } from "../../services/arcade-score-api.service";

@Component({
  selector: "app-ranking",
  templateUrl: "./ranking.component.html",
  styleUrls: ["./ranking.component.css"],
})
export class RankingComponent implements OnInit {
  idPlayer = 0;
  playerStatistics = {}
  constructor(private arcadeScoreApiService: ArcadeScoreApiService) {}
  points = [];

  ngOnInit() {
    this.arcadeScoreApiService.getPoints().subscribe((response: any[]) => {
      console.log(response);
      this.points = response;
      this.points.sort(function (a, b) {
        return b.Valor - a.Valor;
      });
    });
  }
  showStatistics(playerId = 1) {
    this.idPlayer = playerId;

    this.arcadeScoreApiService.getStatisticsByPlayer(playerId).subscribe((response: any[]) => {
      console.log(response);
      this.playerStatistics = response;

    });
  }
}
