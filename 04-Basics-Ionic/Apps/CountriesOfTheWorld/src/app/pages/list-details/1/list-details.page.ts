import { Component, OnInit }            from "@angular/core";
import { ActivatedRoute }               from "@angular/router";

import { Observable, BehaviorSubject }  from "rxjs";

import { DataService }                  from "../../../service/data-json/data.service";
import { DataModel }                    from "../../../models/data.model";

@Component({
  selector: "app-list-details",
  templateUrl: "./list-details.page.html",
  styleUrls: ["./list-details.page.scss"]
})
export class ListDetailsPage1 implements OnInit {
  item: DataModel;
  items: Array< {key: string, val: string } > = [];

  flag: string = "";

  constructor(private route: ActivatedRoute, private dataService: DataService) {
    console.log("ListDetailsPage:constructor");
  }

  ngOnInit() {}

  ionViewWillEnter() {
    console.log("ListDetailsPage:ionViewWillEnter");

    let name = this.route.snapshot.paramMap.get("name");
    console.log("ListDetailsPage:ionViewWillEnter:item=", name);

    this.item=this.dataService.getItem(name);

    let keys = Object.keys(this.item);

    keys.forEach(key => {
      let val = this.item[key];

      if (key == "flag") {
        this.flag = val;
      };

      console.log("key=", key, " val=", val);
      this.items.push( { key: key, val: val})
    });
  }
}
