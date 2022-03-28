"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cpu = void 0;
class Cpu {
    constructor() {
    }
    static getInstance() {
        return this.cpu;
    }
    prepare() {
        console.log("cpu prepare...");
    }
    singleThread() {
        console.log("cpu singleThread...");
    }
    multiThread() {
        console.log("cpu multiThread...");
    }
    off() {
        console.log("cpu off...");
    }
}
exports.Cpu = Cpu;
Cpu.cpu = new Cpu();
//# sourceMappingURL=Cpu.js.map