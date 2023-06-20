import { Component } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent {
  localItem!:string | null ;
  todos: Todo[] = [];
  constructor()
  {
        this.localItem = localStorage.getItem("todos");
        
        if (this.localItem == null)
        {
        this.todos = []
        }
        else{
          this.todos = JSON.parse(this.localItem);
        }

      }
      Deletetodo(todo:Todo)
      {
        console.log(todo);
        const index = this.todos.indexOf(todo);
        this.todos.splice(index,1)
        localStorage.setItem("todos",JSON.stringify(this.todos));
      }
      Addtodo(todo:Todo)
      {
        console.log(todo);
        this.todos.push(todo);
        localStorage.setItem("todos",JSON.stringify(this.todos));
      }
      
      toggeltodo(todo:Todo)
      {
        console.log(todo);
        const index = this.todos.indexOf(todo);
        this.todos[index].Active = !this.todos[index].Active
        localStorage.setItem("todos",JSON.stringify(this.todos));
      }
} 
