import { Injectable } from '@angular/core';
import { Bucket } from 'src/app/models/bucket.model';

@Injectable({
  providedIn: 'root'
})
export class BucketService {

  constructor() { }
  async createBucket(data: Bucket) {
    console.log(data);
  }
}
