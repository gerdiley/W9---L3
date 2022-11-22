var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Lavoratore = /** @class */ (function () {
    function Lavoratore(_codredd, _redditoannuolordo, _tasseinps, _tasseirpef) {
        this.codredd = _codredd;
        this.redditoannuolordo = _redditoannuolordo;
        this.tasseinps = _tasseinps;
        this.tasseirpef = _tasseirpef;
    }
    Lavoratore.prototype.getUtileTasse = function () {
        return this.redditoannuolordo * this.codredd / 100;
    };
    Lavoratore.prototype.getTasseInps = function () {
        return this.getUtileTasse() * this.tasseinps / 100;
    };
    Lavoratore.prototype.getTasseIrpef = function () {
        return this.getUtileTasse() * this.tasseirpef / 100;
    };
    Lavoratore.prototype.getRedditoAnnuoNetto = function () {
        return this.redditoannuolordo - (this.getTasseInps() + this.getTasseIrpef());
    };
    return Lavoratore;
}());
var Professionista = /** @class */ (function (_super) {
    __extends(Professionista, _super);
    function Professionista(_redditoannuolordo) {
        return _super.call(this, 78, _redditoannuolordo, 25.72, 5) || this;
    }
    return Professionista;
}(Lavoratore));
var Artigiano = /** @class */ (function (_super) {
    __extends(Artigiano, _super);
    function Artigiano(_redditoannuolordo) {
        return _super.call(this, 67, _redditoannuolordo, 35, 15) || this;
    }
    return Artigiano;
}(Lavoratore));
var Commerciante = /** @class */ (function (_super) {
    __extends(Commerciante, _super);
    function Commerciante(_redditoannuolordo) {
        return _super.call(this, 40, _redditoannuolordo, 35, 15) || this;
    }
    return Commerciante;
}(Lavoratore));
// istanza Professionista
var newProfessionista = new Professionista(30000);
console.log("Il reddito netto del professionista che guadagna ".concat(newProfessionista.redditoannuolordo, " lordi \u00E8 ").concat(newProfessionista.getRedditoAnnuoNetto()));
// istanza Artigiano
var newArtigiano = new Artigiano(40000);
console.log("Il reddito netto dell'artigiano che guadagna ".concat(newArtigiano.redditoannuolordo, " lordi e ").concat(newArtigiano.getRedditoAnnuoNetto()));
// istanza Commerciante
var newCommerciante = new Commerciante(50000);
console.log("Il reddito netto del commerciante che guadagna ".concat(newCommerciante.redditoannuolordo, " lordi e\u00E8 di ").concat(newCommerciante.getRedditoAnnuoNetto()));
