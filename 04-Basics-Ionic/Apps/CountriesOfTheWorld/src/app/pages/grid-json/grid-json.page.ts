import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { DataService }  from "../../service/data-json/data.service";
import { DataModel }    from "../../models/data.model";

@Component({
  selector: "app-list-json-tab-grid",
  templateUrl: "grid-json.page.html",
  styleUrls: ["grid-json.page.scss"]
})
export class GridJSONPage implements OnInit {
  public data: Array<DataModel> = [];

  constructor(public dataService: DataService, public router: Router) {
    this.getData();
  }

  ngOnInit() {}

  navigate(item) {
    let _prefix='ListJSONPageTabGrid:navigate';

    /*
    let keys = Object.keys(item);

    keys.forEach(key => {
      console.log(key, item[key]);
    });
    */

    console.log(_prefix + ":item.name=", item.name);
    this.router.navigate(["/list-details/" + item.name]);

    // this.router.navigate(["/list-details", { item: item }]);
}

  getData() {
    this.dataService.getData().subscribe(data => {
      this.data = data;
    });
  }
}
