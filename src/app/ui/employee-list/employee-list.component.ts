import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { EmployeeModel } from '../../model/employee.model';
//import * as url from "url";

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeListComponent {
  //title: string = "Tekst, ktory pojawi sie w HTML";
  // @ts-ignore
  get "https://eqsfaxnghe.cfolks.pl/assets/data/employees.json"() {
    return this["https://eqsfaxnghe.cfolks.pl/assets/data/employees.json"];
  }

  set "https://eqsfaxnghe.cfolks.pl/assets/data/employees.json"(value) {
    this["https://eqsfaxnghe.cfolks.pl/assets/data/employees.json"] = value;
  }
  constructor(private _client: HttpClient) {}
  data$: Observable<EmployeeModel[] | null> = this._client.get<EmployeeModel[]>('assets/data/employees.json');
}
