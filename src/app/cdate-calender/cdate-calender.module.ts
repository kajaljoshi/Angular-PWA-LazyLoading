import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdateCalenderComponent } from './cdate-calender.component';
import { CalendarModule} from 'primeng/calendar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    CalendarModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [CdateCalenderComponent],
  exports : [CdateCalenderComponent]
})
export class CdateCalenderModule { }
