"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Organization = void 0;
class Organization {
    constructor(name, desc) {
        this.name = name;
        this.desc = desc;
    }
    getName() {
        return this.name;
    }
    setName(value) {
        this.name = value;
    }
    getDesc() {
        return this.desc;
    }
    setDesc(value) {
        this.desc = value;
    }
    add(name, org) { }
    remove(name) { }
}
exports.Organization = Organization;
//# sourceMappingURL=Organization.js.map