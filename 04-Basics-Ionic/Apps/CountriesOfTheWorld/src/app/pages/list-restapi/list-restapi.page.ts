import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { DataService } from "../../service/data-restapi/data.service";

@Component({
  selector: "app-list",
  templateUrl: "list-restapi.page.html",
  styleUrls: ["list-restapi.page.scss"]
})
export class ListRestAPIPage implements OnInit {
  data: any;

  constructor(public dataService: DataService, public router: Router) {
    console.log("ListRestAPIPage:constructor");

    this.data=dataService.getData();

    dataService.getData().subscribe( data => {
      console.log("ListRestAPIPage:constructor:subscribe:data="), data;
    })
  }

  ngOnInit() {}

  navigate(name) {
    console.log("ListRestAPIPage:navigate:item=", name);

    this.router.navigate(['/list-details/' + name]);
    // this.router.navigateByUrl(`/list-restapi-details/${name}`);
  }
}
