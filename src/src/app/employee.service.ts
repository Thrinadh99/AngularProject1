import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';


@Injectable()
export class EmployeeService {

  url: string = 'assets/employees.json'
  constructor(private http: HttpClient, route: ActivatedRoute) { }

  getEmployees() {
    return [
    {id: 1, name: 'Rahul', designation: 'Software Engineer', gender: 'Male', company: 'TechM', annualSalary: 600000},
    {id: 2, name: 'Thrinadh', designation: 'Software Engineer', gender: 'Male', company: 'TechM', annualSalary: 550000}
  ];
  }

}