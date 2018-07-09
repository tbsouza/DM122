import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TodoService } from '../../services/todo.service'
import { Task } from '../../model/task.model'
import { TaskPage } from '../task/task'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tasks:Array<Task>

  constructor(public navCtrl: NavController,
              private todoService: TodoService) {
     this.tasks = this.todoService.loadTask() 
  }

  goToTask(){
      this.navCtrl.push(TaskPage)
  }

  editItem(item:Task){
    this.navCtrl.push(TaskPage, {"taskToEdit": item})
  }

  deleteItem(item){
    //TODO:remover item
  }



}
