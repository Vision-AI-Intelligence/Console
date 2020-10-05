import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class MiscService {
  constructor() {}
  public breadcrum = [];
  public setBreadcrum(path) {
    this.breadcrum = path;
  }
}
