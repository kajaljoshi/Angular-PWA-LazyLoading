//import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {ToDoListComponent} from './to-do/to-do-list/to-do-list.component'
import {ToDoCreateComponent} from './to-do/to-do-create/to-do-create.component'
import { ToDoService } from './services/ToDoService.service';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { HttpClientModule } from '@angular/common/http';
import { routing } from './app.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CdateCalenderModule } from './cdate-calender/cdate-calender.module';
import { DateFilterPipe } from './Pipes/DateFilter.pipe'

@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    DateFilterPipe
  ],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    routing,
    FormsModule,
    ReactiveFormsModule,
    CdateCalenderModule
  ],
  providers: [ToDoService,HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
