import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmployeeService } from '../../services/employee.service';
import {PersonModel} from "../../model/person.model";

@Component({
  selector: 'app-employee-photos',
  templateUrl: './employee-photos.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeePhotosComponent {

  constructor(private _employeeService: EmployeeService) {
  }

  data$: Observable<PersonModel[] | null> = this._employeeService.getAll();
}
