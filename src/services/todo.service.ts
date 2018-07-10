import { Injectable} from '@angular/core';
import { Task } from '../model/task.model';
import firebase from 'firebase';

@Injectable()
export class TodoService{
    tasks:any

    //TODO adiciona pedidos no firebase
    constructor(){
        this.tasks = new Array();
        this.tasks.push(new Task("Mercado","Comprar feijão","priority-low"))
        this.tasks.push(new Task("Padaria","Comprar pão","priority-high"))
        this.tasks.push(new Task("Mercado","Comprar arroz","priority-medium"))
    }

    // TODO update on firebase
    edit(task:Task){
        this.tasks = this.tasks.filter(t => t.getId() != task.getId())
        this.tasks.push(task)
    }

    // TODO add to firebase
    addTask(task:Task){
        this.tasks.push(task)
    }

    // TODO return all from firebase
    loadTask(){
        return this.tasks
    }

    
    

}