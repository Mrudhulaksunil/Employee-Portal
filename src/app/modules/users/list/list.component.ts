import { Component, OnInit } from '@angular/core';
import { employeeModel } from '../user.model';
import { EmployeeApiService } from '../services/employee-api.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  allEmployee: any[] = []
  employee: employeeModel = {

  }

  constructor(private api: EmployeeApiService, private toastr: ToastrService, private route: Router) { }
  ngOnInit(): void {
    this.viewEmployeeList()

  }

  addEmployeeData() {
    // alert('hii')
    this.api.addEmployeeData(this.employee).subscribe({
      next: (res: any) => {
        console.log(res);
        this.toastr.success('Employee details added successfully...')
        this.viewEmployeeList()

        setTimeout(() => {
          this.route.navigateByUrl('/dashboard')
        }, 2000)

      }
    })
    // console.log(this.employee);

  }

  viewEmployeeList() {
    this.api.viewEmployeeData().subscribe({
      next: (res: any) => {
        console.log(res);
        this.allEmployee = res


      }
      , error: (err: any) => {
        console.log(err.message);

      }
    })
  }

}
