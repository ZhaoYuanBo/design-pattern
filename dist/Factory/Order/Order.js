"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const SimpleFactory_1 = require("./SimpleFactory");
class Order {
    constructor(type) {
        this.type = type;
        this.orderPizza(type).make();
    }
    orderPizza(type) {
        return SimpleFactory_1.SimpleFactory.createPizza(type);
    }
}
exports.Order = Order;
//# sourceMappingURL=Order.js.map