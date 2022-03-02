import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  // localItem!: string;
  todos:Todo[];
  
  constructor() {

    if( localStorage.getItem("todos") == null ){
      this.todos = [];
    } else{
      this.todos = JSON.parse( localStorage.getItem("todos") || "{}" );
    }
  }

  ngOnInit(): void {
  }

  deleteTodo( todo: Todo ){
    console.log( todo );
    
    const indexOfTodo = this.todos.indexOf( todo );

    this.todos.splice( indexOfTodo, 1 );

    localStorage.setItem( "todos", JSON.stringify( this.todos ) );
    
  }

  addTodo( todo: Todo ){
    console.log(todo);

    this.todos.push( todo );

    localStorage.setItem( "todos", JSON.stringify( this.todos ) );
    
  }

  toggleTodos( todo: Todo ){
    console.log( todo );
    
    const indexOfTodo = this.todos.indexOf( todo );

    this.todos[ indexOfTodo ].active = !this.todos[ indexOfTodo ].active;

    localStorage.setItem( "todos", JSON.stringify( this.todos ) );
  }

}
