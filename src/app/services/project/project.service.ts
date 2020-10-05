import { Injectable } from '@angular/core';
import { Project } from '../../models/project.model';
@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }

  async createProject(data: Project) {
    console.log(data);
  }
}
