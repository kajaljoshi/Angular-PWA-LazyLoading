import { Component, OnInit,Input,Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'cdate-calender',
  templateUrl: './cdate-calender.component.html',
  styleUrls: ['./cdate-calender.component.css']
})
export class CdateCalenderComponent implements OnInit {
  @Input('DateModel') DateVar: Date;
  @Input('MinDate') MinDate : Date;
  @Output() DateChange  = new EventEmitter<Date>();

  constructor() { }

  ngOnInit() {
    
  }

  OnChangeSelectedDate() {
    this.DateChange.emit(this.DateVar);
  }

}
