import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable, BehaviorSubject } from "rxjs";

import { DataModel } from "../../models/data.model";

import { map, catchError } from "rxjs/operators";
import { throwError } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class DataService {
  _prefix = "DateService/SQLite";
  _url = "assets/data/restcountries.json";

  data: Observable<DataModel[]>;
  items: DataModel[];

  constructor(private http: HttpClient) {
    console.log(this._prefix +":constructor");

    this.getData();
  }

  getData() {
    this.data = this.http.get<DataModel[]>(this._url);

    this.data.subscribe(data => {
      this.items = data;

      console.log(this._prefix +":getData:subscribe:items=" + this.items.length
      );
    });
    return this.data;
  }

  getItem(name) {
    console.log(this._prefix +":getItem:name=" + name);

    let item = this.items.find(item => item.name === name);
    console.log(this._prefix +":getItem:item=" + item.name);

    return item;
  }
}
