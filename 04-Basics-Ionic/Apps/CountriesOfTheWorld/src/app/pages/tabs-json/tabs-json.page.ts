import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-list-json",
  templateUrl: "list-json.html",
  styleUrls: ["list-json.scss"]
})
export class TabsJSONPage implements OnInit {
  constructor() {
    console.log("ListJSONPage:constructor");
  }

  ngOnInit() {}
}
