import { Injectable} from '@angular/core';
import { Pedido } from '../model/pedido.model';
import firebase from 'firebase';
import { Status } from '../model/status.model';

@Injectable()
export class PedidoService{

    pedidos:any;
    referencia:any;

    constructor(){

        // inicializa o firebase
        this.initializeFirebase();

        // referencia para o banco já ordenada por data de atualizacao
        this.referencia = firebase.database().ref('pedidos').orderByChild('dataAtualizacao');
        
        this.getPedidos();

        this.pedidos = new Array();
        this.pedidos.push( new Pedido("10-07-2018", "Thiago", "R$10", "China Mail", Status["Transporte"]) );
        this.pedidos.push( new Pedido("14-07-2018", "Barbosa", "R$20", "Fedex", Status["Processando"]) );
        this.pedidos.push( new Pedido("04-07-2018", "Souza", "R$14", "Correios", Status["Executando"]) );
    }

    // TODO update on firebase
    edit(pedido:Pedido){
        this.pedidos = this.pedidos.filter(p => p.getIdPedido() != pedido.getIdPedido());
        
        // Atualiza data de atualição do pedido
        pedido.setDataAtualizacao();
        // Armazena o pedido atualiza
        this.pedidos.push(pedido);

/*
        // atualiza o pedido no banco - data de atualizacao e status
        this.referencia.ref(pedido.getIdPedido()).update({
            dataAtualizacao : pedido.getDataAtualizacao(),
            status : pedido.getStatus()
        });

          //this.referencia.update();
*/
    }

    // TODO add to firebase
    addPedido(pedido:Pedido){
        this.pedidos.push(pedido);
    }

    // TODO return all from firebase
    loadPedidos(){

       //this.getPedidos();

        // retorna lista de pedidos ordenada
        return this.pedidos.sort( (p1,p2) => {
            if( p1.getDataAtualizacao() < p2.getDataAtualizacao() )
                return 1;
            if ( p1.getDataAtualizacao() > p2.getDataAtualizacao() )
                return -1;
            return 0;
        } );

    }

    // Pega todos os pedidos do firebase e add na lista de pedidos
    getPedidos(){

        console.log( this.referencia );
        
        var idPedidos = new Array();

        // pega todos os pedidos
        this.referencia.on('value', function (snapshot) {
   
            snapshot.forEach( function(childSnapshot) {
                console.log( "Key: " + childSnapshot.key + " Value: " + childSnapshot.value );
                idPedidos.push( childSnapshot.key );
              });

        });

        //this.referencia.ref( idPedidos[0] );

    }


    initializeFirebase(){
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


}