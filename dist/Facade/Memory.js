"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Memory = void 0;
class Memory {
    constructor() {
    }
    static getInstance() {
        return this.memory;
    }
    work() {
        console.log("memory work...");
    }
    off() {
        console.log("memory off...");
    }
}
exports.Memory = Memory;
Memory.memory = new Memory();
//# sourceMappingURL=Memory.js.map