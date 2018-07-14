// Modelo dos pedidos

export class Pedido{

    private idPedido:string;
    private dataEmissao:string;
    private dataAtualizacao:number;
    private vendedor:string;
    private frete:string;
    private transportadora:string;
    private status:string;

    constructor(dataEmissao:string, vendedor:string, frete:string, 
                transportadora:string, status:string ){
        this.idPedido = "" + Math.floor(Math.random() * 10001);
        this.dataEmissao = dataEmissao;
        this.dataAtualizacao = Date.now();
        this.vendedor = vendedor;
        this.frete = frete;
        this.transportadora = transportadora;
        this.status = status;
    }

    getIdPedido(){
        return this.idPedido;
    }

    setDataEmissao(dataEmissao:string){
        this.dataEmissao = dataEmissao;
    }

    getDataEmissao(){
        return this.dataEmissao
    }

    setDataAtualizacao(){
        this.dataAtualizacao = Date.now();
    }

    getDataAtualizacao(){
        return this.dataAtualizacao;
    }

    setVendedor(vendedor:string){
        this.vendedor = vendedor;
    }

    getVendedor(){
        return this.vendedor;
    }

    setFrete(frete:string){
        this.frete = frete;
    }

    getFrete(){
        return this.frete;
    }

    setTransportadora(transportadora:string){
        this.transportadora = transportadora;
    }

    getTransportadora(){
        return this.transportadora;
    }

    setStatus(status:string){
        this.status = status;
    }

    getStatus(){
        return this.status;
    }

}