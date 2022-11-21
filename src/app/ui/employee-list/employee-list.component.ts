import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeService } from '../../services/employee.service';
import { EmployeeModel } from '../../model/employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeListComponent {
  constructor(private _employeeService: EmployeeService) {
  }

  data$: Observable<EmployeeModel[] | null> = this._employeeService.getAll();

  remove(id: string) {
    // @ts-ignore
    this._employeeService.delete(id).subscribe({complete: alert('User was successfully removed')});
  }
}
