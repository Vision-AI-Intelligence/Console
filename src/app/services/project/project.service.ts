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

  async GetProjects() {
    try {
      if (this.userAuthentication.idToken === undefined || this.userAuthentication.idToken === null) {
        return;
      }
      return await this.http.get(this.server.endpoint + 'projects', {
        headers: {
          authorization: this.userAuthentication.idToken
        }
      }).toPromise();
    } catch (error) {
      console.log('[GET] project' + error);
    }
  }
  async CreateProject(data: Project) {
    try {
      if (this.userAuthentication.idToken === undefined || this.userAuthentication.idToken === null) {
        return;
      }
      return await this.http.post(this.server.endpoint + 'projects', {
        id: data.id,
        name: data.name,
        description: data.description
      }, {
        headers: {
          authorization: this.userAuthentication.idToken
        }
      }).toPromise();
    } catch (error) {
      console.log('[CREATE] project ' + error);
    }
  }
  async UpdateProject(data: Project) {
    try {
      if (this.userAuthentication.idToken === undefined || this.userAuthentication.idToken === null) {
        return;
      }
      return await this.http.put(this.server.endpoint + 'projects', {
        pid: data.id,
        name: data.name,
        description: data.description
      }, {
        headers: {
          authorization: this.userAuthentication.idToken
        }
      }).toPromise();
    } catch (error) {
      console.log('[UPDATE] project ' + error);
    }
  }

  async DeleteProject(pid: string) {
    try {
      if (this.userAuthentication.idToken === undefined || this.userAuthentication.idToken === null || pid === '' || pid === undefined) {
        return;
      }
      return this.http.delete(this.server.endpoint + 'projects', {
        headers: {
          authorization: this.userAuthentication.idToken
        },
        params: {
          pid
        }
      }).toPromise();
    } catch (error) {
      console.log('[DELETE] project ' + error);
    }
  }
  async CreateInvitation(pid: string, from: string, to: string) {
    try {
      if (this.userAuthentication.idToken === undefined || this.userAuthentication.idToken === null) {
        return;
      }
      return this.http.post(this.server.endpoint + 'projects/invite', {
        pid: pid,
        from: from,
        to: to
      }, {
        headers: {
          authorization: this.userAuthentication.idToken
        }
      }).toPromise();
    } catch (error) {
      console.log('[CREATE] projects/invitation ' + error);
    }
  }
  async DeleteInvitation(pid: string, invitationId: string) {
    try {
      if (this.userAuthentication.idToken === undefined || this.userAuthentication.idToken === null) {
        return;
      }
      return this.http.delete(this.server.endpoint + 'projects/invite', {
        headers: {
          authorization: this.userAuthentication.idToken
        },
        params: {
          pid: pid,
          invitationId: invitationId
        }
      },
      ).toPromise();
    } catch (error) {
      console.log('[DELETE] projects/invitation ' + error);
    }
  }
  async AcceptInvitation(pid: string, invitationId: string) {
    try {
      if (this.userAuthentication.idToken === undefined || this.userAuthentication.idToken === null) {
        return;
      }
      return this.http.post(this.server.endpoint + 'projects/invite', {
        headers: {
          authorization: this.userAuthentication.idToken
        },
        params: {
          pid: pid,
          invitationId: invitationId
        }
      },
      ).toPromise();
    } catch (error) {
      console.log('[ACCEPT] projects/invitation ' + error);
    }
  }
  async GetCollaborators(pid: string) {
    try {
      if (this.userAuthentication.idToken === undefined || this.userAuthentication.idToken === null) {
        return;
      }
      return this.http.get(this.server.endpoint + 'projects/collaborators', {
        headers: {
          authorization: this.userAuthentication.idToken
        }, params: {
          pid: pid
        }
      },
      ).toPromise();
    } catch (error) {
      console.log('[GET] projects/collaborators ' + error);
    }
  }
  async DeleteCollaborators(pid: string, cid: string) {
    try {
      if (this.userAuthentication.idToken === undefined || this.userAuthentication.idToken === null) {
        return;
      }
      return this.http.delete(this.server.endpoint + 'projects/collaborators', {
        headers: {
          authorization: this.userAuthentication.idToken
        }, params: {

        }
      },
      ).toPromise();
    } catch (error) {
      console.log('[GET] projects/collaborators ' + error);
    }
  }
}
