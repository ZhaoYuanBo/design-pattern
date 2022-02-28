"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SHPizza = void 0;
const Pizza_1 = require("./Pizza");
class SHPizza extends Pizza_1.Pizza {
    constructor() {
        super();
        this.type = '上海';
        super.setType(this.type);
    }
    prepare() {
        console.log(`正在准备 ${this.type} 披萨，来自上海虹桥`);
    }
}
exports.SHPizza = SHPizza;
//# sourceMappingURL=SHCheesePizza.js.map