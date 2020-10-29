import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from '../../models/project.model';
import { ServerService } from '../server.service';
import { UserAuthentication } from '../user/auth.service';
@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  public pid: string;
  public pInfo: any;
  constructor(
    private http: HttpClient,
    private server: ServerService,
    private userAuthentication: UserAuthentication
  ) {
    // console.log(this.pInfo);
  }

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

  async GetProjectsCollaborated() {
    try {
      if (this.userAuthentication.idToken === undefined || this.userAuthentication.idToken === null) {
        return;
      }
      return await this.http.get(this.server.endpoint + 'projects/accept', {
        headers: {
          authorization: this.userAuthentication.idToken
        },
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
  async GetInvitation(projectId: string) {
    try {
      if (this.userAuthentication.idToken === undefined || this.userAuthentication.idToken === null) {
        return;
      }
      return this.http.get(this.server.endpoint + 'projects/invite', {
        headers: {
          authorization: this.userAuthentication.idToken
        },
        params: {
          pid: projectId
        }
      }).toPromise();
    } catch (error) {
      console.log('[GET] projects/invitation ' + error);
    }
  }
  async CreateInvitation(projectId: string, fromId: string, toId: string) {
    try {
      if (this.userAuthentication.idToken === undefined || this.userAuthentication.idToken === null) {
        return;
      }
      return this.http.post(this.server.endpoint + 'projects/invite', {
        pid: projectId,
        from: fromId,
        to: toId
      }, {
        headers: {
          authorization: this.userAuthentication.idToken
        }
      }).toPromise();
    } catch (error) {
      console.log('[CREATE] projects/invitation ' + error);
    }
  }
  async DeleteInvitation(projectId: string, iId: string) {
    try {
      if (this.userAuthentication.idToken === undefined || this.userAuthentication.idToken === null) {
        return;
      }
      return this.http.delete(this.server.endpoint + 'projects/invite', {
        headers: {
          authorization: this.userAuthentication.idToken
        },
        params: {
          pid: projectId,
          invitationId: iId
        }
      },
      ).toPromise();
    } catch (error) {
      console.log('[DELETE] projects/invitation ' + error);
    }
  }
  async AcceptInvitation(projectId: string, iId: string) {
    try {
      if (this.userAuthentication.idToken === undefined || this.userAuthentication.idToken === null) {
        return;
      }
      return this.http.post(this.server.endpoint + 'projects/invite/accept', {
        pid: projectId,
        invitationId: iId
      }, {
        headers: {
          authorization: this.userAuthentication.idToken
        }
      }
      ).toPromise();
    } catch (error) {
      console.log('[ACCEPT] projects/invitation ' + error);
    }
  }
  async GetCollaborators(projectId: string) {
    try {
      if (this.userAuthentication.idToken === undefined || this.userAuthentication.idToken === null) {
        return;
      }
      return this.http.get(this.server.endpoint + 'projects/collaborators', {
        headers: {
          authorization: this.userAuthentication.idToken
        }, params: {
          pid: projectId
        }
      },
      ).toPromise();
    } catch (error) {
      console.log('[GET] projects/collaborators ' + error);
    }
  }
  async DeleteCollaborators(projectId: string, collabId: string) {
    try {
      if (this.userAuthentication.idToken === undefined || this.userAuthentication.idToken === null) {
        return;
      }
      return this.http.delete(this.server.endpoint + 'projects/collaborators', {
        headers: {
          authorization: this.userAuthentication.idToken
        }, params: {
          pid: projectId,
          cid: collabId
        }
      },
      ).toPromise();
    } catch (error) {
      console.log('[GET] projects/collaborators ' + error);
    }
  }
}
