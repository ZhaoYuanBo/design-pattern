import { Pizza } from "./Pizza";

export class  HZChessPizza  extends Pizza {

    protected type: string = '杭州';
    constructor() {
        super();
        super.setType(this.type);
    }

    protected prepare(): void {
        console.log(`正在准备 ${this.type} 披萨加入了西湖糖醋鱼`);
    }
}