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
exports.HZChessPizza = void 0;
var Pizza_1 = require("./Pizza");
var HZChessPizza = /** @class */ (function (_super) {
    __extends(HZChessPizza, _super);
    function HZChessPizza() {
        var _this = _super.call(this) || this;
        _this.type = '杭州';
        _super.prototype.setType.call(_this, _this.type);
        return _this;
    }
    HZChessPizza.prototype.prepare = function () {
        console.log("\u6B63\u5728\u51C6\u5907 ".concat(this.type, " \u62AB\u8428\u52A0\u5165\u4E86\u897F\u6E56\u7CD6\u918B\u9C7C"));
    };
    return HZChessPizza;
}(Pizza_1.Pizza));
exports.HZChessPizza = HZChessPizza;
//# sourceMappingURL=HZChessPizza.js.map