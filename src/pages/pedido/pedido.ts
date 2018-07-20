import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home'

import { PedidoService } from '../../services/pedido.service'
import { Pedido } from '../../model/pedido.model'
import { Status } from '../../model/status.model'

@IonicPage()
@Component({
  selector: 'page-pedido',
  templateUrl: 'pedido.html',
})
export class PedidoPage {

  pedido:Pedido;

  selectedStatus:string;
  status = ["Processando","Executando","Transporte"];
  isEdit = false;

  
  constructor(public navCtrl: NavController, public navParams: NavParams,
               private pedidoService:PedidoService) {
    
    this.pedido = this.navParams.get( "pedidoToEdit" );

    if (this.pedido && this.pedido.getIdPedido()) {
      this.setStatus( this.pedido.getStatus() );
      this.isEdit = true;
    } else {
      this.pedido = new Pedido("","","","","Processando");
    }
  
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad PedidoPage');
  }


  salvar(){ 
    
    // Atualiza o status do pedido
    this.pedido.setStatus( Status[this.selectedStatus] );
    
    if(this.isEdit){
        this.pedidoService.edit(this.pedido);
    }
    else{
        this.pedidoService.addPedido(this.pedido);
    }
    
    //go to home
    this.navCtrl.push(HomePage);

  }


  excluir(pedido){
    this.pedidoService.excluirPedido(pedido);
  }


  private setStatus( valueStatus:string ){
      this.status.forEach(
        element => {
          if(Status[element] === valueStatus){
            return this.selectedStatus = element;
          }
        }
      )

      return "";
  }

}
