import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  Title!:string;
  Desc!: string;
  @Output() todoadd: EventEmitter<Todo> = new EventEmitter();

  OnSubmit(){
    const todo={
      Sno:8,
      Title:this.Title,
      Desc:this.Desc,
      Active:true
    }
    this.todoadd.emit(todo);
  }
}
