"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VoltageAdapter = void 0;
const Voltage220V_1 = require("./Voltage220V");
class VoltageAdapter extends Voltage220V_1.Voltage220V {
    output5v() {
        const src = this.output220V();
        const dst = src / 44;
        console.log(`适配转换：${src}V -> ${dst}V`);
        return dst;
    }
}
exports.VoltageAdapter = VoltageAdapter;
//# sourceMappingURL=VoltageAdapter.js.map