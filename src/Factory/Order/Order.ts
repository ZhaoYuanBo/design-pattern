import { Pizza } from "../SimpleFactory/Pizza/Pizza";
import { SimpleFactory } from "./SimpleFactory";

export class  Order {

    type:string;
    constructor(type:string) {
        this.type =type;
        this.orderPizza(type).make();
    }

    orderPizza(type:string):Pizza{ 
        return SimpleFactory.createPizza(type);
    }
}