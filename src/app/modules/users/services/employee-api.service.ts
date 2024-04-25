import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { employeeModel } from '../user.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeApiService {

  constructor(private http:HttpClient) { }
  server_url= "http://localhost:3000"


  addEmployeeData(employee:employeeModel){
    return this.http.post(`${this.server_url}/users`,employee)
  }
  viewEmployeeData(){
    return this.http.get(`${this.server_url}/users`)
  }
}
