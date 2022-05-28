import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../todos/Todo';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css'],
})
export class TodoDetailComponent implements OnInit {
  @Input() todo?: Todo;

  constructor() {}

  ngOnInit(): void {}
}
