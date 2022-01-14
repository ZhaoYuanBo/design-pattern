"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pizza = void 0;
/**
 * 抽象 Pizza类，制作过程分为 准备-烘烤-切块-打包
 * 其中 准备 过程设为抽象方法
 */
var Pizza = /** @class */ (function () {
    function Pizza() {
    }
    Pizza.prototype.make = function () {
        this.prepare();
        this.bake();
        this.cut();
        this.box();
    };
    Pizza.prototype.bake = function () {
        console.log("\u6B63\u5728\u70D8\u70E4 ".concat(this.type, " \u62AB\u8428 "));
    };
    Pizza.prototype.cut = function () {
        console.log("\u6B63\u5728\u5207\u5757 ".concat(this.type, " \u62AB\u8428"));
    };
    Pizza.prototype.box = function () {
        console.log("\u6B63\u5728\u6253\u5305 ".concat(this.type, " \u62AB\u8428"));
    };
    Pizza.prototype.setType = function (type) {
        this.type = type;
    };
    return Pizza;
}());
exports.Pizza = Pizza;
//# sourceMappingURL=Pizza.js.map