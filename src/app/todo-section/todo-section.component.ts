import { Component, OnInit } from '@angular/core';
import { CounterService } from '../data/counter.service';
import { ToDoService } from '../data/todo.service';

@Component({
  selector: 'app-todo-section',
  templateUrl: './todo-section.component.html',
  styleUrls: ['./todo-section.component.css']
})
export class TodoSectionComponent implements OnInit {

  filterAll :boolean = true;
  filterActive :boolean = false;
  filterCompleted:boolean =false;
  counter: number = 0;
  constructor(public todoService:ToDoService, public counterServise:CounterService) {

   }

  ngOnInit(): void {
  }
  filterSelect(elem:HTMLAnchorElement){
    this.todoService.filter = elem.innerHTML;
    elem.classList.add('selected');
    if(this.todoService.filter ==="All"){
      this.filterAll = true;
      this.filterActive = this.filterCompleted = false;
    }else if(this.todoService.filter ==="Active"){
      this.filterActive = true;
      this.filterAll = this.filterCompleted = false;
    }else{
      this.filterCompleted = true;
      this.filterAll = this.filterActive = false;
    }
  }
  clearArray(){
    this.todoService.clearArray();
    this.counterServise.counterClearArray();
  }



}