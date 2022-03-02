import { Input, Output, EventEmitter } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo!: Todo;
  @Input() i!: number;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCompleted: EventEmitter<Todo> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onClick( todo: Todo ){
    this.todoDelete.emit( todo );
    console.log("OnClick called !!!");
  }

  onCompletedClick( todo: Todo ){
    this.todoCompleted.emit( todo );
    console.log( todo );
    
  }
}
