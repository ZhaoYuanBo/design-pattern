import { Pizza } from "./Pizza";

export class  SHPizza extends Pizza {

    protected type: string ='上海';
    constructor() {
        super();
        super.setType(this.type);
    }
    protected prepare(): void {
        console.log(`正在准备 ${this.type} 披萨，来自上海虹桥`);        
    }
   
}