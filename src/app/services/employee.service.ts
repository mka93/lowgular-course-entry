import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, Observable} from 'rxjs';
import { EmployeeModel } from '../model/employee.model';
import { ApiResponse } from './api.response';
import {EmployeeResponse} from "./employee.response";


@Injectable()
export class EmployeeService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<EmployeeModel[]> {
    return this._httpClient.get<ApiResponse<EmployeeResponse[]>>('https://dummy.restapiexample.com/api/v1/employees').pipe(
      map((response: ApiResponse<EmployeeResponse[]>) => {
        return response.data.map((employeeResponse: EmployeeResponse) => {
          return {
            name: employeeResponse.employee_name,
            id: employeeResponse.id,
            salary: employeeResponse.employee_salary,
            age: employeeResponse.employee_age,
            image: employeeResponse.profile_image,
          }
        });
      })
    )
  }
}
