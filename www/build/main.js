webpackJsonp([2],{

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AboutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutPage');
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"C:\Users\tbsou\Desktop\Pós\2018\DM122 - HÍBRIDO\Trabalho\DM122\src\pages\about\about.html"*/'<!--\n  Generated template for the AboutPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Sobre</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <p id="sobre">\n      Trabalho desenvolvido por Thiago Barbosa de Souza com auxílio do professor Elton Barbosa para a disciplina DM122.\n    </p>\n</ion-content>\n'/*ion-inline-end:"C:\Users\tbsou\Desktop\Pós\2018\DM122 - HÍBRIDO\Trabalho\DM122\src\pages\about\about.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PedidoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_pedido_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_pedido_model__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__model_status_model__ = __webpack_require__(263);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PedidoPage = /** @class */ (function () {
    function PedidoPage(navCtrl, navParams, pedidoService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.pedidoService = pedidoService;
        this.status = ["Processando", "Executando", "Transporte"];
        this.isEdit = false;
        this.pedido = this.navParams.get("pedidoToEdit");
        if (this.pedido && this.pedido.getIdPedido()) {
            this.setStatus(this.pedido.getStatus());
            this.isEdit = true;
        }
        else {
            this.pedido = new __WEBPACK_IMPORTED_MODULE_4__model_pedido_model__["a" /* Pedido */]("", "", "", "", "Processando");
        }
    }
    PedidoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PedidoPage');
    };
    PedidoPage.prototype.salvar = function () {
        // Atualiza o status do pedido
        this.pedido.setStatus(__WEBPACK_IMPORTED_MODULE_5__model_status_model__["a" /* Status */][this.selectedStatus]);
        if (this.isEdit) {
            this.pedidoService.edit(this.pedido);
        }
        //go to home
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    PedidoPage.prototype.excluir = function (pedido) {
        this.pedidoService.excluirPedido(pedido);
    };
    PedidoPage.prototype.setStatus = function (valueStatus) {
        var _this = this;
        this.status.forEach(function (element) {
            if (__WEBPACK_IMPORTED_MODULE_5__model_status_model__["a" /* Status */][element] === valueStatus) {
                return _this.selectedStatus = element;
            }
        });
        return "";
    };
    PedidoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pedido',template:/*ion-inline-start:"C:\Users\tbsou\Desktop\Pós\2018\DM122 - HÍBRIDO\Trabalho\DM122\src\pages\pedido\pedido.html"*/'\n<!-- Pagina de Edição de um Pedido -->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Editar Pedido</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col width-100>\n        <ion-list>\n          <form (ngSubmit)="salvar()">\n\n              <ion-item>\n                <ion-label>id Pedido</ion-label>\n                <ion-input disabled="true" [(ngModel)]="pedido.idPedido" type="text" name="idPedido"></ion-input>\n              </ion-item>\n\n              <ion-item>\n                <ion-label>Data de Emissao</ion-label>\n                <ion-input disabled="true" [(ngModel)]="pedido.dataEmissao" type="text" name="dataEmissao"></ion-input>\n              </ion-item>\n\n              <ion-item>\n                <ion-label>Data de Atualizacao</ion-label>\n                <ion-input disabled="true" [(ngModel)]="pedido.dataAtualizacao" type="text" name="dataAtualizacao"></ion-input>\n              </ion-item>\n\n              <ion-item>\n                  <ion-label>Vendedor</ion-label>\n                  <ion-input disabled="true" [(ngModel)]="pedido.vendedor" type="text" name="vendedor"></ion-input>\n              </ion-item>\n\n              <ion-item>\n                  <ion-label>Frete</ion-label>\n                  <ion-input disabled="true" [(ngModel)]="pedido.frete" type="text" name="frete"></ion-input>\n              </ion-item>\n\n              <ion-item>\n                  <ion-label>Transportadora</ion-label>\n                  <ion-input disabled="true" [(ngModel)]="pedido.transportadora" type="text" name="transportadora"></ion-input>\n              </ion-item>\n\n              <!-- Apenas status do pedido habilitado para edicao -->\n              <ion-item>\n                <ion-label>Status Pedido</ion-label>\n                <ion-select name="selectedStatus" [(ngModel)]="selectedStatus">\n                  <ion-option [value]="s" *ngFor="let s of status">\n                    {{s}}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n\n              <button ion-button type="submit" block>Salvar</button>\n\n          </form>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\Users\tbsou\Desktop\Pós\2018\DM122 - HÍBRIDO\Trabalho\DM122\src\pages\pedido\pedido.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__services_pedido_service__["a" /* PedidoService */]])
    ], PedidoPage);
    return PedidoPage;
}());

//# sourceMappingURL=pedido.js.map

/***/ }),

/***/ 115:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 115;

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		290,
		1
	],
	"../pages/pedido/pedido.module": [
		291,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 156;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Pedido; });
// Modelo dos pedidos
var Pedido = /** @class */ (function () {
    // construtor com sobrecarga de parametros
    function Pedido(dataEmissao, vendedor, frete, transportadora, status, idPedido, dataAtualizacao) {
        this.idPedido = idPedido && idPedido || ("" + Math.floor(Math.random() * 10001));
        this.dataEmissao = dataEmissao;
        this.dataAtualizacao = dataAtualizacao && dataAtualizacao || dataEmissao;
        this.vendedor = vendedor;
        this.frete = frete;
        this.transportadora = transportadora;
        this.status = status;
    }
    Pedido.prototype.getIdPedido = function () {
        return this.idPedido;
    };
    Pedido.prototype.setDataEmissao = function (dataEmissao) {
        this.dataEmissao = dataEmissao;
    };
    Pedido.prototype.getDataEmissao = function () {
        return this.dataEmissao;
    };
    // data de atualizacao do pedido
    // utilizada na ordenacao dos pedidos
    Pedido.prototype.setDataAtualizacao = function () {
        // data atual
        var dateObj = new Date();
        // Formata a data
        var day = ("0" + dateObj.getDate()).slice(-2);
        var month = ("0" + (dateObj.getMonth() + 1)).slice(-2);
        var year = dateObj.getFullYear();
        // monta a data no formato dd-mm-yyyy
        var date = day + "-" + month + "-" + year;
        // set data
        this.dataAtualizacao = date;
    };
    Pedido.prototype.getDataAtualizacao = function () {
        return this.dataAtualizacao;
    };
    Pedido.prototype.setVendedor = function (vendedor) {
        this.vendedor = vendedor;
    };
    Pedido.prototype.getVendedor = function () {
        return this.vendedor;
    };
    Pedido.prototype.setFrete = function (frete) {
        this.frete = frete;
    };
    Pedido.prototype.getFrete = function () {
        return this.frete;
    };
    Pedido.prototype.setTransportadora = function (transportadora) {
        this.transportadora = transportadora;
    };
    Pedido.prototype.getTransportadora = function () {
        return this.transportadora;
    };
    Pedido.prototype.setStatus = function (status) {
        this.status = status;
    };
    Pedido.prototype.getStatus = function () {
        return this.status;
    };
    return Pedido;
}());

//# sourceMappingURL=pedido.model.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(225);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_pedido_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_pedido_pedido__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_about_about__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_pedido_pedido__["a" /* PedidoPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_about_about__["a" /* AboutPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pedido/pedido.module#PedidoPageModule', name: 'PedidoPage', segment: 'pedido', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_pedido_pedido__["a" /* PedidoPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_7__services_pedido_service__["a" /* PedidoService */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Status; });
//Define o status dos pedidos
var Status = [];
Status["Processando"] = "Processando";
Status["Executando"] = "Executando";
Status["Transporte"] = "Transporte";
//# sourceMappingURL=status.model.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(79);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\tbsou\Desktop\Pós\2018\DM122 - HÍBRIDO\Trabalho\DM122\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\tbsou\Desktop\Pós\2018\DM122 - HÍBRIDO\Trabalho\DM122\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_pedido_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pedido_pedido__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__about_about__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, pedidoService) {
        this.navCtrl = navCtrl;
        this.pedidoService = pedidoService;
        this.pedidos = null;
        this.pedidos = this.pedidoService.loadPedidos();
    }
    HomePage_1 = HomePage;
    HomePage.prototype.goToAbout = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__about_about__["a" /* AboutPage */]);
    };
    HomePage.prototype.editPedido = function (pedido) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pedido_pedido__["a" /* PedidoPage */], { "pedidoToEdit": pedido });
    };
    HomePage.prototype.deletePedido = function (pedido) {
        this.pedidoService.excluirPedido(pedido);
        this.navCtrl.push(HomePage_1); // apos excluir atualiza a pagina
    };
    // funcao do filtro de pedidos
    HomePage.prototype.getPedidos = function (ev) {
        // atualiza a lista de pedidos
        this.pedidos = this.pedidoService.loadPedidos();
        // valor digitado na busca
        var val = ev.target.value;
        // Filtra os pedidos por status
        if (val && val.trim() != '') {
            this.pedidos = this.pedidos.filter(function (pedido) {
                return (pedido.getStatus().toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    HomePage = HomePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\tbsou\Desktop\Pós\2018\DM122 - HÍBRIDO\Trabalho\DM122\src\pages\home\home.html"*/'<!-- Página inicial -->\n\n<ion-header>\n  <ion-navbar>\n    <ion-title>\n      PEDIDOS\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n    <ion-searchbar (ionInput)="getPedidos($event)" \n                    placeholder="Filtrar pedidos"\n                    animated="true">\n    </ion-searchbar>\n\n  <ion-list>\n    <ion-item-sliding *ngFor="let pedido of pedidos" [ngClass]="pedido.status">\n      <ion-item>\n        <h2>Pedido: {{pedido.idPedido}}</h2>\n        <p>Atualização: {{pedido.dataAtualizacao}}</p>\n      </ion-item>\n      <ion-item-options side="rigth">\n          <button (click)="editPedido(pedido)" ion-button color="secondary" large>\n            <ion-icon name="create"></ion-icon>\n          </button>\n          <button (click)="deletePedido(pedido)" ion-button color="danger" large>\n            <ion-icon name="trash"></ion-icon>\n          </button>\n      </ion-item-options>\n    </ion-item-sliding>\n\n    <ion-item></ion-item>\n  </ion-list>\n  <ion-fab right bottom>\n    <button ion-fab (click)="goToAbout()">\n      <ion-icon name="star"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-content>'/*ion-inline-end:"C:\Users\tbsou\Desktop\Pós\2018\DM122 - HÍBRIDO\Trabalho\DM122\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_pedido_service__["a" /* PedidoService */]])
    ], HomePage);
    return HomePage;
    var HomePage_1;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PedidoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_pedido_model__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PedidoService = /** @class */ (function () {
    function PedidoService(toastController) {
        this.toastController = toastController;
        // instancia lista de pedidos
        this.pedidos = new Array();
        // inicializa o firebase
        this.initializeFirebase();
        // referencia para o banco já ordenada por data de atualizacao
        this.referencia = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref('pedidos');
        // OBS.: Com o firebase é possível ordernar os pedidos por data de atualização
        // utilizando .orderByChild('dataAtualizacao') em ordem decescente
    }
    PedidoService.prototype.edit = function (pedido) {
        // Atualiza data de atualição do pedido
        pedido.setDataAtualizacao();
        // atualiza o pedido no banco - data de atualizacao e status
        this.referencia.child(pedido.getIdPedido()).update({
            dataAtualizacao: pedido.getDataAtualizacao(),
            status: pedido.getStatus()
        });
        var toast = this.toastController.create({
            message: 'Status do pedido ' + pedido.getIdPedido() + ' atualizado.',
            duration: 5000,
            position: 'top'
        });
        toast.present();
    };
    /*
        // adiciona novo pedido
        addPedido(pedido:Pedido){
            this.pedidos.push(pedido);
        }
    */
    // Obs.: Do ponto de vista do entregador, ao meu ver não faz sentido o
    //       entregador adicionar novos pedidos, apenas atualizá-los
    //exclui um pedido da lista
    PedidoService.prototype.excluirPedido = function (pedido) {
        // deleta o pedido do banco
        this.referencia.child(pedido.getIdPedido()).remove();
        var toast = this.toastController.create({
            message: 'Pedido ' + pedido.getIdPedido() + ' excluido.',
            duration: 5000,
            position: 'top'
        });
        toast.present();
    };
    // Obs.: Dependendo do contexto pode fazer sentido o entregador excluir um pedido
    //       Por exemplo, após o pedido ser entregue e finalizado
    //       Portanto o método de excluir está implementado
    // Carrega todo os pedidos
    PedidoService.prototype.loadPedidos = function () {
        this.pedidos = new Array();
        this.pedidos = this.getPedidos(this.pedidos);
        // retorna lista de pedidos ordenada
        return this.pedidos.sort(function (p1, p2) {
            return (p1.getDataAtualizacao() < p2.getDataAtualizacao() ? 1 : -1);
        });
    };
    // Pega todos os pedidos do firebase e add na lista de pedidos
    PedidoService.prototype.getPedidos = function (pedidos) {
        var attrPedidos;
        // acessa os pedidos no banco (pedidos/idPedido)
        this.referencia.on('value', function (snapshot) {
            // itera por todos os pedidos
            snapshot.forEach(function (childSnapshot) {
                attrPedidos = new Array();
                // itera pelos atributos de cada pedido
                for (var key in childSnapshot.val()) {
                    var value = childSnapshot.val()[key];
                    attrPedidos.push(value);
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
                pedidos.push(new __WEBPACK_IMPORTED_MODULE_1__model_pedido_model__["a" /* Pedido */](// construtor
                attrPedidos[1], attrPedidos[6], attrPedidos[2], attrPedidos[5], attrPedidos[4], attrPedidos[3], attrPedidos[0]));
                // Obs.: Não é a forma mais elegante, mas é a forma que consegui
            });
        });
        return pedidos;
    };
    PedidoService.prototype.initializeFirebase = function () {
        // Initialize Firebase
        var config = {
            apiKey: "AIzaSyArw0MxGt6VIhRxs_94ZbGJ8GqnO2QGLLE",
            authDomain: "dm122-a163d.firebaseapp.com",
            databaseURL: "https://dm122-a163d.firebaseio.com",
            projectId: "dm122-a163d",
            storageBucket: "dm122-a163d.appspot.com",
            messagingSenderId: "888253233343"
        };
        __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.initializeApp(config);
    };
    PedidoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* ToastController */]) === "function" && _a || Object])
    ], PedidoService);
    return PedidoService;
    var _a;
}());

//# sourceMappingURL=pedido.service.js.map

/***/ })

},[202]);
//# sourceMappingURL=main.js.map