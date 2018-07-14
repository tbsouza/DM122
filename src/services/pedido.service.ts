import { Injectable} from '@angular/core';
import { Pedido } from '../model/pedido.model';
import firebase from 'firebase';
import { Status } from '../model/status.model';

@Injectable()
export class PedidoService{

    pedidos:any;

    //TODO adiciona pedidos no firebase e cria array de pedidos
    constructor(){
        this.pedidos = new Array();
        this.pedidos.push( new Pedido("10-07-2018", "Thiago", "R$10", "Gol", Status["Transporte"]) );
        this.pedidos.push( new Pedido("08-07-2018", "Thiago", "R$20", "Fedex", Status["Processando"]) );
    }

    // TODO update on firebase
    edit(pedido:Pedido){
        this.pedidos = this.pedidos.filter(p => p.getIdPedido() != pedido.getIdPedido());
        // Atualiza data de atualição do pedido
        pedido.setDataAtualizacao();
        this.pedidos.push(pedido);
    }

    // TODO add to firebase
    addPedido(pedido:Pedido){
        this.pedidos.push(pedido);
    }

    // TODO return all from firebase
    loadPedidos(){

        // retorna lista de pedidos ordenada
        return this.pedidos.sort( (p1,p2) => {
            if( p1.getDataAtualizacao() > p2.getDataAtualizacao() )
                return 1;
            if ( p1.getDataAtualizacao() < p2.getDataAtualizacao() )
                return -1;
            return 0;
        } );

    }

    addFirebase(){
        
    }
    

}