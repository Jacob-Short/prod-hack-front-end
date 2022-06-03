import { Component, OnInit } from '@angular/core';
import { Todo } from './Todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];
  title: string = 'homework';
  body: string = 'mat-136 problem set by sunday night';

  constructor(private todoService: TodoService) {}

  onClickSubmit(data: any) {
    // alert('Entered Title:' + data.title + 'Entered body:' + data.body);
    const todo: Todo = { title: data.title, body: data.body };
    this.addTodo(todo);
  }

  getTodos(): void {
    this.todoService.getTodos().subscribe((res) => {
      this.todos = res;
    });
  }

  addTodo(todo: Todo): void {
    this.todoService.addTodo(todo).subscribe((res) => {
      this.getTodos();
    });
  }

  ngOnInit(): void {
    this.getTodos();
  }
}
