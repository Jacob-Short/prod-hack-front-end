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

  constructor(private todoService: TodoService) {}

  onClickSubmit(data: any) {
    // alert('Entered Title:' + data.title + 'Entered body:' + data.body);
    const todo: Todo = { id: 1, title: data.title, body: data.body };
    this.addTodo(todo);
  }

  getTodos(): void {
    this.todoService.getTodos().subscribe((res) => {
      this.todos = res;
    });
  }

  addTodo(todo: Todo): void {
    this.todoService.addTodo(todo).subscribe((res) => {
      console.log(res);
    });
  }

  ngOnInit(): void {
    this.getTodos();
  }
}
