"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HZChessPizza = void 0;
const Pizza_1 = require("./Pizza");
class HZChessPizza extends Pizza_1.Pizza {
    constructor() {
        super();
        this.type = '杭州';
        super.setType(this.type);
    }
    prepare() {
        console.log(`正在准备 ${this.type} 披萨加入了西湖糖醋鱼`);
    }
}
exports.HZChessPizza = HZChessPizza;
//# sourceMappingURL=HZChessPizza.js.map