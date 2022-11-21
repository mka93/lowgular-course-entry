import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeService } from '../../services/employee.service';
import { PersonModel } from '../../model/person.model';

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

  remove(id: string) {

    // @ts-ignore
    this._employeeService.delete(id).subscribe({complete: alert('User was successfully removed')});
  }
}
