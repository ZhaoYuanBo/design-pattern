"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleFactory = void 0;
const HZChessPizza_1 = require("../SimpleFactory/Pizza/HZChessPizza");
const SHCheesePizza_1 = require("../SimpleFactory/Pizza/SHCheesePizza");
/**
 * 简单工厂模式，也称静态工厂模式
 */
class SimpleFactory {
    constructor() {
    }
    static createPizza(type) {
        if (type == 'HZ') {
            return new HZChessPizza_1.HZChessPizza();
        }
        else if (type == 'SH') {
            return new SHCheesePizza_1.SHPizza();
        }
    }
}
exports.SimpleFactory = SimpleFactory;
//# sourceMappingURL=SimpleFactory.js.map