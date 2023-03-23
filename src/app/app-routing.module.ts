import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { RankingComponent } from "./components/ranking/ranking.component";

const routes: Routes = [
  { path: "add", component: HomeComponent },
  { path: "ranking", component: RankingComponent },
  { path : "**", redirectTo:"ranking"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
