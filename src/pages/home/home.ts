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

     this.pedidos = this.pedidoService.loadPedidos() 
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
}
