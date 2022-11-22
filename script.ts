
abstract class Lavoratore{
    codredd: number;
    redditoannuolordo: number;
    tasseinps: number;
    tasseirpef: number

    constructor(_codredd: number, _redditoannuolordo:number, _tasseinps:number, _tasseirpef:number){
        this.codredd = _codredd;
        this.redditoannuolordo =_redditoannuolordo;
        this.tasseinps = _tasseinps;
        this.tasseirpef = _tasseirpef;
    }

    getUtileTasse():number {
        return this.redditoannuolordo * this.codredd/100;
    }
    getTasseInps():number {
        return this.getUtileTasse() * this.tasseinps/100;
    }
    getTasseIrpef():number {
        return this.getUtileTasse() * this.tasseirpef/100;
    }
    getRedditoAnnuoNetto():number {
        return this.redditoannuolordo - (this.getTasseInps() + this.getTasseIrpef())
    }
}

class Professionista extends Lavoratore{
    constructor(_redditoannuolordo: number){
        super(78,_redditoannuolordo, 25.72, 5);
    }
}
class Artigiano extends Lavoratore{
    constructor(_redditoannuolordo: number){
        super(67,_redditoannuolordo, 35, 15);
    }
}
class Commerciante extends Lavoratore{
    constructor(_redditoannuolordo: number){
        super(40,_redditoannuolordo, 35, 15);
    }
}


// istanza Professionista
let newProfessionista = new Professionista(30000);

console.log(`Il reddito netto del professionista che guadagna ${newProfessionista.redditoannuolordo} lordi è ${newProfessionista.getRedditoAnnuoNetto()}`);


// istanza Artigiano
let newArtigiano = new Artigiano(40000);

console.log(`Il reddito netto dell'artigiano che guadagna ${newArtigiano.redditoannuolordo} lordi e ${newArtigiano.getRedditoAnnuoNetto()}`);

// istanza Commerciante
let newCommerciante = new Commerciante(50000);

console.log(`Il reddito netto del commerciante che guadagna ${newCommerciante.redditoannuolordo} lordi eè di ${newCommerciante.getRedditoAnnuoNetto()}`);