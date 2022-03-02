import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'add-todo-item',
  templateUrl: './add-todo-item.component.html',
  styleUrls: ['./add-todo-item.component.css']
})
export class AddTodoItemComponent implements OnInit {
  
  title!: string;  
  description!: string;

  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    const todo = {
      sno: 1,
      title: this.title,
      description: this.description,
      active: true  
    };

    this.todoAdd.emit( todo );
  }

}
