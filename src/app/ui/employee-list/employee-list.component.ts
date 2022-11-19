import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmployeeService } from '../../services/employee.service';
import {PersonModel} from "../../model/person.model";

//import * as url from "url";

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeListComponent {

  constructor(private _employeeService: EmployeeService) {
  }

  data$: Observable<PersonModel[] | null> = this._employeeService.getAll();
}
