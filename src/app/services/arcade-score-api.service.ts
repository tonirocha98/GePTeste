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
    console.log(url);
    return this.http.get(url, { headers: this.headers });
  }

  getStatisticsByPlayer(playerId:any) {
    const url = `${this.apiURL}/point/${playerId}`;
    console.log(url);
    return this.http.get(url, { headers: this.headers });
  }


  savePoint(point: any) {
    const url = `${this.apiURL}/point`;
    const body = {
      Jogador: point.Jogador,
      Valor: point.Valor,
      Data: point.Data,
    };
    console.log("url", url);
    console.log("body", body);
    return this.http.post(url, body, { headers: this.headers });
  }

  // getFixture(fixtureId: number) {
  //   // return this.http.get(`${this.apiURL}fixtures?id=${fixtureId}`, {
  //   //   headers: this.headers,
  //   // });

  //   return new Observable((observer) => {
  //     // do something with result.
  //     switch (fixtureId) {
  //       case this.friendlyMatchesPartidaId:
  //         observer.next({ response: this.friendlyMatchesPartidaJson });
  //         // call complete if you want to close this stream (like a promise)
  //         observer.complete();
  //         break;
  //       default:
  //         observer.next({ response: [] });
  //         // call complete if you want to close this stream (like a promise)
  //         observer.complete();
  //         break;
  //     }
  //   });
  // }
}
