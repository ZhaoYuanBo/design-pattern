"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.SHPizza = void 0;
var Pizza_1 = require("./Pizza");
var SHPizza = /** @class */ (function (_super) {
    __extends(SHPizza, _super);
    function SHPizza() {
        var _this = _super.call(this) || this;
        _this.type = '上海';
        _super.prototype.setType.call(_this, _this.type);
        return _this;
    }
    SHPizza.prototype.prepare = function () {
        console.log("\u6B63\u5728\u51C6\u5907 ".concat(this.type, " \u62AB\u8428\uFF0C\u6765\u81EA\u4E0A\u6D77\u8679\u6865"));
    };
    return SHPizza;
}(Pizza_1.Pizza));
exports.SHPizza = SHPizza;
//# sourceMappingURL=SHCheesePizza.js.map