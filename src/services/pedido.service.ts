import { Injectable} from '@angular/core';
import { Pedido } from '../model/pedido.model';
import firebase from 'firebase';
import { Status } from '../model/status.model';
import { ToastController } from 'ionic-angular'

@Injectable()
export class PedidoService{

    pedidos:any;
    referencia:any;

    constructor(private toastController:ToastController){

        // instancia lista de pedidos
        this.pedidos = new Array();

        // inicializa o firebase
        this.initializeFirebase();

        // referencia para o banco já ordenada por data de atualizacao
        this.referencia = firebase.database().ref('pedidos');
            // OBS.: Com o firebase é possível ordernar os pedidos por data de atualização
            // utilizando .orderByChild('dataAtualizacao') em ordem decescente
    }

    edit(pedido:Pedido){
        // Atualiza data de atualição do pedido
        pedido.setDataAtualizacao();

        // atualiza o pedido no banco - data de atualizacao e status
        this.referencia.child(pedido.getIdPedido()).update({
            dataAtualizacao : pedido.getDataAtualizacao(),
            status : pedido.getStatus()
        });

        let toast = this.toastController.create({
            message: 'Status do pedido ' + pedido.getIdPedido() + ' atualizado.',
            duration: 5000,
            position: 'top'
        })
        toast.present();
    }

/*
    // adiciona novo pedido
    addPedido(pedido:Pedido){
        this.pedidos.push(pedido);
    }
*/
// Obs.: Do ponto de vista do entregador, ao meu ver não faz sentido o
//       entregador adicionar novos pedidos, apenas atualizá-los


    //exclui um pedido da lista
    excluirPedido(pedido:Pedido){
        // deleta o pedido do banco
        this.referencia.child( pedido.getIdPedido() ).remove();

        let toast = this.toastController.create({
            message: 'Pedido ' + pedido.getIdPedido() + ' excluido.',
            duration: 5000,
            position: 'top'
        })
        toast.present();
    }
// Obs.: Dependendo do contexto pode fazer sentido o entregador excluir um pedido
//       Por exemplo, após o pedido ser entregue e finalizado
//       Portanto o método de excluir está implementado


    // Carrega todo os pedidos
    loadPedidos(){

        this.pedidos = new Array<Pedido>();
        this.pedidos = this.getPedidos(this.pedidos);

        // retorna lista de pedidos ordenada
        return this.pedidos.sort( (p1,p2) => 
                (p1.getDataAtualizacao() < p2.getDataAtualizacao() ? 1 : -1)
          );
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

                /* attrPedidos
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
                pedidos.push( new Pedido( // construtor
                                attrPedidos[1],
                                attrPedidos[6],
                                attrPedidos[2],
                                attrPedidos[5],
                                attrPedidos[4],
                                attrPedidos[3],
                                attrPedidos[0]
                            ));
                    // Obs.: Não é a forma mais elegante, mas é a forma que consegui
              });
        });

        return pedidos;
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