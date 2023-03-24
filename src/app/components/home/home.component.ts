import { DatePipe } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ArcadeScoreApiService } from "src/app/services/arcade-score-api.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  pointFormGroup = this.fb.group({
    Valor: ["", Validators.required],
    Jogador: ["", Validators.required],
    Data: ["", Validators.required],
  });
  constructor(
    public fb: FormBuilder,
    private arcadeScoreApiService: ArcadeScoreApiService,
    private datePipe: DatePipe
  ) {}

  ngOnInit() {
    this.pointFormGroup.get("Data").setValue(new Date())
  }
  save() {
    console.log(this.pointFormGroup.get("Jogador").value);
    const date = this.datePipe.transform(
      this.pointFormGroup.get("Data").value,
      "dd/MM/yyyy"
    );
    const point = {
      Jogador: this.pointFormGroup.get("Jogador").value,
      Valor: this.pointFormGroup.get("Valor").value as number,
      Data: date,
    };
    console.log(point);
    this.arcadeScoreApiService.savePoint(point).subscribe((response: any) => {
      alert("Adicionado com sucesso")

      console.log(response);
      this.pointFormGroup.reset();
      this.pointFormGroup.get("Data").setValue(new Date())
    });
  }
}
