import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class DataService {
  private icons = [
    "flask",
    "wifi",
    "beer",
    "football",
    "basketball",
    "paper-plane",
    "american-football",
    "boat",
    "bluetooth",
    "build"
  ];

  constructor() {
    console.log("DataService/Static:constructor");
  }

  getData() {
    let items = [];

    for (let i = 1; i < 21; i++) {
      items.push({
        title: "Item " + i,
        note: "This is item #" + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }

    return items;
  }
}
