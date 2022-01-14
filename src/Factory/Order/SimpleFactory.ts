import { HZChessPizza } from "../SimpleFactory/Pizza/HZChessPizza";
import { Pizza } from "../SimpleFactory/Pizza/Pizza";
import { SHPizza } from "../SimpleFactory/Pizza/SHCheesePizza";

/**
 * 简单工厂模式，也称静态工厂模式
 */
export class  SimpleFactory {
    constructor() {
        
    }

    static createPizza(type:string):Pizza{ 
        if(type=='HZ'){ 
          return new HZChessPizza();
        }
        else if(type =='SH'){ 
           return new SHPizza();
        }
    }
}