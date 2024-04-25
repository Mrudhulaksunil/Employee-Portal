import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  server_url= "http://localhost:3000"
  Authenticate(){
    return this.http.get(`${this.server_url}/users/1`)
  }
}
