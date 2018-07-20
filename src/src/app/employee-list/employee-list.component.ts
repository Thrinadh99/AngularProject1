import { Component, OnInit } from '@angular/core';
import { IEmployee } from './../employee';
import { EmployeeService } from './../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit  {

  constructor(private _myService: EmployeeService) { }
  employees
  
  

  ngOnInit() {
    this.employees = this._myService.getEmployees();
  }

}