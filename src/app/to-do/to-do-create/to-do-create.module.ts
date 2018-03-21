import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDoCreateComponent } from './to-do-create.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgDatepickerModule } from 'ng2-datepicker';
import { CdateCalenderModule } from '../../cdate-calender/cdate-calender.module';


const routes: Routes = [
  { path: '', component: ToDoCreateComponent }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    NgDatepickerModule,
    CdateCalenderModule
  ],
  declarations: [
    ToDoCreateComponent
  ]
})
export class ToDoModule { }
