import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { EmployeeModel } from '../../model/employee.model';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeFormComponent {
  readonly employeeForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    age: new FormControl(null, [Validators.required, Validators.min(20)]),
    salary: new FormControl(null, [Validators.required]),
    mail: new FormControl(null, [Validators.required])
  });

  constructor(private _employeeService: EmployeeService) {


  }

  onFormSubmitted(form: EmployeeModel) {
    // @ts-ignore
    this._employeeService.create(form).subscribe({ complete: alert('User was successfully added to the database.') });
  }

}
