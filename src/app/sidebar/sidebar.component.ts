import { Component, OnInit } from '@angular/core';
import {StoreTodoService} from '../store-todo.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private service: StoreTodoService) { }

  getCategories() {
    return this.service.getCategories();
  }

  selectedCategory(category) {
    this.service.selectCategory(category);
  }

  ngOnInit(): void {
  }

}
