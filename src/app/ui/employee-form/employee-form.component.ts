import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { CreateEmployeeModel } from '../../model/create-employee.model';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeFormComponent {

  readonly employeeForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    age: new FormControl(null, [Validators.min(18), Validators.required]),
    salary: new FormControl(null, [Validators.required])
  });

  constructor(private _employeeService: EmployeeService) {
  }

  /*onEmployeeFormSubmitted(employeeForm: FormGroup): void {
  alert('User was successfully added to the database. Email: ' + employeeForm.value.name + ', age: ' + employeeForm.value.age + ', salary: ' + employeeForm.value.salary);
  }*/

  onFormSubmitted(form: CreateEmployeeModel) {
    // @ts-ignore
    this._employeeService.create(form).subscribe({complete: alert('User was successfully added to the database. Name: ' + form.name + ', age: ' + form.age + ', salary: ' + form.salary)});
  }
}
