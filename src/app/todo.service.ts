import { Injectable } from '@angular/core';
import { Todo } from './todos/Todo';
import { TODOS } from './recourses/mock-todos';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor() {}

  getTodos(): Todo[] {
    return TODOS;
  }
}
