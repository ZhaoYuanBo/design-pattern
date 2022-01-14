"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
var SimpleFactory_1 = require("./SimpleFactory");
var Order = /** @class */ (function () {
    function Order(type) {
        this.type = type;
        this.orderPizza(type).make();
    }
    Order.prototype.orderPizza = function (type) {
        return SimpleFactory_1.SimpleFactory.createPizza(type);
    };
    return Order;
}());
exports.Order = Order;
//# sourceMappingURL=Order.js.map