import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from '../../models/project.model';
import { ServerService } from '../server.service';
import { UserAuthentication } from '../user/auth.service';
@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(
    private http: HttpClient,
    private server: ServerService,
    private userAuthentication: UserAuthentication
  ) { }

  async getProjects() {
    return await this.http.get(this.server.endpoint + 'projects', {
      headers: {
        authorization: this.userAuthentication.idToken
      }
    }).toPromise();
  }
  async createProject(data: Project) {
    return await this.http.post(this.server.endpoint + 'projects', {
      id: data.pid,
      name: data.name,
      description: data.description
    }, {
      headers: {
        authorization: this.userAuthentication.idToken
      }
    }).toPromise();
  }


}
