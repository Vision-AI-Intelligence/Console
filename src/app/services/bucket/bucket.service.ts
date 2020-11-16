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
  async getFilesNFoldersFromDirectory(projectId: string, bucketId: string, directory: string) {
    try {
      return await this.http.get(this.server.endpoint + 'bucket', {
        headers: {
          authorization: this.userAuthentication.idToken
        },
        params: {
          pid: projectId,
          bid: bucketId,
          d: directory
        }
      }).toPromise();
    } catch (e) {
      console.log('[GET] bucket -> files n folders ' + e);
    }
  }

  // check file's | folder's information
  async getMetadataFromFileOrFolder(projectId: string, bucketId: string, nameOfItem: string) {
    try {
      return await this.http.get(this.server.endpoint + 'bucket/metadata', {
        headers: {
          authorization: this.userAuthentication.idToken
        },
        params: {
          pid: projectId,
          bid: bucketId,
          f: nameOfItem
        }
      }).toPromise();
    } catch (error) {
      console.log('[GET] bucket -> metadata' + error);
    }
  }

  // view config of bucket
  async getBucketOptions(projectId: string, bucketId: string) {
    try {
      return await this.http.get(this.server.endpoint + 'bucket/options', {
        headers: {
          authorization: this.userAuthentication.idToken
        },
        params: {
          pid: projectId,
          bid: bucketId
        }
      }).toPromise();
    } catch (error) {
      console.log('[GET] bucket -> options ' + error);
    }
  }

  // modify bucket's options
  async modifyBucketOptions(projectId: string, bucketId: string, opts: Array<any>) {
    try {
      return await this.http.post(this.server.endpoint + 'bucket/options', {
        pid: projectId,
        bid: bucketId,
        options: opts
      }, {
        headers: {
          authorization: this.userAuthentication.idToken
        }
      }).toPromise();
    } catch (error) {
      console.log('[UPDATE] bucket -> options ' + error);
    }
  }
  async uploadFile(file: FormData, projectId: string, bucketId: string, directory: string) {
    try {
      return await this.http.post(this.server.endpoint + 'bucket/upload', file, {
        headers: {
          authorization: this.userAuthentication.idToken
        },
        params: {
          pid: projectId,
          bid: bucketId,
          d: directory
        }
      }).toPromise();
    } catch (error) {
      console.log('[POST] bucket -> upload file ' + error);
    }
  }

  async makeNewDirectory(projectId: string, bucketId: string, directoryName: string, currentDirectory: string) {
    try {
      return this.http.post(this.server.endpoint + 'bucket/mkdir', {
        pid: projectId,
        bid: bucketId,
        dir: directoryName,
        d: currentDirectory
      }, {
        headers: {
          authorization: this.userAuthentication.idToken
        }
      }).toPromise();
    } catch (error) {
      console.log('[POST] bucket -> make new dir ' + error);
    }
  }
  async moveFileOrDirectory(projectId: string, bucketId: string, source: string, destination: string) {
    try {
      return await this.http.put(this.server.endpoint + 'bucket/mv', {
        pid: projectId,
        bid: bucketId,
        src: source,
        des: destination
      }, {
        headers: {
          authorization: this.userAuthentication.idToken
        }
      }).toPromise();
    } catch (error) {
      console.log('[PUT] bucket -> move file|dir ' + error);
    }
  }
  async copyFileOrDirectory(projectId: string, bucketId: string, source: string, destination: string) {
    try {
      return await this.http.put(this.server.endpoint + 'bucket/cp', {
        pid: projectId,
        bid: bucketId,
        src: source,
        des: destination
      }, {
        headers: {
          authorization: this.userAuthentication.idToken
        }
      }).toPromise();
    } catch (error) {
      console.log('[PUT] bucket -> copy file|directory ' + error);
    }
  }
  async removeFileOrDirectory(projectId: string, bucketId: string, directory: string) {
    try {
      return await this.http.put(this.server.endpoint + 'bucket/rm', {
        pid: projectId,
        bid: bucketId,
        d: directory,
      }, {
        headers: {
          authorization: this.userAuthentication.idToken
        }
      }).toPromise();
    } catch (error) {
      console.log('[PUT] bucket -> remove file|directory ' + error);
    }
  }
  async downloadFileOrDirectory(projectId: string, bucketId: string, file: string) {
    try {
      return await this.http.get(this.server.endpoint + 'bucket/download', {
        headers: {
          authorization: this.userAuthentication.idToken
        },
        params: {
          pid: projectId,
          bid: bucketId,
          f: file
        }
      }).toPromise();
    } catch (error) {
      console.log('[PUT] bucket -> download file|directory ' + error);
    }
  }

  async getListOfJobs(projectId: string) {
    try {
      return await this.http.get(this.server.endpoint + 'bucket/jobs', {
        headers: {
          authorization: this.userAuthentication.idToken
        },
        params: {
          pid: projectId
        }
      }).toPromise();
    } catch (error) {
      console.log('[GET] bucket -> get list of jobs ' + error);
    }
  }

  async zipFilesOrFolders(projectId: string, bucketId: string, source: string, destination: string) {
    try {
      return await this.http.put(this.server.endpoint + 'bucket/zip', {
        pid: projectId,
        bid: bucketId,
        src: source,
        des: destination
      }, {
        headers: {
          authorization: this.userAuthentication.idToken
        }
      }).toPromise();
    } catch (error) {
      console.log('[PUT] bucket -> zip files|folders ' + error);
    }
  }

  async unzipFilesOrFolders(projectId: string, bucketId: string, source: string, destination: string) {
    try {
      return await this.http.put(this.server.endpoint + 'bucket/unzip', {
        pid: projectId,
        bid: bucketId,
        src: source,
        des: destination
      }, {
        headers: {
          authorization: this.userAuthentication.idToken
        }
      }).toPromise();
    } catch (error) {
      console.log('[PUT] bucket -> unzip files|folders ' + error);
    }
  }

  // current not available
  async downloadJob(projectId: string, bucketId: string, urlOfSource: string, destination: string) {
    try {
    } catch (error) {
      console.log('[]');
    }
  }
}
