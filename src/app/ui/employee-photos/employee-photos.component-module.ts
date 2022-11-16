import { NgModule } from '@angular/core';
import { EmployeePhotosComponent } from './employee-photos.component';
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EmployeePhotosComponent],
  providers: [],
  exports: [EmployeePhotosComponent]
})
export class EmployeePhotosComponentModule {
}
