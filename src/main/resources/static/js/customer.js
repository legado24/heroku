import { fuctionAsincronaExpresada, functionAsincronaDeclarada } from "./customerService.js";
import { print, _$ } from "./util/util.js";


class CustomerJs {

    selects(){
    let sel_empresa=_$("sel_empresa");
    let sel_sede=_$("sel_sede");
    
    functionAsincronaDeclarada();
    fuctionAsincronaExpresada();

    }





}

(()=>{
    const customerJs=new CustomerJs();
    customerJs.selects();


})();