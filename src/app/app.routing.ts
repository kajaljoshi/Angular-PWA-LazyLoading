import { ModuleWithProviders } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { AppComponent } from './app.component';
import {ToDoListComponent} from './to-do/to-do-list/to-do-list.component'

const AppRoutes: Routes = [
    { path: '', component: ToDoListComponent  },
    //{ path: 'ToDoList', component: ToDoListComponent },
    { path: 'ToDoCreate', loadChildren: './to-do/to-do-create/to-do-create.module#ToDoModule' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(AppRoutes);