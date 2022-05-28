import { Component, OnInit } from '@angular/core';
import { Todo } from './Todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  data = [
    {
      id: 1,
      title: 'homework',
      body: 'need to complete problem set by sunday',
    },
    { id: 2, title: 'chores', body: 'need to do dishes and vacuum' },
  ];
  todos: Todo[] = [];

  constructor(private todoService: TodoService) {}

  onSubmit(todo: Todo): void {
    this.todos = [...this.todos, todo];
  }

  onClickSubmit(data: any) {
    // alert('Entered Title:' + data.title + 'Entered body:' + data.body);
    const todo: Todo = { id: 1, title: data.title, body: data.body };
    this.addTodo(todo);
  }

  getTodos(): void {
    this.todos = this.todoService.getTodos();
  }

  addTodo(todo: Todo): void {
    this.todos = [...this.todoService.getTodos(), todo];
  }

  ngOnInit(): void {
    this.getTodos();
  }
}
