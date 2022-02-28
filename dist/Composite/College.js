"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.College = void 0;
const Organization_1 = require("./Organization");
class College extends Organization_1.Organization {
    constructor(name, desc) {
        super(name, desc);
        this.orgList = new Map();
    }
    /**
     * @override
     * @param name
     * @param org
     */
    add(name, org) {
        this.orgList.set(name, org);
    }
    remove(name) {
        this.orgList.delete(name);
    }
    print() {
        console.log(`\n-${this.getName()} —— ${this.getDesc()}-`);
        this.orgList.forEach((v, k, m) => {
            v.print();
        });
    }
}
exports.College = College;
//# sourceMappingURL=College.js.map