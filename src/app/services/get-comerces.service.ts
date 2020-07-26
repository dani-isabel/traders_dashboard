import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetComercesService {
  private apiRoot:string = 'https://alw-lab.herokuapp.com/commerces';

  constructor(private http: HttpClient) { }
  getApi() {
    return this.http.get(this.apiRoot);
  }
}
