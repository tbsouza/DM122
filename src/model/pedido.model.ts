// Modelo dos pedidos

export class Pedido{

    private idPedido:string;
    private dataEmissao:string;
    private dataAtualizacao:string;
    private vendedor:string;
    private frete:string;
    private transportadora:string;
    private status:string;

    // construtor com sobrecarga de parametros
    constructor( dataEmissao:string, vendedor:string, frete:string, 
        transportadora:string, status:string, idPedido?:string, dataAtualizacao?:string ){

        this.idPedido = idPedido && idPedido || ("" + Math.floor(Math.random() * 10001));
        this.dataEmissao = dataEmissao;
        this.dataAtualizacao = dataAtualizacao && dataAtualizacao || dataEmissao;
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

    // data de atualizacao do pedido
    // utilizada na ordenacao dos pedidos
    setDataAtualizacao(){
        // data atual
        var dateObj = new Date();

        // Formata a data
        var day = ("0" + dateObj.getDate()).slice(-2);
        var month = ("0" + (dateObj.getMonth()+1)).slice(-2);
        var year = dateObj.getFullYear();
        
        // monta a data dd-mm-yyyy
        var date = day + "-" + month + "-" + year;

        // set data
        this.dataAtualizacao = date;
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