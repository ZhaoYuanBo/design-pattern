"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pizza = void 0;
/**
 * 抽象 Pizza类，制作过程分为 准备-烘烤-切块-打包
 * 其中 准备 过程设为抽象方法
 */
class Pizza {
    constructor() {
    }
    make() {
        this.prepare();
        this.bake();
        this.cut();
        this.box();
    }
    bake() {
        console.log(`正在烘烤 ${this.type} 披萨 `);
    }
    cut() {
        console.log(`正在切块 ${this.type} 披萨`);
    }
    box() {
        console.log(`正在打包 ${this.type} 披萨`);
    }
    setType(type) {
        this.type = type;
    }
}
exports.Pizza = Pizza;
//# sourceMappingURL=Pizza.js.map