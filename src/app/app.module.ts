import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodolistComponent } from './Mycomponent/todolist/todolist.component';
import { TodoItemComponent } from './Mycomponent/todo-item/todo-item.component';
import { AddTodoComponent } from './Mycomponent/add-todo/add-todo.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './Mycomponent/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    TodoItemComponent,
    AddTodoComponent,
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
