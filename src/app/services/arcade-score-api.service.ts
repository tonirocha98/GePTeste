import { DatePipe } from "@angular/common";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ArcadeScoreApiService {
  private apiURL = "http://localhost:49786/api";
  headers = new HttpHeaders({ "Access-Control-Allow-Origin": "*" });

  constructor(private http: HttpClient) {}

  getPoints() {
    const url = `${this.apiURL}/point`;
    return this.http.get(url, { headers: this.headers });
  }

  getStatisticsByPlayer(playerId:any) {
    const url = `${this.apiURL}/point/${playerId}`;
    return this.http.get(url, { headers: this.headers });
  }


  savePoint(point: any) {
    const url = `${this.apiURL}/point`;
    const body = {
      Jogador: point.Jogador,
      Valor: point.Valor,
      Data: point.Data,
    };
    return this.http.post(url, body, { headers: this.headers });
  }

}
