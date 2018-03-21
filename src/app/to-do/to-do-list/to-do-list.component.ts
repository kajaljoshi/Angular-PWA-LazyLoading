import { Component, OnInit } from '@angular/core';
import { ToDoService } from '../../services/ToDoService.service';
import {ToDoItem} from '../ToDoItem'
import { Observable } from 'rxjs/Observable';
import { CdateCalenderComponent } from '../../cdate-calender/cdate-calender.component';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  
  ToDoListItems : ToDoItem[];
  ToDoCount : number;
  DateVar : Date;
  constructor(private toDoService : ToDoService) {
  }

  ngOnInit() {
    this.GetToDoListItems();
    this.DateVar = new Date();
    //this.ToDoCount = this.ToDoListItems.length;
  }

  GetToDoListItems(){
    this.toDoService.GetToDoList().subscribe(data => {
        var itemLists = [];
        for(var key in data){
            if(!data.hasOwnProperty(key) || !data[key].hasOwnProperty("Label")){
                continue;
            }
            else{
                itemLists.push(data[key]);
            }
        }
        this.ToDoListItems = itemLists;
    });
  }

  OnDateChange(ChangeDate : Date){
    this.DateVar = ChangeDate;
  }
}
