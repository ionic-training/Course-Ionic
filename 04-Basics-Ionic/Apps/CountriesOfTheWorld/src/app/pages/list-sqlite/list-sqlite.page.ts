import { DataModel } from "../../models/data.model";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { DataService } from "../../service/data-sqlite/data-sqlite.service";

@Component({
  selector: "app-list-sqlite",
  templateUrl: "list-sqlite.page.html",
  styleUrls: [ "list-sqlite.page.scss" ]
})
export class ListSQLitePage implements OnInit {
  public data: Array<DataModel> = [];

  constructor(public dataService: DataService, public router: Router) {
    this.getData();
  }

  ngOnInit() {}

  navigate(name) {
    this.router.navigate(["/list-details/" + name]);
  }

  getData() {
    this.dataService.getData().subscribe(data => {
      this.data = data;
    });
  }
}
