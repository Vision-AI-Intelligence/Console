import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bucket } from 'src/app/models/bucket.model';
import { ServerService } from '../server.service';
import { UserAuthentication } from '../user/auth.service';

@Injectable({
  providedIn: 'root'
})
export class BucketService {

  constructor(
    private http: HttpClient,
    private server: ServerService,
    private userAuthentication: UserAuthentication
  ) { }
  async createBucket(data: Bucket) {
  }
  async getBucket(projectId: string) {
    try {
      if (this.userAuthentication.idToken === undefined || this.userAuthentication.idToken === null) {
        return;
      }
      return await this.http.get(this.server.endpoint + 'bucket/list', {
        headers: {
          authorization: this.userAuthentication.idToken
        },
        params: {
          pid: projectId
        }
      }).toPromise();
    } catch (error) {
      console.log('[CREATE] project ' + error);
    }
  }
}
