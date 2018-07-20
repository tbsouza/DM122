import { Injectable} from '@angular/core';
import { Pedido } from '../model/pedido.model';
import firebase from 'firebase';
import { Status } from '../model/status.model';

@Injectable()
export class PedidoService{

    pedidos:any;
    referencia:any;
    ref:any;

    constructor(){

        // instancia lista de pedidos
        this.pedidos = new Array();

        // inicializa o firebase
        this.initializeFirebase();

        // referencia para o banco já ordenada por data de atualizacao
        this.referencia = firebase.database().ref('pedidos');
            // OBS.: Com o firebase é possível ordernar os pedidos por data de atualização
            // utilizando .orderByChild('dataAtualizacao') porem abenas decescente
    }

    edit(pedido:Pedido){
        this.pedidos = this.pedidos.filter(p => p.getIdPedido() != pedido.getIdPedido());
        
        // Atualiza data de atualição do pedido
        pedido.setDataAtualizacao();
        // Armazena o pedido atualiza
        this.pedidos.push(pedido);

        // TODO - Corrigir erro

        // atualiza o pedido no banco - data de atualizacao e status
        this.referencia.ref(pedido.getIdPedido()).update({
            dataAtualizacao : pedido.getDataAtualizacao(),
            status : pedido.getStatus()
        });

          //this.referencia.update();
    }


    // adiciona novo pedido
    addPedido(pedido:Pedido){
        this.pedidos.push(pedido);
        // adiciona no firebase
    }


    //eclui um pedido da lista
    excluirPedido(pedido:Pedido){
        this.pedidos = this.pedidos.filter(p => p.getIdPedido() != pedido.getIdPedido());
    }


    // Carrega todo os pedidos
    loadPedidos(){

       this.getPedidos(this.pedidos);

       return this.pedidos;

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
    getPedidos(pedidos){
        
        var attrPedidos;

        // acessa os pedidos no banco (pedidos/idPedido)
        this.referencia.on('value', function (snapshot) {

            // itera por todos os pedidos
            snapshot.forEach( function(childSnapshot) {

                attrPedidos = new Array();

                // itera pelos atributos de cada pedido
                for ( let key in childSnapshot.val() ) {
                    let value = childSnapshot.val()[key];
                    attrPedidos.push( value );
                }

                /* 
                Key: idPedido
                0: dataAtualizacao
                1: dataEmissao
                2: frete
                3: idPedido
                4: status
                5: transportadora
                6: vendedor
                */
                // adiciona o pedido na lista para exibir
                pedidos.push( new Pedido(
                                attrPedidos[1],
                                attrPedidos[6],
                                attrPedidos[2],
                                attrPedidos[5],
                                attrPedidos[4],
                                attrPedidos[3],
                                attrPedidos[0]
                ) );

              });
        });

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