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
exports.VoltageAdapter = void 0;
var Voltage220V_1 = require("./Voltage220V");
var VoltageAdapter = /** @class */ (function (_super) {
    __extends(VoltageAdapter, _super);
    function VoltageAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VoltageAdapter.prototype.output5v = function () {
        var src = this.output220V();
        var dst = src / 44;
        console.log("\u9002\u914D\u8F6C\u6362\uFF1A".concat(src, "V -> ").concat(dst, "V"));
        return dst;
    };
    return VoltageAdapter;
}(Voltage220V_1.Voltage220V));
exports.VoltageAdapter = VoltageAdapter;
//# sourceMappingURL=VoltageAdapter.js.map