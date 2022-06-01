import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// makes use of observables for all transactions. Must import
// RxJS pbservable and operator symbols. These imports are typical
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { Todo } from './todos/Todo';
import { TODOS } from './recourses/mock-todos';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  baseUrl = 'http://localhost:8080/todos';
  constructor(private http: HttpClient) {}

  getTodos(): Observable<any> {
    return this.http.get<any>(this.baseUrl);
    // return TODOS;
  }

  addTodo(todo: Todo): Observable<any> {
    return this.http.post<any>(this.baseUrl, todo);
    // return TODOS;
  }
}
