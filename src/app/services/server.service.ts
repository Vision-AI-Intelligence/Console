import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  public endpoint = 'https://server.visionintelligence.ml/v1/';
  constructor() { }
}
