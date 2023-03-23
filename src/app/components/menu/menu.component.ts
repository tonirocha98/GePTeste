import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.css"],
})
export class MenuComponent implements OnInit {
  // selectedTab: "point" | "ranking" = "point";
  constructor(private router: Router) {}

  ngOnInit() {
    console.log(this.router.url);
    console.log(window.location.pathname);
    // if (window.location.pathname === "/") this.selectedTab = "point";
    // else this.selectedTab = "ranking";
  }
  goToLink(link: string): void {
    console.log("link", link);
    this.router.navigateByUrl(link);
    // if (link.replace("/", "") === "ranking") this.selectedTab = "ranking";
    // else this.selectedTab = "point";
  }
}
