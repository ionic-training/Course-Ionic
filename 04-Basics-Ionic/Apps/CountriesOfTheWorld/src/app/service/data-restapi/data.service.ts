import { Injectable } from "@angular/core";

import {map} from 'rxjs/operators';
 
import { HttpClient } from "@angular/common/http";

import { Observable, BehaviorSubject } from "rxjs";

import { DataModel } from "../../models/data.model";

@Injectable({
  providedIn: "root"
})
export class DataService {
  // data: Observable<any>;
  data;
  any;

  url = "https://restcountries.eu/rest/v2/all";

  constructor(private http: HttpClient) {
    console.log("DataService/RestAPI:constructor");
  }

  getData(): Observable<DataModel[]> {
    console.log("RestAPIService:getData");

    let result = this.http.get(this.url);
    console.log("DataService:getData:result=" + typeof result);

    this.data = result;

    return this.data;
  }

  getItem(name): DataModel {
    console.log("DataService:getItem:name=" + name);
    console.log("DataService:getItem:data=" + typeof this.data);

    return new DataModel("RESULTxx");
  }

  /*
  getUser() {
    return this.http.get('/api/user')
      .map((res: Response) => res.json().response);
  }
  */
  getRequest() {
    let _prefix='DataService:getRequest';

    this.http.get(this.url, { observe: "response" }).subscribe(
      res => {
        console.log(_prefix + ":res=", res);
        if (res.status == 200) {
          console.log(_prefix + ":body=" + res.body);
          console.log(_prefix + ":type=" + typeof res.body);
          
          console.log(_prefix + ":return = " + { status: res.status, body: res.body });
        } else {
          console.log({ error: res });
        }
      },
      error => {
        console.log("error of " + this.url + ": ", error);
        console.log({error: error});
      }
    );
  }
}
