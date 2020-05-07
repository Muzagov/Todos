import { Component, OnInit } from '@angular/core';
import {StoreTodoService} from '../store-todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  constructor(
    private todoStore: StoreTodoService
  ) { }

  isOnlyImportant() {
    return this.todoStore.onlyImportant;
}

  toggleCompleted(id) {
    this.todoStore.toggleCompleted(id);
  }

  toggleImportant(id) {
    this.todoStore.toggleImportant(id);
  }

  removeCompletedItems() {
    this.todoStore.removeCompletedItems();
  }

  getItems() {
    return this.todoStore.getItems();
  }

  toggleOnlyImportant() {
    this.todoStore.toggleOnlyImportant();
  }


  ngOnInit(): void {
  }

}
