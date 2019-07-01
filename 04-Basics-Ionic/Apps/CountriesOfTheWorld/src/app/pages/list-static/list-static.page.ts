import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { DataService } from "../../service/data-static/data.service";

@Component({
  selector: "app-page-list-static",
  templateUrl: "list-static.page.html",
  styleUrls: ["list-static.page.scss"]
})
export class ListStaticPage implements OnInit {
  private selectedItem: any;

  public items: Array<{ title: string; note: string; icon: string }> = [];

  constructor(public data: DataService, public router: Router) {
    console.log("ListStaticPage:constructor");

    this.items = data.getData();
  }

  ngOnInit() {}

  navigate(item) {
    this.router.navigate(["/list-static", JSON.stringify(item)]);
  }
}
