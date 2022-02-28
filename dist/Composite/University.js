"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.University = void 0;
const Organization_1 = require("./Organization");
class University extends Organization_1.Organization {
    constructor(name, desc) {
        super(name, desc);
        /**子节点放入orgList中 */
        this.orgList = new Map();
    }
    add(name, org) {
        this.orgList.set(name, org);
    }
    remove(name) {
        this.orgList.delete(name);
    }
    print() {
        console.log(`--${this.getName()} —— ${this.getDesc()}--`);
        this.orgList.forEach((v, k, m) => {
            v.print();
        });
    }
}
exports.University = University;
//# sourceMappingURL=University.js.map