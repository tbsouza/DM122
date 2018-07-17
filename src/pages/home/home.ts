import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PedidoService } from '../../services/pedido.service'
import { Pedido } from '../../model/pedido.model'
import { PedidoPage } from '../pedido/pedido'


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  pedidos:Array<Pedido>

  constructor(public navCtrl: NavController, private pedidoService:PedidoService) {

     this.pedidos = this.pedidoService.loadPedidos();
  }

  goToPedido(){
      this.navCtrl.push(PedidoPage)
  }

  editItem(item:Pedido){
    this.navCtrl.push(PedidoPage, {"pedidoToEdit": item})
  }

  deleteItem(item){
    //TODO:remover item
  }

  // funcao do filtro de pedidos
  getPedidos(ev: any) {

    // atualiza a lista de pedidos
    this.pedidos = this.pedidoService.loadPedidos()

    // valor digitado na busca
    let val = ev.target.value;

    // Filtra os pedidos por status
    if (val && val.trim() != '') {
      this.pedidos = this.pedidos.filter((pedido) => {
        return (pedido.getStatus().toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }

  }



}
