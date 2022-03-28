"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Graphic = void 0;
class Graphic {
    constructor() {
    }
    static getInstance() {
        return this.graphic;
    }
    prepare() {
        console.log("graphic prepare...");
    }
    work() {
        console.log("graphic work...");
    }
    off() {
        console.log("graphic off...");
    }
}
exports.Graphic = Graphic;
Graphic.graphic = new Graphic();
//# sourceMappingURL=Graphic.js.map