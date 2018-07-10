import { Injectable} from '@angular/core';
import firebase from 'firebase';

@Injectable()
export class FirebaseService{

    constructor(){}


    getFirebaseReference(){
        var ref = firebase.database().ref("dm122-a163d/statuspedido");
    }




}