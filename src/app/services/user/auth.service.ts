import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../../models/user.model';
import { auth } from 'firebase';
import * as firebase from 'firebase';
import { HttpClient } from '@angular/common/http';
import { ServerService } from '../server.service';
@Injectable({
  providedIn: 'root'
})
export class UserAuthentication {

  user: User;
  private userDetails: any;

  public idToken: string;
  constructor(
    public afAuth: AngularFireAuth,
    public router: Router,
    public snackBar: MatSnackBar,
    public http: HttpClient,
    private server: ServerService,
  ) {
    this.isAuth();
    this.idToken$ = this.afAuth.idToken;
    this.afAuth.idToken.subscribe((value) => {
      this.idToken = value;
    });

  }

  isLogin$: Observable<any>;
  isLogin = false;
  tempName: string = null;
  idToken$: Observable<any>;

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
    try {
      const credential = await this.afAuth.signInWithPopup(new auth.GoogleAuthProvider());
      this.idToken = await credential.user.getIdToken();
      if (this.idToken.length < 1) {
        this.snackBar.open('Login Failed, Please try it again!!!', '❌', {
          duration: 3000, horizontalPosition: 'center',
          verticalPosition: 'bottom'
        });
      }

      setTimeout(
        async () => {
          // console.log(this.idToken);
          try {
            const result = await this.http.post(this.server.endpoint + 'users', {}, {
              headers: {
                authorization: this.idToken
              }
            }).toPromise();
          } catch (err) {
            if (err.status === 500) {
              console.log(err);
              return;
            }
          }
          this.snackBar.open('Login Successfully', '✔️', {
            duration: 3000,
            horizontalPosition: 'center',
            verticalPosition: 'bottom'
          });
          console.log(this.idToken);
          this.router.navigate(['home']);

          this.userDetails = this.afAuth.currentUser; // kiểm tra xem user nãy subscribe có phải là nó hong
          console.log(this.userDetails);
          this.setUser();
        }, 3000
      );
    } catch (error) {
      this.snackBar.open('Login Failed, Please try it again!!!', '❌', {
        duration: 3000, horizontalPosition: 'center',
        verticalPosition: 'bottom'
      });
    }

  }

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
    this.idToken = '';
    this.router.navigate(['home']);
  }

  // xây dựng sẵn cho việc get một user bất kỳ bằng email
  async getUserRandom() {
    return await this.http.get(this.server.endpoint + 'users', {
      headers: {
        authorization: this.idToken
      }
    }).toPromise();
  }
  result: any;
  // search một user với keyword
  async searchUser(keyword: string) {
    console.log(keyword);
    console.log(this.idToken);
    return await this.http.get(this.server.endpoint + 'users/listing?keyword=' + keyword, {
      headers: {
        authorization: this.idToken
      },
    }).toPromise();
  }

  async getUserInfo(uid: string) {
    return await this.http.get(this.server.endpoint + 'users/info?uid=' + uid, {
      headers: {
        authorization: this.idToken
      }
    }).toPromise();
  }
}
