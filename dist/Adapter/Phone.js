"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Phone = void 0;
class Phone {
    charging(VoltageAdapter) {
        if (VoltageAdapter.output5v() == 5) {
            console.log('是5v，能充电');
        }
        else {
            console.log('不是5v，不能充电');
        }
    }
}
exports.Phone = Phone;
//# sourceMappingURL=Phone.js.map