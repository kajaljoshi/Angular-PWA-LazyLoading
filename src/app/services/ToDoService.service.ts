import { Injectable } from '@angular/core';
import { ToDoItem } from '../to-do/ToDoItem';
import { AngularFireDatabase ,AngularFireList ,AngularFireObject} from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ToDoService{
    toDoitemsRef : AngularFireList<any>;
    toDoItem :ToDoItem[];
    constructor(db: AngularFireDatabase,private http: HttpClient) {
        this.toDoitemsRef = db.list('/TodoList');
    }
    
    GetToDoList(){
        return this.http.get('https://todo-pwatest.firebaseio.com/TodoList.json');
    }

     AddToDoItem(newitem : ToDoItem) : void{
        this.toDoitemsRef.push(newitem);
     }
}