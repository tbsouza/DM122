import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Task } from '../../model/task.model'
import { TodoService } from '../../services/todo.service'
import { Priority} from '../../model/priority.model'
import { HomePage } from '../home/home'

@IonicPage()
@Component({
  selector: 'page-task',
  templateUrl: 'task.html',
})
export class TaskPage {
  task:Task;
  selectedPriority:string;
  priorities = ["Urgente","Média","Baixa"]
  isEdit = false

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private todoService:TodoService) {
    
    this.task = this.navParams.get("taskToEdit");

    if (this.task && this.task.getId()) {
      this.setPriority(this.task.getPriority())
      this.isEdit = true;
    } else {
      this.task = new Task("","",Priority["Baixa"])
    }
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TaskPage');
  }

  salvar(){
    this.task.setPriority(Priority[this.selectedPriority])
    if(this.isEdit)
        this.todoService.edit(this.task)
    else
        this.todoService.addTask(this.task)
    
      //go to home
    this.navCtrl.push(HomePage)
  }

  private setPriority(valuePriority:string){
      this.priorities.forEach(
        element => {
          if(Priority[element] === valuePriority){
            return this.selectedPriority = element
          }
        }
      )

      return ""
  }

}
