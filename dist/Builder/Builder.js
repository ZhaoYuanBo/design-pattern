"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Builder = void 0;
const House_1 = require("./House");
class Builder {
    build() {
        this.house = new House_1.House(this.buildBaise(), this.buildWall(), this.printColor());
        return this.house;
    }
}
exports.Builder = Builder;
//# sourceMappingURL=Builder.js.map