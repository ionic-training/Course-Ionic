import { DataModel } from "../../models/data.model";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { DataService } from "../../service/data-json/data.service";

@Component({
  selector: "app-list-json-tab-list",
  templateUrl: "list-json.page.html",
  styleUrls: [ "list-json.page.scss" ]
})
export class ListJSONPage implements OnInit {
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
