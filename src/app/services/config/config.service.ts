import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private configUrl: string;

  constructor( private http: HttpClient) {
    this.configUrl = 'assets/config.json'
  }

  getConfig = (): any => {
    return this.http.get(this.configUrl);
  }
}