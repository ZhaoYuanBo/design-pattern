"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleFactory = void 0;
var HZChessPizza_1 = require("../SimpleFactory/Pizza/HZChessPizza");
var SHCheesePizza_1 = require("../SimpleFactory/Pizza/SHCheesePizza");
/**
 * 简单工厂模式，也称静态工厂模式
 */
var SimpleFactory = /** @class */ (function () {
    function SimpleFactory() {
    }
    SimpleFactory.createPizza = function (type) {
        if (type == 'HZ') {
            return new HZChessPizza_1.HZChessPizza();
        }
        else if (type == 'SH') {
            return new SHCheesePizza_1.SHPizza();
        }
    };
    return SimpleFactory;
}());
exports.SimpleFactory = SimpleFactory;
//# sourceMappingURL=SimpleFactory.js.map