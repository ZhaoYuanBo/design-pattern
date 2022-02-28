"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Department = void 0;
const Organization_1 = require("./Organization");
class Department extends Organization_1.Organization {
    constructor(name, desc) {
        super(name, desc);
    }
    print() {
        console.log(`${this.getName()}----${this.getDesc()}`);
    }
}
exports.Department = Department;
//# sourceMappingURL=Department.js.map