import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './CustomComponents/todos/todos.component';
import { TodoItemComponent } from './CustomComponents/todo-item/todo-item.component';
import { AddTodoItemComponent } from './CustomComponents/add-todo-item/add-todo-item.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './CustomComponents/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoItemComponent,
    AddTodoItemComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
