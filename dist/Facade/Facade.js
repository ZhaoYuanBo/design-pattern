"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Facade = void 0;
const Cpu_1 = require("./Cpu");
const Display_1 = require("./Display");
const Graphic_1 = require("./Graphic");
const Memory_1 = require("./Memory");
class Facade {
    constructor() {
        this.cpu = Cpu_1.Cpu.getInstance();
        this.graphic = Graphic_1.Graphic.getInstance();
        this.memory = Memory_1.Memory.getInstance();
        this.display = Display_1.Display.getInstance();
    }
    on() {
        this.cpu.prepare();
        this.cpu.singleThread();
        this.graphic.prepare();
        this.memory.work();
        this.display.on();
    }
    working() {
        this.cpu.multiThread();
        this.graphic.work();
        this.memory.work();
        this.display.lock();
    }
    off() {
        this.cpu.off();
        this.graphic.off();
        this.memory.off();
        this.display.off();
    }
}
exports.Facade = Facade;
//# sourceMappingURL=Facade.js.map