import { Component, OnInit,Input,ContentChild } from '@angular/core';
import { ToDoService } from '../../services/ToDoService.service';
import {ToDoItem} from '../ToDoItem'
import {ToDoListComponent} from '../to-do-list/to-do-list.component'
import { Router } from '@angular/router';

@Component({
  selector: 'app-to-do-create',
  templateUrl: './to-do-create.component.html',
  styleUrls: ['./to-do-create.component.css']
})
export class ToDoCreateComponent implements OnInit {

  NewToDoItem : ToDoItem = new ToDoItem();
  @ContentChild(ToDoListComponent) ListComponent : ToDoListComponent;
  constructor(private toDoService : ToDoService,private router: Router) { }

  ngOnInit() {
    //this.NewToDoItem.Date = new Date().toDateString();
  }

  AddNewToDo(){
    this.toDoService.AddToDoItem(this.NewToDoItem);
    this.NewToDoItem = new ToDoItem();
    this.NewToDoItem.Date = new Date().toDateString();
    this.router.navigateByUrl('/');
  }

  OnDateChange(ChangeDate : Date){
    this.NewToDoItem.Date = ChangeDate.toDateString();
  }

}
