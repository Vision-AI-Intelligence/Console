import { Injectable } from "@angular/core";
import { AngularFireAuth } from '@angular/fire/auth';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: "root",
})
export class MiscService {
  constructor(
    public snackBar: MatSnackBar,
    private afAuth: AngularFireAuth
  ) { }
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
  public showSnackbarSuccessful(val: string): void {
    this.snackBar.open(`${val} Successfully`, '✔️', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
  }
  public showSnackbarFail(val: string): void {
    this.snackBar.open(`${val} Failed, Please try it again!!!`, '❌', {
      duration: 3000, horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
  }
  public showSnackbarNotification(val: string): void {
    this.snackBar.open(`${val}`, '⚠️', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
  }
  async showSnackbarLogout() {
    await this.afAuth.signOut().then(() => {
      this.snackBar.open('OK bye', '😘', {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom'
      });
    });
  }
}
