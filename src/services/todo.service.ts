import { Injectable} from '@angular/core';
import { Task } from '../model/task.model';
import firebase from 'firebase';

@Injectable()
export class TodoService{
    tasks:any

    constructor(){
        this.tasks = new Array();
        this.tasks.push(new Task("Mercado","Comprar feijão","priority-low"))
        this.tasks.push(new Task("Padaria","Comprar pão","priority-high"))
        this.tasks.push(new Task("Mercado","Comprar arroz","priority-medium"))

        // Initialize Firebase
        var config = {
            apiKey: "AIzaSyArw0MxGt6VIhRxs_94ZbGJ8GqnO2QGLLE",
            authDomain: "dm122-a163d.firebaseapp.com",
            databaseURL: "https://dm122-a163d.firebaseio.com",
            projectId: "dm122-a163d",
            storageBucket: "dm122-a163d.appspot.com",
            messagingSenderId: "888253233343"
        };
        firebase.initializeApp(config);
    }

    edit(task:Task){
        this.tasks = this.tasks.filter(t => t.getId() != task.getId())
        this.tasks.push(task)
    }

    addTask(task:Task){
        this.tasks.push(task)
    }

    loadTask(){
        return this.tasks
    }

    
    

}