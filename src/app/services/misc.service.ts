import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class MiscService {
  constructor() { }
  public breadcrum = [];
  public setBreadcrum(path) {
    this.breadcrum = path;
  }

  public getSubstring(originalString: string) {
    if (originalString === undefined || originalString === '' || originalString === null) {
      return;
    }
    if (originalString.length > 14) {
      return originalString.substr(0, 10) + '...';
    }
    return originalString;
  }
}
