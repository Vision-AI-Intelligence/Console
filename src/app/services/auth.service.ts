import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../models/user.model';
import { auth } from 'firebase';
@Injectable({
  providedIn: 'root'
})
export class UserAuthentication {

  user: User;
  private userDetails: any;
  constructor(
    public afAuth: AngularFireAuth,
    public router: Router,
    public snackBar: MatSnackBar,
  ) {
    this.isAuth();
  }

  isLogin$: Observable<any>;
  isLogin = false;
  tempName: string = null;
  private setUser() {
    this.user = {
      ...this.userDetails
    };
  }

  isAuth() {
    this.isLogin$ = this.afAuth.authState;
    this.afAuth.authState.subscribe((usr) => {
      this.isLogin = !(usr === null);
      if (usr !== null) {
        this.userDetails = usr;
        this.setUser();
      }
    });
  }

  async signInWithGoogle() {
    await this.afAuth.signInWithPopup(new auth.GoogleAuthProvider()).then(
      () => {
        this.snackBar.open('Login Successfully', '✔️', {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'bottom'
        });
        this.router.navigate(['home']);
      }, err => {
        this.snackBar.open('Login Failed, Please try it again!!!', '❌', {
          duration: 3000, horizontalPosition: 'center',
          verticalPosition: 'bottom'
        });
      }
    );
    this.userDetails = this.afAuth.currentUser; // kiểm tra xem user nãy subscribe có phải là nó hong
    this.setUser();
  }

  // async signInWithAnonymous(email: string, password: string) {
  //   await this.afAuth.createUserWithEmailAndPassword(email, password).then(() => {
  //     this.snackBar.open('Sign up Successfully', '', { duration: 3000 });
  //     this.router.navigate(['home']);
  //   }, err => {
  //     this.snackBar.open('Sign up Failed, Please try it again!!!', '', { duration: 3000 });
  //   });
  //   this.userDetails = this.user;
  //   this.setUser();
  // }

  async signOut() {
    await this.afAuth.signOut().then(() => {
      this.snackBar.open('OK bye', '😘', {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom'
      });
    });
    this.userDetails = null;
    this.user = null;
    this.router.navigate(['home']);
  }
}
