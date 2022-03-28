"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Display = void 0;
class Display {
    constructor() {
    }
    static getInstance() {
        return this.display;
    }
    on() {
        console.log("display on ...");
    }
    lock() {
        console.log("display pause...");
    }
    off() {
        console.log("display off...");
    }
}
exports.Display = Display;
Display.display = new Display();
//# sourceMappingURL=Display.js.map